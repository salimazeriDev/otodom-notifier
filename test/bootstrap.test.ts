import { Bootstrap } from "../src/bootstrap";
import { OtodomScrapper } from "../src/scrapper/otodom_scrapper";

describe("Bootstrap", () => {
  const scrapper = new OtodomScrapper();
  const bootstrap = new Bootstrap(scrapper);

  test("calls scrapper", () => {
    expect(scrapper.call).toHaveBeenCalled();
  });
});
