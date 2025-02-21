// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Toggle", () => {
  test("Cari Data (TC001)", async ({ page }) => {
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

    await page.getByRole("button", { name: "Ketidakhadiran" }).click();
    await page.getByRole("link", { name: "Kategori" }).click();
    await page.locator("#toggleSearch").click();
    await page.getByRole("textbox", { name: "Cari Kategori" }).click();
    await page.locator("#caridata").fill("menikah");
    await page.locator("#caridata").press("Enter");
    await expect(page.getByRole('cell', { name: 'Menikah', exact: true })).toBeVisible();
    // hapus search
    await page.getByRole("button", { name: "clear icon" }).click();
    await expect(page.locator('[aria-label="clear icon"]')).toHaveClass(
      "v-icon notranslate v-icon--disabled v-icon--link mdi mdi-close theme--light primary--text"
    );
    // await page.getByRole("cell", { name: "Testing" }).click();
  });

  test("Tambah Data (TC002)", async ({ page }) => {
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
    await page.waitForLoadState("load");
    await expect(page).toHaveURL(
      "https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU"
    );
    await page.getByRole("button", { name: "Kelola Instansi" }).click();
    await page.getByRole("link", { name: "Periode" }).click();
    await page.locator("#add").click();
    await page
      .locator("div")
      .filter({ hasText: /^Nama$/ })
      .click();
    await page.locator('input[data-vv-name="nama"]').fill("Testing hari ini");
    await page.getByRole("textbox", { name: "Tanggal Awal" }).click();
    await page.getByRole("button", { name: "18" }).click();
    await page.getByRole("textbox", { name: "Tanggal Akhir" }).click();
    await page.getByRole("button", { name: "Next month" }).nth(1).click();
    await page.getByRole("button", { name: "10" }).first().click();
    await page.getByRole("button", { name: "Simpan" }).click();
    await expect(
      page.getByRole("cell", { name: "Testing hari ini" })
    ).toBeVisible();
  });


});