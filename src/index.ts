import "reflect-metadata";
import { container } from "tsyringe";
import { Bootstrap } from "./bootstrap";

async function main() {
  const bootstrap = container.resolve(Bootstrap);
  await bootstrap.call();
}

main();
