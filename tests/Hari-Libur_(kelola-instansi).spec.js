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

    await page.getByRole("button", { name: "Kelola Instansi" }).click();
    await page.getByRole("link", { name: "Hari Libur" }).click();
    await page.locator("#toggleSearch").click();
    await page
      .locator("div")
      .filter({ hasText: /^Cari Hari Libur$/ })
      .click();
    await page.locator("#caridata").fill("libur bersama");
    await page.getByRole("button", { name: "append icon" }).click();
    await expect(
      page.getByRole("cell", { name: "Hari Libur Bersama" }).first()
    ).toBeVisible();
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
    await expect(page).toHaveURL(
      "https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU"
    );

    await page.getByRole("button", { name: "Kelola Instansi" }).click();
    await page.getByRole("link", { name: "Hari Libur" }).click();
    await page.locator('#add').click();
    await page.locator('div').filter({ hasText: /^Tanggal Awal$/ }).click();
    await page.getByRole('button', { name: 'Next month' }).click();
    await page.getByRole('button', { name: '9', exact: true }).first().click();
    await page.locator('div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click();
    await page.getByRole('button', { name: '10', exact:true }).nth(1).click();
    await page.locator('div').filter({ hasText: /^Keterangan$/ }).click();
    await page.locator('[data-vv-name="keterangan"]').fill('liburan test');
    await page.locator('form').getByRole('button').click();
    await page.getByRole('option', { name: 'Cuti Bersama' }).click();
    await page.getByRole('button', { name: 'Simpan' }).click();
  });
});

test.describe("Menu", () => {
  test("Ubah (TC003)", async ({ page }) => {
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

    await page.getByRole("button", { name: "Kelola Instansi" }).click();
    await page.getByRole("link", { name: "Hari Libur" }).click();
    await page.getByRole('row', { name: '09 Mar 2025 Minggu Cuti' }).locator('#moreMenu').click();
    await page.getByRole('menuitem', { name: 'Ubah' }).click();
    await page.locator('.v-text-field__slot').first().click();
    await page.getByRole('button', { name: '8', exact: true }).click();
    await page.locator('div:nth-child(2) > div > .v-input > .v-input__control > .v-input__slot').first().click();
    await page.locator('[data-vv-name="keterangan"]').fill('liburan test diubah');
    await page.getByRole('button', { name: 'Cuti Bersama' }).click();
    await page.getByRole('option', { name: 'Libur Nasional' }).click();
    await page.getByRole('button', { name: 'Simpan' }).click();
    await expect(page.getByRole('cell', { name: '08 Mar' })).toBeVisible();
  });

  test("Hapus (TC004)", async ({ page }) => {
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

    await page.getByRole("button", { name: "Kelola Instansi" }).click();
    await page.getByRole("link", { name: "Hari Libur" }).click();
    await page.getByRole('row', { name: '10 Mar 2025 Senin Cuti' }).locator('#moreMenu').click();
    await page.getByRole('menuitem', { name: 'Hapus' }).click();
    await page.getByRole('button', { name: 'Ya' }).click();
    await expect(page.getByRole('cell', { name: '10 Mar' })).not.toBeVisible();
  });
});
