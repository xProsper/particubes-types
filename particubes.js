import { readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";

const getTypeTemplate = ({
  description: d,
  type: t,
  constructors: c,
  builtIns: b
}) => 
[
d ?
`
/**
${d}
*/
` : ``
,
t ? `declare namespace ${t} {`: ``
,
c ? c.map(({ description, arguments: args }) => [
description ? `
/**
${description}
*/
` : ``
,
args ? `const constructor = (` : ``
,
args ? args.map(({name, type}, index) => [
name && type && index > 0 ? `, ` : ``
,
name && type ? `${name}: ${type}` : ``
].join("")).join("") : ``
,
args ? `) => ${t};
` : ``
].join("")).join("") : ``
,
b ? b.map(({ name, type, readOnly, description }) => [
description ? `
/**
${description}
*/
` : ``
,
readOnly ? `readonly ` : ``
,
name ? `const ${name}: ` : ``
,
type ? `${type};
` : ``
].join("")).join("") : ``
,
t ? `}` : ``
].join("\n");


const getIndexTemplate = r => `${getModules(r).join("\n")}
`;

const getModules = ({ blocks }) => blocks
  .filter(block => Object.keys(block).includes("list"))[0]
  .list.map(item => `/// <reference path="./${item.replace(/<[^>]+>/gi, "")}.d.ts" />`);

readdirSync("./resources").forEach(file => {
  const r = JSON
    .parse(readFileSync(path.join("./resources", file), "utf8")
    .replace(/built-ins/gi, "builtIns")
    .replace(/read-only/gi, "readOnly")
    .replace(/"type": "integer"/gi, `"type": "number"`));

  const typeTemplate = getTypeTemplate(r);

  if (!r.type) {
    writeFileSync(`./types/index.d.ts`, getIndexTemplate(r));
  } else {
    if (r.type.substring(0, 1) === r.type.substring(0, 1).toUpperCase())
      writeFileSync(`./types/${r.type}.d.ts`, typeTemplate);
  };
});