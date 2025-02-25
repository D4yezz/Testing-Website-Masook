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
    await expect(
      page.getByRole("cell", { name: "Menikah", exact: true })
    ).toBeVisible();
    // hapus search
    await page.getByRole("button", { name: "clear icon" }).click();
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
    await page.waitForLoadState("load");
    await expect(page).toHaveURL(
      "https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU"
    );
    await page.getByRole("button", { name: "Ketidakhadiran" }).click();
    await page.getByRole("link", { name: "Kategori" }).click();
    await page.locator("#add").click();

    await page
      .locator('[data-vv-name="nama"]')
      .fill("Test kategori ketidakhadiran");
    await page.locator(".v-input--selection-controls__ripple").first().click();
    await page.locator('[data-vv-name="jumlah"]').fill("10");
    await page.locator('[data-vv-name="masa_kerja"]').fill("20");
    await page.locator('[data-vv-name="maks_ajuan"]').fill("3");
    await page
      .locator(
        "div:nth-child(6) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page.getByRole("option", { name: "Sebagian" }).click();
    await page.getByRole("textbox", { name: "Tgl Awal" }).click();
    await page.getByRole("button", { name: "February" }).click();
    await page.getByRole("button", { name: "Sep" }).click();
    await page.getByRole("button", { name: "1", exact: true }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Tgl Selesai$/ })
      .click();
    await page.getByRole("button", { name: "February" }).click();
    await page.getByRole("button", { name: "Sep" }).click();
    await page.getByRole("button", { name: "30" }).click();
    await page
      .locator(
        ".v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .first()
      .click();
    await page
      .locator(
        "div:nth-child(2) > .d-flex > div > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(3) > .d-flex > div > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(4) > .d-flex > div > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(5) > .d-flex > div > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(6) > .d-flex > div > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page.locator('[data-vv-as="Saldo Sisa Cuti"]').fill("10");
    await page
      .locator(
        "div:nth-child(7) > .d-flex > div > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page.locator('[data-vv-as="Maksimal Hari Hutang Cuti"]').fill("5");
    await page.getByRole("button", { name: "Simpan" }).click();
    await expect(
      page.getByRole("cell", { name: "Test kategori ketidakhadiran" })
    ).toBeVisible();
  });
});

test.describe("Menu", () => {
  test("Detail (TC003)", async ({ page }) => {
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
    await page
      .getByRole("row", { name: "Test kategori ketidakhadiran" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Detail" }).click();
    await expect(
      page
        .locator("#logined div")
        .filter({ hasText: /^Test kategori ketidakhadiran$/ })
    ).toBeVisible();

    // edit
    await page.getByRole("button").filter({ hasText: /^$/ }).nth(1).click();
    await page
      .locator('[data-vv-name="nama"]')
      .fill("Test kategori ketidakhadiran diedit");
    await page.locator('[data-vv-name="masa_kerja"]').fill("2");
    await page
      .locator(
        "div:nth-child(3) > .d-flex > div > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(4) > .d-flex > div > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page.getByRole("button", { name: "Simpan" }).click();
    await expect(
      page
        .locator("#logined div")
        .filter({ hasText: /^Test kategori ketidakhadiran diedit$/ })
    ).toBeVisible();
    // edit
  });

  test("Ubah (TC004)", async ({ page }) => {
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
    await page
      .getByRole("row", { name: "Test kategori ketidakhadiran" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Ubah", exact: true }).click();
    await page
      .locator('[data-vv-name="nama"]')
      .fill("Test kategori ketidakhadiran");
    await page.locator('[data-vv-name="jumlah"]').fill("5");
    await page
      .locator(
        "div:nth-child(5) > .d-flex > div > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(6) > .d-flex > div > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(7) > .d-flex > div > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();

    await page.getByRole("button", { name: "Simpan" }).click();
    await page.waitForLoadState("load");
    await expect(
      page.getByRole("cell", { name: "5", exact: true })
    ).toBeVisible();
  });

  test("Hapus (TC005)", async ({ page }) => {
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

    // Membuat data dummy
    await page.locator("#add").click();

    await page
      .locator('[data-vv-name="nama"]')
      .fill("ketidakhadiran untuk dihapus");
    await page
      .locator(
        "div:nth-child(2) > .d-flex > div > .v-radio > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page.locator('[data-vv-name="masa_kerja"]').fill("5");
    await page.locator('[data-vv-name="maks_ajuan"]').fill("2");
    await page.getByRole("button", { name: "Simpan" }).click();
    await expect(
      page.getByRole("cell", { name: "ketidakhadiran untuk dihapus" })
    ).toBeVisible();
    // Membuat data dummy

    await page
      .getByRole("row", { name: "ketidakhadiran untuk dihapus" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Hapus" }).click();
    await page.getByRole("button", { name: "Ya" }).click();
    await expect(
      page.getByRole("cell", { name: "ketidakhadiran untuk dihapus" })
    ).not.toBeVisible();
  });

  test("Non-Aktifkan dan Aktif (TC006)", async ({ page }) => {
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
    await page
      .getByRole("row", { name: "Test kategori ketidakhadiran" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Non-Aktifkan" }).click();
    await page.getByRole("button", { name: "Ya" }).click();
    await expect(
      page.getByRole("cell", { name: "Non-Aktif" }).first()
    ).toBeVisible();
    await page
      .getByRole("row", { name: "Test kategori ketidakhadiran" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Aktifkan" }).click();
    await page.getByRole("button", { name: "Ya" }).click();
    await expect(page.locator("td:nth-child(5)").first()).toBeVisible();
  });
});
