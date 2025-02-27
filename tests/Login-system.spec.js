// @ts-check
import { test, expect } from "@playwright/test";



test("Login (TC001)", async ({ page }) => {
  await page.goto("https://sim.dev.masook.id/");
  await page.waitForLoadState('load');
  await page
    .getByRole("textbox", { name: "Username" })
    .fill("operatorjmi@mail.com");
  await page.getByRole("textbox", { name: "Kata Sandi" }).fill("111111");
  await page.getByRole("button", { name: "Masuk" }).click();
  await page.waitForLoadState('load');
  await expect(page).toHaveURL("https://sim.dev.masook.id/#/pilihOrganisasi");
});



test("Logout (TC002)", async ({ page }) => {
  await page.goto("https://sim.dev.masook.id/");
  await page.waitForLoadState('load');
  await page
  .getByRole("textbox", { name: "Username" })
  .fill("operatorjmi@mail.com");
  await page.getByRole("textbox", { name: "Kata Sandi" }).fill("111111");
  await page.getByRole("button", { name: "Masuk" }).click();
  await page.waitForTimeout(2000);
  await expect(page).toHaveURL("https://sim.dev.masook.id/#/pilihOrganisasi");
  await page.locator("a").click();
  await page.getByRole("listitem").filter({ hasText: "Keluar" }).click();
  await expect(page).toHaveURL("https://sim.dev.masook.id/#/login");
});



test("Login gagal(TC003)", async ({ page }) => {
  await page.goto("https://sim.dev.masook.id/");
  await page.waitForLoadState('load');
  await page
    .getByRole("textbox", { name: "Username" })
    .fill("kesalahan@mail.com");
  await page.getByRole("textbox", { name: "Kata Sandi" }).fill("123456");
  await page.getByRole("button", { name: "Masuk" }).click();
  await page.waitForLoadState('load');
  const message = await page
    .locator("div")
    .filter({ hasText: "Username tidak ditemukanTutup" })
    .nth(3);
  await expect(message).toBeVisible();
});

