// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Toggle", () => {
  test("Filter (TC001)", async ({ page }) => {
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

    await page.getByRole("link", { name: "Cuti Anggota" }).click();
    await page
      .locator("header")
      .filter({ hasText: "Cuti Anggota" })
      .getByRole("button")
      .first()
      .click();

    // Tombol Reset
    await page.getByRole("button", { name: "Kategori Ketidakhadiran" }).click();
    await page
      .getByRole("option", { name: "Test ketidakhadiran" })
      .locator("div")
      .first()
      .click();

    await page
      .locator("div")
      .filter({ hasText: /^Tanggal Mulai Cuti$/ })
      .click();
    await page.getByRole("button", { name: "20", exact: true }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Tanggal Akhir Cuti$/ })
      .click();
    await page.getByRole("cell", { name: "21" }).nth(1).click();
    await page.getByRole("button", { name: "Reset" }).click();
    await expect(page.locator('[for="kategori"]').first()).toHaveText(
      "Kategori Ketidakhadiran");
    // Tombol Reset

    await page.getByRole("button", { name: "Kategori Ketidakhadiran" }).click();
    await page
      .getByRole("option", { name: "Cuti Tahunan 2024" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(page.locator("table>tbody>tr>td").first()).toHaveText(
      "Cuti Tahunan 2024 2 - 4 Desember 2024  3 Hari"
    );

    await page
      .locator("header")
      .filter({ hasText: "Cuti Anggota" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("button", { name: "Cuti Tahunan" }).click();
    await page.getByRole("option", { name: "Menemani Lahiran" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Tanggal Mulai Cuti$/ })
      .click();
    await page.getByRole("button", { name: "Next month" }).click();
    await page.getByRole("button", { name: "1", exact: true }).first().click();
    await page
      .locator("div")
      .filter({ hasText: /^Tanggal Akhir Cuti$/ })
      .click();
    await page.waitForTimeout(300);
    await page.getByRole("button", { name: "Next month" }).click();
    await page.getByRole("button", { name: "2", exact: true }).nth(1).click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(
      page.locator('table>tbody>.v-data-table__empty-wrapper>[colspan = "5"]')
    ).toHaveText("Data tidak tersedia");
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
    await page.getByRole("link", { name: "Cuti Anggota" }).click();
    await page.locator("#toggleSearch").click();
    await page.locator("#caridata").fill("cuti");
    await page.getByRole("button", { name: "append icon" }).click();
    await expect(page.locator("table>tbody>tr>td").first()).toHaveText(
      "Cuti Tahunan 2024 2 - 4 Desember 2024   3 Hari"
    );
  });

  test("Tambah Data (TC003)", async ({ page }) => {
    test.setTimeout(45000);
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
    await page.getByRole("link", { name: "Cuti Anggota" }).click();
    await page.locator("#add").click();
    await page
      .locator("form")
      .filter({ hasText: "Pilih Kategori Persetujuan" })
      .getByRole("button")
      .click();
    await page.getByRole("option", { name: "Test ketidakhadiran" }).click();
    // test Cuti Melebihi batas
    await page
      .locator("div")
      .filter({ hasText: /^Tanggal Awal$/ })
      .click();
    await page.getByRole("button", { name: "20", exact: true }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Tanggal Selesai$/ })
      .click();
    await page
      .getByRole("menu")
      .filter({ hasText: "2025Fri, Feb 21February" })
      .getByLabel("Next month") //tanggal atau bulan harus diubah
      .click();
    await page
      .getByRole("button", { name: "18" })
      .nth(1)
      .click({ force: true });
    await page.getByRole("textbox", { name: "Keterangan" }).click();
    await page.getByRole("textbox", { name: "Keterangan" }).fill("testing");
    await page
      .getByPlaceholder("Pilih file dengan format (.")
      .setInputFiles(
        "C:/Users/Dias Adi Muhsin/Downloads/Documents/riwayat-kehadiran-ORG-BPDZNU.pdf"
      );
    await page.getByRole("button", { name: "Simpan" }).click();
    // test Cuti Melebihi batas

    await page
      .locator(
        "div:nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .click();
    await page.getByRole("button", { name: "Previous month" }).click();
    await page.getByRole("button", { name: "21" }).nth(1).click();
    await page.getByRole("button", { name: "Simpan" }).click();
    await page
      .locator(
        "div:nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .click();
    await page.getByRole("button", { name: "20", exact: true }).click();
    await page.getByRole("button", { name: "Simpan" }).click();
    await expect(page.getByText('Februari 2025 1 Hari').first()).toBeVisible();
  });

  test("Muat Ulang (TC004)", async ({ page }) => {
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

    await page.getByRole("link", { name: "Cuti Anggota" }).click();
    await page.locator("#refresh").click();
    await expect(page.locator("div.vld-icon")).toBeVisible();
  });
});

test.describe("Menu", () => {
  test("Detail (TC005)", async ({ page }) => {
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

    await page.getByRole("link", { name: "Cuti Anggota" }).click();
    await page
      .getByRole("row", {
        name: "Test ketidakhadiran 20 Februari 2025   1 Hari testing Menunggu Senin, 17-02-",
      })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Detail" }).click();
    const page1Promise = page.waitForEvent("popup");
    await page.getByRole("button", { name: "Unduh Lampiran" }).click();
    const page1 = await page1Promise;
    await expect(page1).toHaveURL(
      "https://ax4dabczjygi.compat.objectstorage.ap-singapore-1.oraclecloud.com/masook-api-dev/2025/20250217/cuti_lampiran/lampiran-cuti-422-250217154712.pdf"
    );
  });

  test("Batal Ajuan(TC006)", async ({ page }) => {
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

    await page.getByRole("link", { name: "Cuti Anggota" }).click();
    await page
      .getByRole("row", {
        name: "Test ketidakhadiran 20 Februari 2025   1 Hari testing Menunggu Senin, 17-02-",
      })
      .locator("#moreMenu")
      .click();

    await page.getByRole("menuitem", { name: "Batal Ajuan" }).click();
    await page.getByRole("button", { name: "Ya" }).click();
  });
});

test("Persetujuan Cuti(TC007)", async ({ page }) => {
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

  await page.getByRole("link", { name: "Cuti Anggota" }).click();
  await page.getByRole("button", { name: "Persetujuan Cuti" }).click();
  await expect(
    page.getByRole("cell", { name: "Data tidak tersedia" })
  ).toBeVisible();
});
