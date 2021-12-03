import { readdirSync, readFileSync, writeFileSync, rmSync, mkdirSync } from "fs";
import path from "path";

const getTypeTemplate = ({
  description: d,
  type: t,
  constructors: c,
  builtIns: b,
  properties: p,
  functions: f
}) => 
[
// description
d ?
`
/**
${d}
*/
` : ``
,
// type
t ? `declare interface ${t} {`: ``
,
// constructors
c ? c.map(({ description, arguments: args, samples }) => [
description ? `
/**
${description}
` : ``
,
samples !== undefined && samples.length !== undefined ? `
[Samples]
` : ``
,
samples !== undefined && samples.length !== undefined ? samples.map(({ code }) => [
code ? `
${code.replace(/\n/, "\n\n")}` : ``
].join("")).join("") : ``
,
description ? `
*/
` : ``
,
args && args.some(arg => arg === null) ? `constructor: () => ${t};
` : ``
,
args ? `constructor: (` : ``
,
args ? args.filter((arg => arg !== null)).flat().map(({name, type}, index) => [
name && type && index > 0 ? `, ` : ``
,
name && type ? `${name}: ${type}` : ``
].join("")).join("") : ``
,
args ? `) => ${t};
` : ``
].join("")).join("") : ``
,
// built-ins (immutable properties)
b ? b.map(({ name, type, readOnly, description }) => [
description ? `
/**
${description}
*/
` : ``
,
readOnly ? `readonly ` : ``
,
name ? `${name}: ` : ``
,
type ? `${type};
` : ``
].join("")).join("") : ``
,
// properties
p ? p.map(({ name, type, description, samples, hide }) => !hide ? [
description ? `
/**
${description}
` : ``
,
samples !== undefined && samples.length !== undefined ? `
[Samples]
` : ``
,
samples !== undefined && samples.length !== undefined ? samples.map(({ code }) => [
code ? `
${code.replace(/\n/, "\n\n")}` : ``
].join("")).join("") : ``
,
description ? `
*/
` : ``
,
name ? `${name}: ` : ``
,
type ? `${type};
` : ``
].join("") : ``).join("") : ``
,
// functions
f ? f.map(({ name, return: returns, arguments: args, description, samples, hide }) => !hide ? [
description ? `
/**
${description}
` : ``
,
samples !== undefined && samples.length !== undefined ? `
[Samples]
` : ``
,
samples !== undefined && samples.length !== undefined ? samples.map(({ code }) => [
code ? `
${code.replace(/\n/, "\n\n")}` : ``
].join("")).join("") : ``
,
description ? `
*/
` : ``
,
!args && returns && returns[0] && returns[0].type ? `${name}(): ${returns[0].type}` : ``
,
!args && returns && returns[0] && returns[0].type ? `${name}(): ${returns[0].type}` : ``
,
args && args.some(arg => arg === null) && returns && returns[0] && returns[0].type ? `${returns[0].type};
` : ``
,
args && args.some(arg => arg === null) ? `${name}(): void;
` : ``
,
args ? args.filter((arg => arg !== null)).map((argSet, index, arr) => 
argSet && argSet.name && argSet.type ? [
index === 0 ? `${name}(` : ``
,
index > 0 ? `, ` : ``
,
`${argSet.name}: ${argSet.type}`
,
index === arr.length -1 ? [`): `
,
returns && returns[0] && returns[0].type ? `${returns[0].type}` : `void`
,
`;
`].join("") : ``
].join("")
:
[
`${name} (`
,
argSet.filter((arg => arg !== null)).map(({ name: innerName, type }, innerIndex) => [
innerName && type && innerIndex > 0 ? `, ` : ``
,
innerName && type ? `${innerName}: ${type}` : ``
].join("")).join("")
,
`): `
,
returns && returns[0] && returns[0].type ? `${returns[0].type}` : `void`
,
`;
`
].join("")).join("") : ``
].join("") : ``).join("") : ``
,
t ? `}

export = ${t};` : ``
].join("\n");

// Execution starts here

rmSync("./types", {recursive: true});
mkdirSync("./types");

const getIndexTemplate = r => `${getModules(r).join("\n")}
`;

const getModules = ({ blocks }) => blocks
  .filter(block => Object.keys(block).includes("list"))[0]
  // .list.map(item => `/// <reference path="./${item.replace(/<[^>]+>/gi, "")}.d.ts" />`);
  .list.map(item => `export * from "./types/${item.replace(/<[^>]+>/gi, "")}.d.ts";`);

readdirSync("./resources").forEach(file => {
  const r = JSON
    .parse(readFileSync(path.join("./resources", file), "utf8")
    .replace(/built-ins/gi, "builtIns")
    .replace(/read-only/gi, "readOnly")
    .replace(/"type": "integer"/gi, `"type": "number"`)
    .replace(/"argument-sets":/gi, `"arguments":`)
    );

  const typeTemplate = getTypeTemplate(r);
  if (!r.type) {
    writeFileSync(`./index.d.ts`, getIndexTemplate(r));
  } else {
    if (r.type.substring(0, 1) === r.type.substring(0, 1).toUpperCase())
      writeFileSync(`./types/${r.type}.d.ts`, typeTemplate);
  };
});