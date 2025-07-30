import { Locator, expect } from "@playwright/test";
import { HeaderComponent } from "./HeaderComponent";
import { BasePage } from "./BasePage";

export class SearchResultPage extends BasePage {
  readonly sizeSelectorLocator: string =
    '//button[contains(@class, "size-selector") and not(descendant::span)]';
  readonly plusButtons: Locator = this.page
    .getByRole("listitem")
    .getByLabel("Додати в кошик");
  readonly sizeSelector: Locator = this.page.locator(this.sizeSelectorLocator);
  readonly header: HeaderComponent = new HeaderComponent(this.page);
  readonly closeButton: Locator = this.page.getByRole("button", {
    name: "Закрити",
  });

  async waitForPlusButtons() {
    await this.page.waitForSelector("button[aria-label*='Додати в кошик']");
  }

  async getPlusButtonCount() {
    return await this.plusButtons.count();
  }

  async addItemWithMultipleSizes(buttonCount: number, amount: number) {
    for (let i = 0; i < buttonCount; i++) {
      const currentButton = this.plusButtons.nth(i);
      await currentButton.click();
      await this.page.waitForSelector(this.sizeSelectorLocator);
      const sizes = this.sizeSelector;
      const sizesCount = await sizes.count();
      if (sizesCount < 4) {
        continue;
      } else {
        for (let j = 0; j < sizesCount; j++) {
          if (j !== 0) {
            await currentButton.click();
          }
          await sizes.nth(j).click();
          await expect(this.header.cartAmount).toHaveText(String(++amount));
          await this.closeButton.click();
        }
        break;
      }
    }
  }
}
