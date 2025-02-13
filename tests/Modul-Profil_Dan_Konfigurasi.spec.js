import { test, expect } from "@playwright/test";

test("Ubah Profil", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto("https://sim.dev.masook.id/#/login");
    
    // Login
    await page.getByRole("textbox", { name: "Username" }).fill("operatorjmi@mail.com");
    await page.getByRole("textbox", { name: "Kata Sandi" }).fill("111111");
    await page.getByRole("button", { name: "Masuk" }).click();
    
    // Tunggu sampai halaman utama dimuat
    await page.waitForSelector(".logo", { state: "visible" });
    await page.locator("div:nth-child(2) > .ra-0 > .v-card__text > .container > .text-center > .logo").click();
    
    // Navigasi ke Profil
    await page.getByRole("link", { name: "Profil dan Konfigurasi" }).click();
    await page.waitForTimeout(2000);
    
    await page.getByRole("button", { name: "Lewati" }).click();
    await page.locator("#edit").click();
    
    // Edit profil
    await page.locator("#Surel").click();
    await page.locator("[id=\"Nomor\\ Telp\"]").click();
    await page.locator("#Faximile").click();
    await page.locator("#Alamat").click();
    await page.getByRole("button", { name: "Lanjut" }).click();
    
    // Tunggu sampai halaman informasi tambahan tersedia
    await page.waitForSelector("button:has-text('Informasi Tambahan')", { state: "visible" });
    await page.getByRole("button", { name: "Informasi Tambahan" }).click();
    
    // Tunggu sampai input muncul
    await page.getByRole('textbox', { name: 'Nama Atribut Organisasi' }).fill('Status Pendidikan');
    await page.getByRole('textbox', { name: 'Isi Atribut Organisasi' }).fill('Lulus');
    
    // Simpan perubahan
    await page.getByRole("button", { name: "Lanjut" }).click();
    await page.getByRole("button", { name: "Simpan" }).click();
    
    // Tunggu konfirmasi simpan muncul
    await page.waitForSelector("text=Simpan Data BerhasilTutup", { state: "visible" });
    await page.getByText("Simpan Data BerhasilTutup").click();
});

test("Atur Konfigurasi", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://sim.dev.masook.id/#/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
  await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
  await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.getByText('Jayantara Indonesia').click();
  await page.getByRole('link', { name: 'Profil dan Konfigurasi' }).click();
  await page.getByRole('button', { name: 'Lewati' }).click();
  await page.locator('#settingkonfigurasi').click();
  await page.locator('div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.locator('.v-input--selection-controls__ripple').first().click();
  await page.locator('div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  await page.locator('div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.locator('div:nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  await page.locator('div:nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.locator('div:nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  await page.locator('div:nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.locator('div:nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  await page.getByRole('tab', { name: 'Perangkat' }).click();
  await page.locator('.v-form > div > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.locator('.v-form > div > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.locator('.v-form > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  await page.locator('.v-form > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.locator('.v-form > div:nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  await page.locator('.v-form > div:nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.locator('.v-form > div:nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  await page.locator('.v-form > div:nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.locator('div:nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  await page.locator('div:nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.locator('div:nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  await page.locator('div:nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.locator('div:nth-child(2) > .col-sm-2 > .v-avatar > .v-icon').click();
//   await page.locator('#input-648').click();
//   await page.locator('#input-651').click();
//   await page.locator('#input-656').click();
 
//   await page.locator('#input-672').click();
//   await page.locator('#input-675').click();
//   await page.locator('#input-681').click();
//   await page.locator('#input-689').click();
  await page.locator('form').filter({ hasText: 'Work From Office Nama Label16' }).getByRole('button').nth(2).click();
  await page.locator('form').filter({ hasText: 'Work From Office Nama Label16' }).getByRole('button').nth(2).click();
  await page.locator('form').filter({ hasText: 'Work From Office Nama Label16' }).getByRole('button').nth(3).click();
  await page.locator('button').filter({ hasText: /^Simpan$/ }).click();
  await page.getByRole('tab', { name: 'Laporan' }).click();
  await page.locator('div:nth-child(3) > .v-form > div > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.locator('div:nth-child(3) > .v-form > div > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.locator('div:nth-child(3) > .v-form > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  await page.locator('div:nth-child(3) > .v-form > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.getByRole('tab', { name: 'Batas Perubahan Data' }).click();
  await page.locator('input[name="Batas tanggal"]').fill('1000000');
  await page.locator('[id="Batas\\ presensi"]').click();
  await page.locator('[id="Batas\\ presensi"]').fill('5111111');
  await page.locator('input[name="Batas tanggal approval presensi swafoto"]').click();
  await page.locator('input[name="Batas tanggal approval presensi swafoto"]').fill('5222222');
  await page.getByRole('button', { name: 'Simpan' }).click();
  await page.locator('[id="Batas\\ presensi"]').click();
  await page.locator('[id="Batas\\ presensi"]').fill('25');
  await page.locator('input[name="Batas tanggal approval presensi swafoto"]').click();
  await page.locator('input[name="Batas tanggal approval presensi swafoto"]').fill('5');
  await page.locator('input[name="Batas tanggal"]').click();
  await page.locator('input[name="Batas tanggal"]').fill('25');
  await page.locator('[id="Batas\\ presensi"]').click();
  await page.locator('[id="Batas\\ presensi"]').fill('5');
  await page.getByRole('tab', { name: 'Zona Waktu' }).click();
  await page.getByRole('button', { name: 'Pilih Zona Waktu WIB' }).click();
  await page.getByText('WITA').click();
  await page.getByRole('button', { name: 'Simpan' }).click();
  await page.locator('#settingkonfigurasi').click();
  await page.getByRole('button', { name: 'Pilih Zona Waktu WITA' }).click();
  await page.getByRole('option', { name: 'WIT', exact: true }).locator('div').first().click();
  await page.getByRole('button', { name: 'Simpan' }).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.locator('#settingkonfigurasi').click();
  await page.locator('div:nth-child(5) > .v-form > .col-sm-6').click();
  await page.getByRole('button', { name: 'Pilih Zona Waktu WIT' }).click();
  await page.locator('form').filter({ hasText: 'Work From Office Nama Label16' }).getByRole('button').nth(3).click();
  await page.getByText('WIB', { exact: true }).click();
  await page.getByText('Simpan Konfigurasi BerhasilTutup').click(); 
  await page.getByRole('button', { name: 'Simpan' }).click();
});
