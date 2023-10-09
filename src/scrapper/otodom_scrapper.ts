import { singleton } from "tsyringe";

@singleton()
export class OtodomScrapper {
  public async call() {
    const msg = await Promise.resolve("Otodom scrapper called");
    console.log(msg);
  }
}
