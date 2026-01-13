import fs from "fs";
import path from "path";

export function readInput(day: number): string {
  const filePath = path.join(
    __dirname,
    `../days/day${String(day).padStart(2, "0")}/input.txt`
  );

  return fs.readFileSync(filePath, "utf-8").trimEnd();
}
