// filepath: c:\Users\AronT\Desktop\ZaraFinalPWProject\tests\zara.spec.ts
import { test, expect } from "@playwright/test";
import { SearchComponent } from "../pages/SearchComponent";
import { HeaderComponent } from "../pages/HeaderComponent";
import { SearchResultPage } from "../pages/SearchResultPage";
import { RegistrationPage } from "../pages/RegistrationPage";

test("Zara Application Test Suite", async ({ page }) => {
  await page.goto("https://www.zara.com/ua/");
  await page
    .getByRole("button", { name: "Дозволити всі файли cookie" })
    .click();

  const header = new HeaderComponent(page);
  let initialCartAmount = await header.getCartAmount();

  const search = new SearchComponent(page);
  await search.clickSearchLink();
  await search.searchForProduct("сукні");

  const result = new SearchResultPage(page);
  await result.waitForPlusButtons();
  const buttonCount = await result.getPlusButtonCount();
  await result.addItemWithMultipleSizes(buttonCount, initialCartAmount);

  await page.getByRole("link", { name: "Товари в кошику" }).click();
  await page.getByRole("button", { name: "ПРОДОВЖИТИ" }).click();

  const registration = new RegistrationPage(page);
  await registration.fillRegistrationForm("test@example.com", "SecurePassword123");
  await registration.submitRegistration();

  await registration.expectEmailErrorMessage(
    "Укажіть дійсну адресу ел. пошти (наприклад, email@email.com)."
  );
  await registration.expectPasswordErrorMessage(
    "Введіть надійний пароль: Пароль повинен містити не менше 8 символів і складатись з великих і маленьких літер, а також цифр."
  );
  await registration.expectFirstNameErrorMessage(
    "Це поле є обов’язковим для заповнення"
  );
  await registration.expectLastNameErrorMessage(
    "Це поле є обов’язковим для заповнення"
  );

  await registration.createAnOrder();
});