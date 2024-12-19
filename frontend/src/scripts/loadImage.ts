import * as fs from "fs/promises";
import path from "path";

export default async function loadImage(imgPath: string) {
  let target;
  target = await fs.readFile(path.join("../public", imgPath));
  return target;
}
