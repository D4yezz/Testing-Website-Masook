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
    await page.getByRole("link", { name: "Persetujuan Cuti" }).click();
    await page.locator("#toggleSearch").click();
    await page
      .locator("div")
      .filter({ hasText: /^Cari Persetujuan$/ })
      .click();
    await page.locator("#caridata").fill("dip");
    await page.getByRole("button", { name: "append icon" }).click();
    await expect(
      page.getByRole('cell', { name: 'Cuti Staf DIP' })
    ).toBeVisible();
    await page.getByRole('button', { name: 'clear icon' }).click();
    await expect(page.locator('[aria-label="clear icon"]')).toHaveClass(
        "v-icon notranslate v-icon--disabled v-icon--link mdi mdi-close theme--light primary--text"
      );
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

    await page.getByRole("button", { name: "Ketidakhadiran" }).click();
    await page.getByRole("link", { name: "Persetujuan Cuti" }).click();
    await page.locator('#add').click();
    await page.locator('[data-vv-name="nama"]').fill("Test persetujuan");

    await page.locator('form').getByRole('button').first().click();
    await page.getByRole('option', { name: 'Persetujuan Cuti' }).locator('div').first().click();

    await page.getByRole('button', { name: 'Tambah Persetujuan' }).click();
    await page.getByRole('row', { name: 'Persetujuan Tingkat' }).getByRole('button').first().click();
    await page.getByRole('option', { name: 'testing grup' }).locator('div').first().click();
    await page.getByRole('button', { name: 'Tambah Persetujuan' }).click();
    await page.getByRole('button', { name: 'Tambah Persetujuan' }).click();
    // await page.getByRole('button', { name: 'Tambah Persetujuan' }).click();
    // await page.getByRole('button', { name: 'Tambah Persetujuan' }).click();
    await page.getByRole('row', { name: 'Persetujuan Tingkat 3' }).getByRole('button').first().click();
    await page.getByRole('option', { name: 'efefef' }).locator('div').first().click();
    await page.getByRole('row', { name: 'Persetujuan Tingkat 2' }).locator('button').click();
    await page.getByRole('row', { name: '291803810938108309183' }).locator('div').nth(4).click();
    await page.locator('tr:nth-child(18) > td > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
    await page.getByRole('textbox', { name: 'Cari Nama Group' }).click();
    await page.getByRole('textbox', { name: 'Cari Nama Group' }).fill('test');
    await page.getByRole('row', { name: 'testing grup ini adalah' }).locator('div').nth(4).click();
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.waitForLoadState('load');
    await expect(page.getByRole('cell', { name: 'Test persetujuan' })).toBeVisible();
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

    await page.getByRole("button", { name: "Ketidakhadiran" }).click();
    await page.getByRole("link", { name: "Persetujuan Cuti" }).click();
    await page.getByRole('row', { name: 'Persetujuan Cuti Test' }).locator('#moreMenu').click();
    await page.getByRole('menuitem', { name: 'Ubah' }).click();
    await page.locator('[data-vv-name="nama"]').fill("Test persetujuan diubah");

    await page.getByRole('row', { name: 'Staff DIP', exact: true }).locator('div').nth(4).click();
    await page.getByRole('row', { name: 'Staf UIX' }).locator('div').nth(4).click();
    await page.getByRole('row', { name: 'STAFF DSO 2' }).locator('div').nth(4).click();
    await page.getByRole('row', { name: 'Direktur DIP', exact: true }).locator('div').nth(4).click();
    await page.getByRole('row', { name: 'efefef eeefeffe' }).locator('div').nth(4).click();
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.waitForLoadState('load');
    await expect(page.getByRole('cell', { name: 'Test persetujuan diubah' })).toBeVisible();
    
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

    await page.getByRole("button", { name: "Ketidakhadiran" }).click();
    await page.getByRole("link", { name: "Persetujuan Cuti" }).click();

    // buat data dummy
    await page.locator('#add').click();
    await page.locator('[data-vv-name="nama"]').fill("Test persetujuan dihapus");

    await page.locator('form').getByRole('button').first().click();
    await page.getByRole('option', { name: 'Persetujuan Cuti' }).locator('div').first().click();

    await page.getByRole('button', { name: 'Tambah Persetujuan' }).click();
    await page.getByRole('row', { name: 'Persetujuan Tingkat' }).getByRole('button').first().click();
    await page.getByRole('option', { name: 'testing grup' }).locator('div').first().click();
    await page.getByRole('textbox', { name: 'Cari Nama Group' }).click();
    await page.getByRole('textbox', { name: 'Cari Nama Group' }).fill('test');
    await page.getByRole('row', { name: 'testing grup ini adalah' }).locator('div').nth(4).click();
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.waitForLoadState('load');
    await expect(page.getByRole('cell', { name: 'Test persetujuan dihapus' })).toBeVisible();
    // buat data dummy

    await page.getByRole('row', { name: 'Persetujuan Cuti Test persetujuan dihapus testing grup testing grup 󰇙' }).locator('#moreMenu').click();
    await page.getByRole('menuitem', { name: 'Hapus' }).click();
    await page.getByRole('button', { name: 'Ya' }).click();
    await expect(page.getByRole('cell', { name: 'Test persetujuan dihapus' })).not.toBeVisible();
  });
});
