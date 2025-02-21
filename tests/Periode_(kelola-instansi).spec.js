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
    await page.getByRole("link", { name: "Periode" }).click();
    await page.locator("#toggleSearch").click();
    await page.getByRole("textbox", { name: "Cari Periode" }).click();
    await page.locator("#caridata").fill("juni");
    await page.locator("#caridata").press("Enter");
    await expect(page.getByRole("cell", { name: "Juni 2024" })).toBeVisible();
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

  test("Muat Ulang (TC003)", async ({ page }) => {
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
    await page.getByRole("link", { name: "Periode" }).click();
    await page.locator("#refresh").click();
    await expect(page.locator("div.vld-icon")).toBeVisible();
  });
});

test.describe("Menu", () => {
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
    await page.getByRole("button", { name: "Kelola Instansi" }).click();
    await page.getByRole("link", { name: "Periode" }).click();
    await page.locator("tr:nth-child(4) > td:nth-child(4) > #moreMenu").click();
    await page.getByRole("menuitem", { name: "Ubah" }).click();
    await page.locator(".v-text-field__slot").first().click();
    await page
      .locator('[data-vv-name="nama"]')
      .fill("Testing hari ini dihapus");
    await page
      .locator(
        "div:nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .click();
    await page.getByRole("button", { name: "11", exact: true }).click();
    await page.getByRole("button", { name: "Simpan" }).click();
    await expect(
      page.getByRole("cell", { name: "Testing hari ini dihapus" })
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
    await page.getByRole("button", { name: "Kelola Instansi" }).click();
    await page.getByRole("link", { name: "Periode" }).click();

    //   buat data dummy
    await page.locator("#add").click();
    await page
      .locator("div")
      .filter({ hasText: /^Nama$/ })
      .click();
    await page.locator('input[data-vv-name="nama"]').fill("Hapus Data");
    await page.getByRole("textbox", { name: "Tanggal Awal" }).click();
    await page.getByRole("button", { name: "18" }).click();
    await page.getByRole("textbox", { name: "Tanggal Akhir" }).click();
    await page.getByRole("button", { name: "Next month" }).nth(1).click();
    await page.getByRole("button", { name: "10" }).first().click();
    await page.getByRole("button", { name: "Simpan" }).click();
    await expect(
      page.getByRole("cell", { name: "Testing hari ini" })
    ).toBeVisible();
    //   buat data dummy

    await page
      .getByRole("row", { name: "Hapus Data" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Hapus" }).click();
    await page.getByText("Pastikan Anda benar-benar").click();
    await page.getByRole("button", { name: "Ya" }).click();
    await expect(
      page
        .locator("div")
        .filter({ hasText: "Data berhasil dihapusTutup" })
        .nth(3)
    ).toBeVisible();
    await expect(page.getByText("Data berhasil dihapusTutup")).toBeVisible();
  });
});

test.describe("Button Halaman", () => {
  test("Dropdown (TC006)", async ({ page }) => {
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
    await page.getByRole("link", { name: "Periode" }).click();
    await page.getByRole("button", { name: "Hal." }).click();
    await page.getByRole("option", { name: "3" }).click();
    await expect(
      page.getByRole("cell", { name: "Rabu, 01-09-" })
    ).toBeVisible();
  });
  test("Carousel (TC007)", async ({ page }) => {
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
    await page.getByRole("link", { name: "Periode" }).click();
    const next = page.getByRole("button", { name: "Next page" });
    for (let i = 0; i < 3; i++) {
      await next.click();
      await page.waitForLoadState("load");
    }
    await expect(
      page.getByRole("listitem").filter({ hasText: /^$/ }).nth(1)
    ).toBeEnabled();
  });
});
