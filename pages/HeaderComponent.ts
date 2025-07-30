import { expect, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HeaderComponent extends BasePage {
  readonly cartAmount: Locator = this.page.locator(
    "//span[text()='Кошик']/following-sibling::span"
  );

  async getCartAmount() {
    const amountText = await this.cartAmount.textContent();
    return Number(amountText);
  }

  async expectCartAmountToBe(expectedAmount: number) {
    await expect(this.cartAmount).toHaveText(String(expectedAmount));
  }
}
