const {execSync} = require("child_process");
const {existsSync : e , renameSync : mv } = require("fs");
const {resolve : r} = require("path");

const repo = "https://github.com/Abhay2132/apps" || process.env.repo
const dir = repo.split("/")[repo.split("/").length -1]
const clone = `rm ${dir} node_modules -rfv ; rm src -rf; git clone ${repo}`
const start = "./src/server"  || process.env.start

const nm = r(dir, "node_modules");
const src = r(dir, "src");

console.time("cloned in ");
execSync(clone);
console.timeEnd("cloned in ");

console.time("moved in ");
if(e(src)) mv(src, r("src"));
if (e(nm)) mv(nm, r("node_modules"));
console.timeEnd("moved in ");

require(start)();
