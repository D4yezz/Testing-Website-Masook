// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Toggle", () => {
  test("Unggah Data (TC001)", async ({ page }) => {
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
    await page.getByRole("button", { name: "Kelola Anggota" }).click();
    await page.getByRole("link", { name: "Daftar Anggota" }).click();
    await page.getByRole("button", { name: "Unggah Data" }).click();
    await page
      .locator('input[placeholder="Pilih file dengan format (.xlsx dan .xls)"]')
      .setInputFiles(
        "D:/File Coding/RPL-SMKN-8-MALANG/PKL_24-25/PlayWright/Testing-Website-Masook/downloads & upload/template_upload_pengguna.xlsx"
      );
    await page.getByRole("button", { name: "Simpan" }).click();
    await page.waitForLoadState("load");
    await page.getByRole("button", { name: "Next page" }).click();
    await expect(
      page.getByRole("link", { name: "Dummy Testing" })
    ).toBeVisible();
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
    await page.getByRole("button", { name: "Kelola Anggota" }).click();
    await page.getByRole("link", { name: "Daftar Anggota" }).click();
    await page.locator("#toggleSearch").click();
    await page.getByRole("textbox", { name: "Cari Anggota" }).click();
    await page.locator("#caridata").fill("dummy");
    await page.locator("#caridata").press("Enter");
    await expect(
      page.getByRole("link", { name: "Dummy Testing" })
    ).toBeVisible();
    await page.locator("#caridata").fill("(*&^%$#@#$%^&");
    await page.getByRole("button", { name: "append icon" }).click();
    await expect(
      page.getByRole("cell", { name: "Data tidak tersedia" })
    ).toBeVisible();
  });

  test("Tambah Data (TC003)", async ({ page }) => {
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
    await page.getByRole("button", { name: "Kelola Anggota" }).click();
    await page.getByRole("link", { name: "Daftar Anggota" }).click();
    await page.locator("#add").click();
    await page
      .locator("div")
      .filter({ hasText: /^Surat Elektronik atau Email$/ })
      .click();
    await page
      .getByRole("textbox", { name: "Surat Elektronik atau Email" })
      .fill("testingdata@gmail.com");
    await page.getByRole("button", { name: "Cari" }).click();
    await page.getByRole("textbox", { name: "Nomor Pegawai" }).click();
    await page.locator('[data-vv-name="no_pegawai"]').click();
    await page.locator('[data-vv-name="no_pegawai"]').fill("ini bukan angka");
    await page.getByRole("textbox", { name: "Nama lengkap*" }).click();
    await page.locator('[data-vv-name="nama"]').fill("test tambah data");
    await page.getByRole("button", { name: "Jenis Kelamin" }).click();
    await page
      .getByRole("option", { name: "Perempuan" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("textbox", { name: "Nomor Telp" }).click();
    await page.locator('[data-vv-name="no_hp"]').fill("012345678");
    await page.getByRole("button", { name: "Lokasi Presensi" }).click();
    await page.getByRole("option", { name: "TEST ADD DAN HAPUS" }).click();
    await page.getByRole("option", { name: "Test aktif ke non aktif" }).click();
    await page.getByRole("option", { name: "test cek lokasi" }).click();
    await page.locator('[data-vv-name="no_hp"]').click();
    await page
      .locator("div")
      .filter({ hasText: /^Tanggal Mulai Masuk Kerja$/ })
      .click();
    await page.getByRole("button", { name: "Next month" }).click();
    await page.getByRole("button", { name: "Next month" }).click();
    await page.getByRole("button", { name: "7", exact: true }).first().click();
    await page
      .locator("div")
      .filter({ hasText: /^Ya$/ })
      .locator("div")
      .nth(1)
      .click();
    await expect(page.getByText("Informasi Tambahan (Atribut")).toBeVisible();
    await page.getByRole("button", { name: "Simpan" }).click();
    await page.getByRole("button", { name: "Goto Page 6" }).click();
    await page.waitForLoadState("load");
    await expect(
      page.getByRole("link", { name: "Test Tambah Data" })
    ).toBeVisible();
  });

  test("Filter Data (TC004)", async ({ page }) => {
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
    await page.getByRole("button", { name: "Kelola Anggota" }).click();
    await page.getByRole("link", { name: "Daftar Anggota" }).click();
    await page.locator("#filterAnggota").click();
    await page.getByRole("button", { name: "Peran" }).click();
    await page
      .getByRole("option", { name: "Operator" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Verifikasi Wajah" }).click();
    await page
      .getByRole("option", { name: "Terverifikasi", exact: true })
      .click();
    await page.getByRole("button", { name: "Status Pengguna" }).click();
    await page
      .getByRole("option", { name: "Tidak Aktif" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Status Aktivasi" }).click();
    await page
      .getByRole("option", { name: "Belum Aktivasi" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Reset" }).click();
    await page.getByRole("button", { name: "clear icon", exact: true }).click();
    await page.locator("form").getByRole("button").first().click();
    await page
      .getByRole("option", { name: "User" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Verifikasi Wajah" }).click();
    await page.getByRole("option", { name: "Belum Terverifikasi" }).click();
    await page.getByRole("button", { name: "Status Pengguna" }).click();
    await page.getByRole("option", { name: "Aktif", exact: true }).click();
    await page.getByRole("button", { name: "Status Aktivasi" }).click();
    await page.getByRole("option", { name: "Sudah Aktivasi" }).click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(
      page.getByRole("paragraph").filter({ hasText: /^Adinda$/ })
    ).toBeVisible();
  });

  const fs = require("fs");
  const path = require("path");

  test("Unduh Data (TC005)", async ({ page }) => {
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
    await page.getByRole("button", { name: "Kelola Anggota" }).click();
    await page.getByRole("link", { name: "Daftar Anggota" }).click();

    const downloadPath = path.join(__dirname, "../downloads & upload");

    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.locator("#btnDownload").click(),
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

test.describe("Menu", () => {
  test("Detail (TC006)", async ({ page }) => {
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
    await page.getByRole("button", { name: "Kelola Anggota" }).click();
    await page.getByRole("link", { name: "Daftar Anggota" }).click();
    await page.getByRole("button", { name: "Goto Page 6" }).click();
    await page
      .getByRole("row", { name: "avatar Test Tambah Data" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Detail" }).click();
    await page.locator("#cetak").click();
    await page.getByRole("button", { name: "Ya" }).click();
    await expect(
      page.getByText("Proses Cetak Kartu Pengguna gagal.Tutup")
    ).toBeVisible();
    // await page.locator('#pick-avatar').setInputFiles('D:/File Coding/RPL-SMKN-8-MALANG/PKL_24-25/PlayWright/Testing-Website-Masook/downloads & upload/spinderman.jpg');
    const [fileChooser] = await Promise.all([
      page.waitForEvent("filechooser"),
      page.locator("#pick-avatar").click(),
    ]);
    await fileChooser.setFiles(
      "D:/File Coding/RPL-SMKN-8-MALANG/PKL_24-25/PlayWright/Testing-Website-Masook/downloads & upload/Samsung.jpeg"
    );
    await page.getByRole("button", { name: "Simpan" }).click();
  });
});
