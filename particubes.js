import { readdirSync, readFileSync } from "fs";
import path from "path";

export default readdirSync("./resources").map((file) => JSON.parse(readFileSync(path.join("./resources", file), "utf8")));