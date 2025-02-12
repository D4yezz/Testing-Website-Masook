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

    await page.getByRole("link", { name: "Kuesioner" }).click();
    await page.locator("#toggleSearch").click();
    await page.getByRole("textbox", { name: "Cari Kuesioner" }).click();
    await page.locator("#caridata").fill("test");
    await page.locator("#caridata").press("Enter");
    await expect(page.getByText("kuesioner test")).toHaveText(
      "kuesioner test 100"
    );
  });

  test("Tambah Data (TC002)", async ({ page }) => {
    test.setTimeout(50000);
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

    await page.getByRole("link", { name: "Kuesioner" }).click();
    await page.locator("#add").click();
    await page
      .getByRole("textbox", { name: "Judul Kuesioner" })
      .fill("testing");
    await page
      .getByRole("textbox", { name: "Deskripsi Kuesioner" })
      .fill("ini adalah testing");
    await page
      .locator("div")
      .filter({ hasText: /^Tampilkan Semua$/ })
      .locator("div")
      .nth(1)
      .click();
    await page
      .locator(
        ".col-sm-12 > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .first()
      .click();
    // await page.locator('#input-426').fill('12');
    await page
      .locator(
        ".py-0 > .row > div > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    await page
      .getByText("SMTWTFS12345678910111213141516171819202122232425262728")
      .waitFor();
    await page.getByRole("button", { name: "12" }).click();
    await page
      .locator(
        "div:nth-child(2) > .row > div > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    await page.getByRole("button", { name: "13" }).nth(1).waitFor();
    await page.getByRole("button", { name: "13" }).nth(1).click();
    // await page.waitForSelector('.v-btn v-date-picker-table__current v-btn--active v-btn--text v-btn--rounded theme--light primary')
    // await page.getByRole('textbox', { name: 'Tanggal' }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Sebagian Anggota$/ })
      .locator("div")
      .nth(1)
      .click();
    await page.getByRole("textbox", { name: "Cari Nama Responen" }).click();
    await page
      .getByRole("textbox", { name: "Cari Nama Responen" })
      .fill("alip");
    await page
      .getByRole("textbox", { name: "Cari Nama Responen" })
      .press("Enter");
    await page
      .locator(
        "tbody > tr > td > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .first()
      .click();
    await page.getByRole("tab", { name: "Kuesioner Masook" }).click();
    await page.getByRole("textbox", { name: "Judul Kuesioner" }).click();
    await page
      .locator(
        ".mb-5 > .v-card__text > .mt-2 > .row > div > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
      await page.locator('[data-vv-name="survey_1"]').fill('testing apa ini?');
    // await page
    //   .locator(
    //     ".mb-5 > .v-card__text > .mt-2 > .row > div > .v-input > .v-input__control > .v-input__slot"
    //   )
    //   .first()
    //   .fill("testing apa ini?");
    await page
      .locator("form")
      .filter({ hasText: "Pertanyaan ke - 1" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "Pilihan Ganda" }).click();
    await page.getByRole("textbox", { name: "opsi" }).click();
    await page.getByRole("textbox", { name: "opsi" }).fill("test 1");
    await page.getByText("Tambah Opsi").click();
    await page.getByRole("textbox", { name: "opsi 2" }).click();
    await page.getByRole("textbox", { name: "opsi 2" }).fill("test 2");
    await page.getByRole("tab", { name: "Pratinjau Kuesioner" }).click();
    await expect(page.getByText('testing apa ini?')).toBeVisible();
    await page.getByRole("button", { name: "Simpan" }).click();
    await page.waitForLoadState("load");
    await page.getByRole("button", { name: "Simpan sebagai draft" }).click();
    // await expect(page);

    // Gagal Karena ketika menekan tanggal 13 tidak bisa melanjutkan test
  });
});
