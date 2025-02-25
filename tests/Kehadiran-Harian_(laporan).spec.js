// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Unduh Laporan", () => {
  const fs = require("fs");
  const path = require("path");
  test("Format PDF (TC001)", async ({ page }) => {
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

    await page.getByRole("button", { name: "Laporan" }).click();
    await page.getByRole("link", { name: "Kehadiran Harian" }).click();
    await page
      .locator("header")
      .filter({ hasText: "Laporan Kehadiran Harian" })
      .locator("#toggleSelectDate")
      .click();
    await page.getByRole("textbox", { name: "Anggota" }).click();
    await page
      .getByRole("option", { name: "Alip test" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await page.waitForLoadState("load");

    await page.getByRole("button", { name: "Unduh Laporan" }).click();
    const downloadPath = path.join(__dirname, "../downloads & upload");

    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.getByRole("menuitem", { name: "Format PDF" }).click(),
    ]);

    const filePath = path.join(
      downloadPath,
      await download.suggestedFilename()
    );
    expect(filePath.endsWith(".pdf")).toBeTruthy();
    await download.saveAs(filePath);

    expect(fs.existsSync(filePath)).toBeTruthy();
    console.log(`File berhasil diunduh di: ${filePath}`);
  });
  test("Format XLSX (TC002)", async ({ page }) => {
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

    await page.getByRole("button", { name: "Laporan" }).click();
    await page.getByRole("link", { name: "Kehadiran Harian" }).click();
    await page
      .locator("header")
      .filter({ hasText: "Laporan Kehadiran Harian" })
      .locator("#toggleSelectDate")
      .click();
    await page.getByRole("textbox", { name: "Anggota" }).click();
    await page
      .getByRole("option", { name: "Alip test" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await page.waitForLoadState("load");

    await page.getByRole("button", { name: "Unduh Laporan" }).click();
    const downloadPath = path.join(__dirname, "../downloads & upload");

    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.getByRole("menuitem", { name: "Format XLSX" }).click(),
    ]);

    const filePath = path.join(
      downloadPath,
      await download.suggestedFilename()
    );
    expect(filePath.endsWith(".xlsx")).toBeTruthy();
    await download.saveAs(filePath);

    expect(fs.existsSync(filePath)).toBeTruthy();
    console.log(`File berhasil diunduh di: ${filePath}`);
  });
});

test.describe("Kalkulasi", () => {
  test("Periode Otomatis (TC003)", async ({ page }) => {
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

    await page.getByRole("button", { name: "Laporan" }).click();
    await page.getByRole("link", { name: "Kehadiran Harian" }).click();
    await page.getByRole("button", { name: "Kalkulasi" }).click();
    await page.getByRole("combobox").locator("div").nth(1).click();
    await page
      .getByRole("option", { name: "Alip test" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Periode" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Februari 2024$/ })
      .click();
    await page.getByRole("button", { name: "Ya" }).click();
    await expect(
      page.getByText("Kamis, 01-02-2024 s/d Kamis, 29-02-")
    ).toBeVisible();
    await page.getByRole("button", { name: "Muat Ulang" }).click();
  });

  test("Periode Manual (TC004)", async ({ page }) => {
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

    await page.getByRole("button", { name: "Laporan" }).click();
    await page.getByRole("link", { name: "Kehadiran Harian" }).click();
    await page.getByRole("button", { name: "Kalkulasi" }).click();
    await page.getByRole("combobox").locator("div").nth(1).click();
    await page
      .getByRole("option", { name: "Alip test" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Periode" }).click();
    // await page.evaluate(() => {
    //   const skroll = page.locator('div[role="listbox"].v-list v-select-list v-sheet theme--light v-list--dense theme--light');
    //   skroll.scrollIntoViewIfNeeded();
    // });
    // await page.locator('div[role="listbox"].v-list v-select-list v-sheet theme--light v-list--dense theme--light').scrollIntoViewIfNeeded();
    await page.keyboard.press("End");
    await page.keyboard.press("End");
    await page.keyboard.press("End");
    await page
      .locator("div")
      .filter({ hasText: /^Pilih Berdasarkan tanggal$/ })
      .click();
    await page.getByRole("textbox", { name: "Tanggal Mulai" }).click();
    await page.getByRole("button", { name: "3", exact: true }).click();
    await page.getByRole("textbox", { name: "Tanggal Sampai" }).click();
    await page.getByRole("button", { name: "17" }).nth(1).click();
    await page.getByRole("button", { name: "Ya" }).click();
    await expect(
      page.getByText("Senin, 03-02-2025 s/d Senin, 17-02-")
    ).toBeVisible();
  });
});

test.describe("Filter", () => {
  test("CheckBox (TC005)", async ({ page }) => {
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

    await page.getByRole("button", { name: "Laporan" }).click();
    await page.getByRole("link", { name: "Kehadiran Harian" }).click();

    // Hadir
    await page
      .locator("header")
      .filter({ hasText: "Laporan Kehadiran Harian" })
      .locator("#toggleSelectDate")
      .click();
    await page
      .locator(
        "div:nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(page.locator(".ma-1 > .v-chip__content")).toHaveText("Hadir");
    // Hadir

    // Ketidakhadiran
    await page
      .locator("header")
      .filter({ hasText: "Laporan Kehadiran Harian" })
      .locator("#toggleSelectDate")
      .click();
    await page
      .locator(
        "div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page.locator(".v-input--selection-controls__ripple").first().click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(
      page.locator("span").filter({ hasText: "Ketidakhadiran" }).first()
    ).toBeVisible();
    // Ketidakhadiran

    // Alpa
    await page
      .locator("header")
      .filter({ hasText: "Laporan Kehadiran Harian" })
      .locator("#toggleSelectDate")
      .click();
    await page
      .locator(
        "div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(page.locator(".ma-1 > .v-chip__content")).toHaveText("Alpa");
    //   Alpa

    // libur
    await page
      .locator("header")
      .filter({ hasText: "Laporan Kehadiran Harian" })
      .locator("#toggleSelectDate")
      .click();
    await page
      .locator(
        "div:nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(page.getByText("Libur", { exact: true })).toBeVisible();
    // Libur
  });

  test("Pilih Anggota (TC006)", async ({ page }) => {
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

    await page.getByRole("button", { name: "Laporan" }).click();
    await page.getByRole("link", { name: "Kehadiran Harian" }).click();
    await page
      .locator("header")
      .filter({ hasText: "Laporan Kehadiran Harian" })
      .locator("#toggleSelectDate")
      .click();
    await page.locator(".v-input--selection-controls__ripple").first().click();
    await page
      .locator(
        "div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page.getByRole("textbox", { name: "Anggota" }).click();
    await page
      .getByRole("option", { name: "Alip test" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(
      page.locator("span").filter({ hasText: "Alip test" }).first()
    ).toBeVisible();
  });

  test("Status (TC007)", async ({ page }) => {
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

    await page.getByRole("button", { name: "Laporan" }).click();
    await page.getByRole("link", { name: "Kehadiran Harian" }).click();
    await page
      .locator("header")
      .filter({ hasText: "Laporan Kehadiran Harian" })
      .locator("#toggleSelectDate")
      .click();
    await page.locator(".v-input--selection-controls__ripple").first().click();
    await page
      .locator(
        "div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    // aktif
    await page.getByRole("button", { name: "Status", exact: true }).click();
    await page
      .getByRole("option", { name: "Aktif", exact: true })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(
      page.locator("span").filter({ hasText: "Aktif" }).first()
    ).toBeVisible();
    // aktif

    // Tidak aktif
    await page
      .locator("header")
      .filter({ hasText: "Laporan Kehadiran Harian" })
      .locator("#toggleSelectDate")
      .click();
    await page.getByRole("button", { name: "Aktif clear icon" }).click();
    await page
      .getByRole("option", { name: "Tidak Aktif", exact: true })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(
      page.locator("span").filter({ hasText: "Tidak Aktif" }).first()
    ).toBeVisible();
    // Tidak aktif
  });

  test("Grup (TC008)", async ({ page }) => {
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

    await page.getByRole("button", { name: "Laporan" }).click();
    await page.getByRole("link", { name: "Kehadiran Harian" }).click();
    await page
      .locator("header")
      .filter({ hasText: "Laporan Kehadiran Harian" })
      .locator("#toggleSelectDate")
      .click();
    await page.locator(".v-input--selection-controls__ripple").first().click();
    await page
      .locator(
        "div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();

    await page.getByRole("textbox", { name: "Grup" }).click();
    await page
      .getByRole("option", { name: "testing grup" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(
      page.locator("span").filter({ hasText: "testing grup" }).first()
    ).toBeVisible();
  });

  test("Waktu (TC009)", async ({ page }) => {
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

    await page.getByRole("button", { name: "Laporan" }).click();
    await page.getByRole("link", { name: "Kehadiran Harian" }).click();
    await page
      .locator("header")
      .filter({ hasText: "Laporan Kehadiran Harian" })
      .locator("#toggleSelectDate")
      .click();
    await page.locator(".v-input--selection-controls__ripple").first().click();
    await page
      .locator(
        "div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();

      // Waktu otomatis
    await page.getByRole("button", { name: "Waktu" }).click();
    await page.getByText("Minggu, 01-09-2024 - Senin, 30-09-").click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(
      page
        .locator("span")
        .filter({ hasText: "-09-2024 s/d 30-09-2024" })
        .first()
    ).toBeVisible();

    // Waktu otomatis
    
    // Waktu manual
    await page
    .locator("header")
    .filter({ hasText: "Laporan Kehadiran Harian" })
    .locator("#toggleSelectDate")
    .click();
    await page.getByRole('button', { name: 'Waktu September 2024 clear' }).click();
    // await page.getByText("Minggu, 01-09-2024 - Senin, 30-09-").click();
    await page.keyboard.press('End');
    await page.keyboard.press('End');
    await page.locator('div').filter({ hasText: /^Pilih Berdasarkan tanggal$/ }).click();

    await page.getByRole('textbox', { name: 'Tanggal Mulai' }).click();
    await page.getByRole('button', { name: 'February' }).click();
    await page.getByRole('button', { name: 'Previous year' }).click();
    await page.getByRole('button', { name: 'Previous year' }).click();
    await page.getByRole('button', { name: 'May' }).nth(2).click();
    await page.getByRole('button', { name: '11' }).click();
    await page.getByRole('textbox', { name: 'Tanggal Selesai' }).click();
    await page.getByRole('button', { name: 'February' }).click();
    await page.getByRole('button', { name: 'Previous year' }).click();
    await page.getByRole('button', { name: 'Aug' }).nth(1).click();
    await page.getByRole('button', { name: '15' }).click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(
      page
        .locator('span').filter({ hasText: '-05-2023 s/d 15-08-2024' }).first()
    ).toBeVisible();
    // Waktu manual
  });

  test("Status Pengguna (TC010)", async ({ page }) => {
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

    await page.getByRole("button", { name: "Laporan" }).click();
    await page.getByRole("link", { name: "Kehadiran Harian" }).click();
    await page
      .locator("header")
      .filter({ hasText: "Laporan Kehadiran Harian" })
      .locator("#toggleSelectDate")
      .click();
    await page.locator(".v-input--selection-controls__ripple").first().click();
    await page
      .locator(
        "div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page
      .locator(
        "div:nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
      
      // aktif
      await page.getByRole('button', { name: 'Status Pengguna' }).click();
      await page.getByRole('option', { name: 'Aktif', exact: true }).locator('div').first().click();
      await page.getByRole('button', { name: 'Terapkan' }).click();
      await expect(page.locator('span').filter({ hasText: 'Pengguna Aktif' }).first()).toBeVisible();
      // aktif

      // tidak aktif
      await page.locator('header').filter({ hasText: 'Laporan Kehadiran Harian' }).locator('#toggleSelectDate').click();
      await page.getByRole('button', { name: 'Aktif clear icon' }).click();
      await page.getByRole('option', { name: 'Tidak Aktif' }).locator('div').first().click();
      await page.getByRole('button', { name: 'Terapkan' }).click();
      await expect(page.locator('span').filter({ hasText: 'Pengguna Tidak Aktif' }).first()).toBeVisible();
      // tidak aktif

  });
});
