import { inject, singleton } from "tsyringe";
import { OtodomScrapper } from "./scrapper/otodom_scrapper";

@singleton()
export class Bootstrap {
  constructor(@inject(OtodomScrapper) private scrapper: OtodomScrapper) {}

  public async call() {
    await this.scrapper.call();
  }
}
