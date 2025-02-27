// @ts-check
import { test, expect } from "@playwright/test";

const fs = require("fs");
const path = require("path");
test("Unduh (TC001)", async ({ page }) => {
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

  await page.getByRole("link", { name: "Riwayat Log Akses" }).click();
  await page
    .locator("header")
    .filter({ hasText: "Daftar Riwayat Akses Unduh" })
    .getByRole("button")
    .nth(3)
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^Tanggal Mulai$/ })
    .click();
  await page.getByRole("button", { name: "4", exact: true }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Tanggal Akhir$/ })
    .click();
  await page.getByRole("button", { name: "12" }).nth(1).click();
  await page.getByRole("button", { name: "Terapkan" }).click();

  const downloadPath = path.join(__dirname, "../downloads & upload");

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: "Unduh" }).click(),
  ]);

  const filePath = path.join(downloadPath, await download.suggestedFilename());
  await download.saveAs(filePath);

  expect(fs.existsSync(filePath)).toBeTruthy();
  console.log(`File berhasil diunduh di: ${filePath}`);
});

test("Cari Data (TC002)", async ({ page }) => {
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

  await page.getByRole("link", { name: "Riwayat Log Akses" }).click();
  await page.locator("#toggleSearch").click();
  await page.getByRole("textbox", { name: "Cari Log" }).click();
  await page.locator("#caridata").fill("alip");
  await page.getByRole("button", { name: "append icon" }).click();
  await expect(
    page.getByRole("cell", { name: "Alip test alipia1144@gmail.com" }).first()
  ).toBeVisible();
  // hapus search
  await page.getByRole("button", { name: "clear icon" }).click();
  await expect(page.locator('[aria-label="clear icon"]')).toHaveClass(
    "v-icon notranslate v-icon--disabled v-icon--link mdi mdi-close theme--light primary--text"
  );
});

test("Filter Log (TC003)", async ({ page }) => {
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
  await page.getByRole("link", { name: "Riwayat Log Akses" }).click();
  await page
    .locator("header")
    .filter({ hasText: "Daftar Riwayat Akses Unduh" })
    .getByRole("button")
    .nth(3)
    .click();
  await page.getByRole("button", { name: "Peran Admin" }).click();
  await page.getByRole("option", { name: "Admin" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Username$/ })
    .click();
  for (let i = 0; i < 4; i++) {
    await page.keyboard.press("End");
  }
  await page
    .getByRole("option", { name: "Alip test" })
    .locator("div")
    .first()
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^Tanggal Mulai$/ })
    .click();
  await page.getByRole("button", { name: "11" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Tanggal Akhir$/ })
    .click();
  await page.getByRole("button", { name: "27" }).nth(1).click();
  await page.getByRole("button", { name: "Terapkan" }).click();
  await expect(
    page.getByRole("cell", { name: "Alip test alipia1144@gmail.com" }).first()
  ).toBeVisible();

  // reset
  await page
    .locator("header")
    .filter({ hasText: "Daftar Riwayat Akses Unduh" })
    .getByRole("button")
    .nth(3)
    .click();
  await page.getByRole("button", { name: "Admin" }).click();
  await page.getByRole("option", { name: "Operator" }).click();
  await page.getByRole("combobox").locator("div").first().click();
  await page
    .getByRole("option", { name: "Operator Masook Indonesia" })
    .locator("div")
    .first()
    .click();
  await page.getByRole("button", { name: "Reset" }).click();
  await expect(page.getByRole("button", { name: "Peran Admin" })).toBeVisible();
  await page.getByRole("banner").getByRole("button").click();
  // reset
});

test("Detail Perubahan Konfigurasi (TC004)", async ({ page }) => {
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

  await page.getByRole("link", { name: "Riwayat Log Akses" }).click();
  await page.getByRole("button", { name: "Goto Page 361" }).click();
  await page.getByRole('row', { name: 'Jayantara Indonesia Ahmad Nashrud ahmad@siap-online.com Senin, 27-12-2021 10:05' }).locator('#getDetailSimpan').click();
  await expect(
    page
      .locator("div")
      .filter({
        hasText:
          "Detail Perubahan Konfigurasi Diubah oleh Ahmad Nashrud pada Senin, 27-12-2021",
      })
      .nth(2)
  ).toBeVisible();
  await page.locator(".jv-more").first().click();
  await page.locator("div:nth-child(3) > .jv-container > .jv-more").click();
  await page.getByRole("button", { name: "Tutup" }).click();
  await expect(
    page
      .locator("div")
      .filter({
        hasText:
          "Detail Perubahan Konfigurasi Diubah oleh Ahmad Nashrud pada Senin, 27-12-2021",
      })
      .nth(2)
  ).not.toBeVisible();
});

test.describe("Navigasi Halaman", () => {
  test("Dropdown Halaman (TC005)", async ({ page }) => {
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
    await page.getByRole("link", { name: "Riwayat Log Akses" }).click();

    await page.getByRole("button", { name: "Hal." }).click();
    await page.keyboard.press("End");
    await page.keyboard.press("End");
    await page.getByRole("option", { name: "35" }).click();
    await page.waitForLoadState("load");
    await expect(
      page.getByRole("button", { name: "Current Page, Page" })
    ).toHaveClass("v-pagination__item v-pagination__item--active primary");
  });

  test("Arrows (TC006)", async ({ page }) => {
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
    await expect(page).toHaveURL(
      "https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU"
    );
    await page.getByRole("link", { name: "Riwayat Log Akses" }).click();

    var arrows = await page.getByRole("button", { name: "Next page" });

    for (let i = 0; i < 55; i++) {
      await arrows.click();
      await page.waitForLoadState("load");
    }
    await expect(
      page.getByRole("button", { name: "Current Page, Page" })
    ).toHaveClass("v-pagination__item v-pagination__item--active primary");
  });

  test("Number (TC007)", async ({ page }) => {
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
    await page.getByRole("link", { name: "Riwayat Log Akses" }).click();
    await page.getByRole("button", { name: "Goto Page 362" }).click();
    await expect(
      page.getByRole("button", { name: "Current Page, Page" })
    ).toHaveClass("v-pagination__item v-pagination__item--active primary");
  });
});
