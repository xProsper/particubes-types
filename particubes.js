import { readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";

const getTypeTemplate = r =>`declare namespace ${r.type} {

}`;

const getIndexTemplate = r => `
${getModules(r).join("\n")}
`;

const getModules = ({ blocks }) => blocks
  .filter(block => Object.keys(block).includes("list"))[0]
  .list.map(item => `/// <reference path="./${item.replace(/<[^>]+>/gi, "")}.d.ts" />`);

readdirSync("./resources").forEach(file => {
  const r = JSON
    .parse(readFileSync(path.join("./resources", file), "utf8")
    .replace(/built-ins/gi, "builtIns"));

  const typeTemplate = getTypeTemplate(r);

  if (!r.type) {
    writeFileSync(`./types/index.d.ts`, getIndexTemplate(r));
  } else {
    if (r.type.substring(0, 1) === r.type.substring(0, 1).toUpperCase())
      writeFileSync(`./types/${r.type}.d.ts`, typeTemplate);
  };
});