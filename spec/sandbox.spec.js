import { should } from "chai";

should();

describe("Sandbox", () => {
  before(() => {
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    title.should.eql("Sandbox");

    const header = await element(by.css("h1")).getText();
    header.should.eql("Sandbox");
  });
}).timeout(20000);
