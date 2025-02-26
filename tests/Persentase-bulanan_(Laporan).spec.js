// @ts-check
import { test, expect } from "@playwright/test";

const fs = require("fs");
const path = require("path");
test("Unduh Rekap (TC001)", async ({ page }) => {
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
  await page.getByRole("link", { name: "Persentase Bulanan" }).click();

  const downloadPath = path.join(__dirname, "../downloads & upload");

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: "Unduh Rekap" }).click(),
  ]);

  const filePath = path.join(downloadPath, await download.suggestedFilename());
  await download.saveAs(filePath);

  expect(fs.existsSync(filePath)).toBeTruthy();
  console.log(`File berhasil diunduh di: ${filePath}`);
});

test("Pratinjau (TC002)", async ({ page }) => {
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
  await page.getByRole("link", { name: "Persentase Bulanan" }).click();
  await page.getByRole("button", { name: "Pratinjau" }).click();
  await page.getByRole("button", { name: "Periode" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Testing hari ini dihapus$/ })
    .click();
  await page.getByRole("button", { name: "Ya" }).click();
  // Verifikasi Waktu

  const now = new Date();

  const formattedTgl = now.toISOString().split("T")[0]; // Tanggal
  const formattedWaktu = now.toTimeString().split(" ")[0]; // Waktu
  const displayDateTime = await page.locator(".text-muted").nth(4).innerText();

  // ekstrak tanggal dan waktu dari teks
  const match = displayDateTime.match(
    /(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2})/
  );
  if (!match) throw new Error("Format waktu tidak ditemukan di halaman");

  const extractedTgl = match[1]; // Tanggal
  const extractedWaktu = match[2]; // Waktu

  await expect(extractedTgl).toBe(formattedTgl);

  // mengabaikan detik untuk menghindari error karena delay
  const formattedWaktuNoSec = formattedWaktu.slice(0, 5); // Waktu
  const extractedWaktuNoSec = extractedWaktu.slice(0, 5);
  await expect(extractedWaktuNoSec).toBe(formattedWaktuNoSec);
});

test.describe("Periode", () => {
  test("Filter Data (TC003)", async ({ page }) => {
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
    await page.getByRole("link", { name: "Persentase Bulanan" }).click();
    await page
      .getByRole("button", { name: "Testing hari ini dihapus" })
      .click();

    // Status
    await page.locator("#toggleSelectDate").click();
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
    // Status

    // Grup
    await page.locator("#toggleSelectDate").click();
    await page.getByRole("button", { name: "clear icon", exact: true }).click();
    await page.getByRole("textbox", { name: "Grup" }).click();
    await page.getByRole("option", { name: "Staff DIP" }).click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(
      page.locator("span").filter({ hasText: "Staff DIP" }).first()
    ).toBeVisible();
    // Grup

    // Status Pengguna
    await page.locator("#toggleSelectDate").click();
    await page.getByRole("button", { name: "clear icon" }).click();
    await page.getByRole("button", { name: "Status Pengguna" }).click();
    await page.getByRole("option", { name: "Tidak Aktif" }).click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(
      page.locator("span").filter({ hasText: "Pengguna Tidak Aktif" }).first()
    ).toBeVisible();
    // Status Pengguna
  });

  test("Unduh Data (TC004)", async ({ page }) => {
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
    await page.getByRole("link", { name: "Persentase Bulanan" }).click();
    await page
      .getByRole("button", { name: "Testing hari ini dihapus" })
      .click();

    const downloadPath = path.join(__dirname, "../downloads & upload");

    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.getByRole("button", { name: "Unduh Laporan" }).click(),
    ]);

    const filePath = path.join(
      downloadPath,
      await download.suggestedFilename()
    );
    await download.saveAs(filePath);

    expect(fs.existsSync(filePath)).toBeTruthy();
    console.log(`File berhasil diunduh di: ${filePath}`);
  });
});

test("Perbarui (TC005)", async ({ page }) => {
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
  await page.getByRole("link", { name: "Persentase Bulanan" }).click();

  await page.locator('div:nth-child(7) > div > .row > div:nth-child(2) > #toDetilPerbarui').click();
  await page.getByRole("button", { name: "Ya" }).click();
  // Verifikasi Waktu

  const now = new Date();

  const formattedTgl = now.toISOString().split("T")[0]; // Tanggal
  const formattedWaktu = now.toTimeString().split(" ")[0]; // Waktu
  const displayDateTime = await page.locator(".text-muted").nth(4).innerText();

  // ekstrak tanggal dan waktu dari teks
  const match = displayDateTime.match(
    /(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2})/
  );
  if (!match) throw new Error("Format waktu tidak ditemukan di halaman");

  const extractedTgl = match[1]; // Tanggal
  const extractedWaktu = match[2]; // Waktu

  await expect(extractedTgl).toBe(formattedTgl);

  // mengabaikan detik untuk menghindari error karena delay
  const formattedWaktuNoSec = formattedWaktu.slice(0, 5); // Waktu
  const extractedWaktuNoSec = extractedWaktu.slice(0, 5);
  await expect(extractedWaktuNoSec).toBe(formattedWaktuNoSec);
});