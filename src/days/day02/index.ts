import { readInput } from "../../utils/readInput";
import { part1 } from "./part1";
import { part2 } from "./part2";

export function run(day: number) {
  const input = readInput(day);

  console.log(`Day ${day} – Part 1:`, part1(input));
  console.log(`Day ${day} – Part 2:`, part2(input));
}
