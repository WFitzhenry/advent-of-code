const day = Number(process.argv[2]);

if (!day || day < 1 || day > 25) {
  console.error("Usage: npm run day <1-25>");
  process.exit(1);
}

import(`./days/day${String(day).padStart(2, "0")}/index`)
  .then((mod) => mod.run(day))
  .catch(() => {
    console.error(`Day ${day} not implemented yet`);
  });
