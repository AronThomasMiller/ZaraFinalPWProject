// filepath: c:\Users\AronT\Desktop\ZaraFinalPWProject\pages\RegistrationPage.ts
import { expect, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {
  readonly emailInput: Locator = this.page.getByRole("textbox", {
    name: "Електронна пошта",
  });
  readonly passwordInput: Locator = this.page.getByRole("textbox", {
    name: "Пароль",
  });
  readonly firstNameInput: Locator = this.page.getByRole("textbox", {
    name: "Ім'я",
  });
  readonly lastNameInput: Locator = this.page.getByRole("textbox", {
    name: "Прізвище",
  });
  readonly termsCheckbox: Locator = this.page
    .locator("label")
    .filter({
      hasText:
        "Я хочу отримувати персоналізовані повідомлення комерційного характеру від ZARA",
    })
    .locator("span")
    .first();
  readonly privacyPolicyCheckbox: Locator = this.page
    .locator("label")
    .filter({
      hasText:
        "Я прочитав(-ла) і розумію Політику конфіденційності та використання файлів",
    })
    .locator("svg")
    .nth(1);
  readonly registerButton: Locator = this.page.getByRole("button", {
    name: "Зареєструйтеся",
  });
  readonly emailError: Locator = this.page.locator(
    '[id*="form-input__desc-email"]'
  );
  readonly passwordError: Locator = this.page.locator(
    '[id*="form-input__desc-password"]'
  );
  readonly firstNameError: Locator = this.page.locator(
    '[id*="form-input__desc-firstName"]'
  );
  readonly lastNameError: Locator = this.page.locator(
    '[id*="form-input__desc-lastName"]'
  );
  readonly createOrderButton: Locator = this.page.getByRole("button", {
    name: "Створити рахунок",
  });

  async fillRegistrationForm(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.firstNameInput.click();
    await this.lastNameInput.click();
    await this.termsCheckbox.click();
    await this.privacyPolicyCheckbox.click();
  }

  async submitRegistration() {
    await this.registerButton.click();
  }

  async expectEmailErrorMessage(expectedMessage: string) {
    await expect(this.emailError).toContainText(expectedMessage);
  }

  async expectPasswordErrorMessage(expectedMessage: string) {
    await expect(this.passwordError).toContainText(expectedMessage);
  }

  async expectFirstNameErrorMessage(expectedMessage: string) {
    await expect(this.firstNameError).toContainText(expectedMessage);
  }

  async expectLastNameErrorMessage(expectedMessage: string) {
    await expect(this.lastNameError).toContainText(expectedMessage);
  }

  async createAnOrder() {
    await this.createOrderButton.click();
  }
}