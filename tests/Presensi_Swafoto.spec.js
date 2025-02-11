// @ts-check
import { test, expect } from "@playwright/test";

test("Search Toggle (TC001)", async ({ page }) => {
  await page.goto("https://sim.dev.masook.id/");
  await page.waitForLoadState("load");
  await page
    .getByRole("textbox", { name: "Username" })
    .fill("operatorjmi@mail.com");
  await page.getByRole("textbox", { name: "Kata Sandi" }).fill("111111");
  await page.getByRole("button", { name: "Masuk" }).click();
  await page.waitForLoadState("load");
  await expect(page).toHaveURL("https://sim.dev.masook.id/#/pilihOrganisasi");
  await page
    .locator("div:nth-child(2) > .ra-0 > .v-card__text > .container")
    .click();
  await expect(page).toHaveURL(
    "https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU"
  );
await page.getByRole('link', { name: 'Presensi Swafoto' }).click();
await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/presensiManual');
await page.locator('#toggleSearch').click();
await page.waitForSelector('.v-input__slot');
await page.getByRole('textbox', { name: 'Cari Presensi Swafoto' }).fill('Iman');
await page.getByRole('button', { name: 'append icon' }).click();
await expect(page.locator('td:nth-child(2)').first()).toBeVisible();
});



