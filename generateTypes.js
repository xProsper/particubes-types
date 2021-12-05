import { readdirSync, readFileSync, writeFileSync, rmSync, mkdirSync, appendFileSync } from "fs";
import path from "path";

const getTypeTemplate = ({
  description: d,
  type: t,
  // constructors: c,
  builtIns: b,
  properties: p,
  functions: f
}) => 
[
// imports
t === "Event" ? `
import _Player from "./_Player";
import _OtherPlayers from "./_OtherPlayers";
import _Players from "./_Players";
import _Server from "./_Server";
` : ``
,
// fetchTypes({c, b, p, f}, t)
fetchTypes({b, p, f}, t)
,
// description
d ?
`
/**
${d}
*/
` : ``
,
// type
t ? `declare interface _${t} {`: ``
,
// constructors
// c ? c.map(({ description, arguments: args, samples }) => [
// description ? `
// /**
// ${description}
// ` : ``
// ,
// samples !== undefined && samples.length !== undefined ? `
// [Samples]
// ` : ``
// ,
// samples !== undefined && samples.length !== undefined ? samples.map(({ code }) => [
// code ? `
// ${code.replace(/\n/, "\n\n")}` : ``
// ].join("")).join("") : ``
// ,
// description ? `
// */
// ` : ``
// ,
// args && args.some(arg => arg === null) || !args ? `constructor: () => _${t};
// ` : ``
// ,
// args ? `constructor: (` : ``
// ,
// args ? args.filter((arg => arg !== null && JSON.stringify(arg).indexOf("...") === -1)).flat().map(({name, type}, index) => [
// name && type && index > 0 ? `, ` : ``
// ,
// name && type ? `${name}: _${type}` : ``
// ].join("")).join("") : ``
// ,
// args ? `) => _${t};
// ` : ``
// ].join("")).join("") : ``
// ,
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
type ? `_${type};
` : ``
].join("")).join("") : ``
,
// properties
p ? p.map(({ name, type, description, samples, hide, types }) => !hide ? [
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
name !== "Recipients" && type ? `_${type};
` : ``
,
name === "Recipients" ? `(_Player | _OtherPlayers | _Players | _Server)[];
` : ``
,
types ? `${types.map(type => `_${type}`).join(" | ")};
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
(!args || args.some(arg => arg === null)) && returns && returns[0] && returns[0].type ? `${name}(): _${returns[0].type};
` : ``
,
!(!args || args.some(arg => arg === null)) && returns && returns[0] && returns[0].type &&
![
  "Box",
  "Block",
  "Number3"
].includes(returns[0].type) ? `_${returns[0].type};
` : ``
,
name === "SendTo" ? `${name}(recipients: _Event["Recipients"]): void;
` : ``
,
args && args.some(arg => arg === null) && !(returns && returns[0] && returns[0].type) ? `${name}(): void;
` : ``
,
args ? args.filter((arg => arg !== null)).map((argSet, index, arr) => 
argSet && argSet.name && argSet.type ? [
index === 0 ? `${name}(` : ``
,
index > 0 ? `, ` : ``
,
`${argSet.name}: _${argSet.type}`
,
index === arr.length -1 ? [`): `
,
returns && returns[0] && returns[0].type ? `_${returns[0].type}` : `void`
,
`;
`].join("") : ``
].join("")
:
[
argSet.filter((arg => arg !== null && JSON.stringify(arg).indexOf("...") === -1)).length !== 0 ? `${name}(` : ``
,
argSet.filter((arg => arg !== null && JSON.stringify(arg).indexOf("...") === -1)).map(({ name: innerName, type }, innerIndex) => [
innerName && type && innerIndex > 0 ? `, ` : ``
,
innerName && type ? `${innerName}: _${type}` : ``
].join("")).join("")
,
argSet.filter((arg => arg !== null && JSON.stringify(arg).indexOf("...") === -1)).length !== 0 ? `): ` : ``
,
argSet.filter((arg => arg !== null && JSON.stringify(arg).indexOf("...") === -1)).length !== 0 ? returns && returns[0] && returns[0].type ? `_${returns[0].type}` : `void` : ``
,
argSet.filter((arg => arg !== null && JSON.stringify(arg).indexOf("...") === -1)).length !== 0 ? `;
` : ``
].join("")).join("") : ``
].join("") : ``).join("") : ``
,
t ? `}

export default _${t};` : ``
].join("\n");

const getIndexTemplate = r => `${getModules(r).join("\n")}`;

const getModules = ({ blocks }) => blocks
  .filter(block => block && block.list)[0]
  .list.map(item => `import * as _${item.replace(/<[^>]+>/gi, "")} from "./types/_${item.replace(/<[^>]+>/gi, "")}";`);

const fetchTypes = (obj, name) => {
  const response = [];
  const iterator = JSON.stringify(obj).matchAll(/"type":"[^"]+"/gim);
  while(true) {
    const current = iterator.next();
    if (!current.done) {
      const currentType = `_${current.value[0].replace(/"type":"/, "").replace(/"/, "")}`;

      switch(currentType) {
        case `_${name}`:
        case "_recipients":
          break;
        case "_number": 
        case "_nil":
        case "_boolean":
        case "_function":
        case "_string":
        case "_array":
        case "_table":
        case "_Item": // FIXME when Item & Inputs type actually exist in reference
        case "_Inputs":
          response.push(`import { ${currentType} } from "../Manual";`)
          break;
        default:
          response.push(`import ${currentType} from "./${currentType}";`)
          break;
      }
    } else {
      break;
    }
  }
  return sortedUniq(response).join(`
`);
}

const removeImports = template => template.replace(/import[^;]+;/g, "");

const sortedUniq = arr => [...new Set(arr)].sort()

  // Execution starts here
rmSync("./types", {recursive: true});
rmSync("temp.d.ts");
rmSync("Particubes.d.ts");
mkdirSync("./types");

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
    // writeFileSync(`./index.ts`, getIndexTemplate(r));
  } else {
    if (r.type.substring(0, 1) === r.type.substring(0, 1).toUpperCase()) {
      writeFileSync(`./types/_${r.type}.d.ts`, typeTemplate);
      appendFileSync("temp.d.ts", typeTemplate);
    }
  };
});

writeFileSync("Particubes.d.ts",
`import { _number } from "./Manual";
import { _nil } from "./Manual";
import { _boolean } from "./Manual";
import { _function } from "./Manual";
import { _array } from "./Manual";
import { _string } from "./Manual";
import { _table } from "./Manual";
import { _Item } from "./Manual";
import { _Inputs } from "./Manual";`
);

appendFileSync("Particubes.d.ts", readFileSync("temp.d.ts", "utf8")
.replace(/import[^\n]+\n|export[^\n]+\n/g, "")
)


