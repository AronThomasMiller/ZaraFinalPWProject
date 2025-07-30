import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchComponent extends BasePage {
  readonly searchBox: Locator = this.page.getByRole("searchbox", {
    name: "Введення тексту для пошуку",
  });
  readonly searchLink: Locator = this.page.getByRole("link", { name: "Пошук" });

  async searchForProduct(productName: string) {
    await this.searchBox.fill(productName);
    await this.page
      .getByRole("option", { name: productName, exact: true })
      .locator("span")
      .click();
  }

  async clickSearchLink() {
    await this.searchLink.click();
  }
}