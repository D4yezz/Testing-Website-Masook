import { test, expect } from "@playwright/test";

test("Ubah Profil (TC001)", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto("await page.goto('https://sim.dev.masook.id/#/login');");
    
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

test("Atur Konfigurasi (TC002)", async ({ page }) => {
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
    await page.getByText('YaTidak').nth(4).click();
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
    await page.locator('.v-form > div:nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
    await page.locator('.v-form > div:nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
    await page.locator('div:nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
    await page.locator('div:nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
    await page.locator('div:nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
    await page.locator('div:nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.locator('div:nth-child(2) > .col-sm-2 > .v-avatar > .v-icon').click();
    await page.locator('form').filter({ hasText: 'Work From Office Nama Label16' }).getByRole('button').nth(2).click();
    await page.locator('form').filter({ hasText: 'Work From Office Nama Label16' }).getByRole('button').nth(2).click();
    await page.locator('div:nth-child(3) > .col-sm-2 > .v-avatar > .v-icon').click();
    await page.locator('form').filter({ hasText: 'Work From Office Nama Label16' }).getByRole('button').nth(3).click();
    await page.locator('form').filter({ hasText: 'Work From Office Nama Label16' }).getByRole('button').nth(3).click();
    await page.locator('form').filter({ hasText: 'Work From Office Nama' }).getByRole('button').first().click();
    await page.locator('form').filter({ hasText: 'Work From Office Nama Label16' }).getByRole('button').first().click();
    await page.locator('.col-sm-2 > .v-avatar > .v-icon').first().click();
    await page.locator('form').filter({ hasText: 'Work From Office Nama Label16' }).getByRole('button').nth(1).click();
    await page.locator('form').filter({ hasText: 'Work From Office Nama Label16' }).getByRole('button').nth(1).click();
    await page.locator('div:nth-child(2) > .col-sm-2 > .v-avatar > .v-icon').click();
    await page.locator('button').filter({ hasText: /^Simpan$/ }).click();
    await page.getByRole('tab', { name: 'Zona Waktu' }).click();
    await page.getByRole('button', { name: 'Pilih Zona Waktu WIB' }).click();
    await page.getByRole('option', { name: 'WIB' }).locator('div').first().click();
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.getByText('Simpan Konfigurasi BerhasilTutup').click();
    await page.getByRole('button', { name: 'Tutup' }).click();
    await page.locator('#settingkonfigurasi').click();
    await page.getByRole('button', { name: 'Pilih Zona Waktu WIB' }).click();
    await page.getByRole('option', { name: 'WITA' }).click();
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.getByText('Simpan Konfigurasi BerhasilTutup').click();
    await page.getByRole('button', { name: 'Tutup' }).click();
    await page.locator('#settingkonfigurasi').click();
    await page.getByRole('button', { name: 'Pilih Zona Waktu WITA' }).click();
    await page.getByRole('option', { name: 'WIT', exact: true }).click();
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.getByText('Simpan Konfigurasi BerhasilTutup').click();
    await page.getByRole('button', { name: 'Tutup' }).click();
    await page.locator('#settingkonfigurasi').click();
    await page.getByRole('button', { name: 'Pilih Zona Waktu WIT' }).click();
    await page.getByRole('option', { name: 'WIB' }).click();
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.getByText('Simpan Konfigurasi BerhasilTutup').click();
    await page.getByRole('button', { name: 'Tutup' }).click();
   
});

test.describe('Titik Tiga (TC003)', ()=>{
  test("Cek Lokasi (TC001)", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/pilihOrganisasi');
  
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('link', { name: 'Profil dan Konfigurasi' }).click();
    await page.getByRole('button', { name: 'Lewati' }).click();
  
    //modul cek lokasi
    await page.getByRole('row', { name: '1. Lobby Utama Kantor Karang' }).locator('#moreMenu').click();
    await page.getByText('Cek Titik Lokasi').click();
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.getByRole('row', { name: '2. Front Office Jalan Jakarta' }).locator('#moreMenu').click();
    await page.getByRole('menuitem', { name: 'Cek Titik Lokasi' }).locator('div').click();
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.getByRole('row', { name: 'Kantor Utama Jalan Bunga' }).locator('#moreMenu').click();
    await page.getByRole('menuitem', { name: 'Cek Titik Lokasi' }).locator('div').click();
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    
  });

  test("Ubah (TC002)", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/pilihOrganisasi');
  
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('link', { name: 'Profil dan Konfigurasi' }).click();
    await page.getByRole('button', { name: 'Lewati' }).click();
  
    //modul ubah nama
    await page.getByRole('row', { name: '1. Lobby Utama Kantor Karang' }).locator('#moreMenu').click();
    await page.getByRole('menuitem', { name: 'Ubah' }).locator('div').click();
    await page.locator('#Nama').click();
    await page.locator('#Nama').fill('1. Lobby Utama Kantor test ubah');
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.getByRole('row', { name: '1. Lobby Utama Kantor test' }).locator('#moreMenu').click();
    await page.getByRole('menuitem', { name: 'Cek Titik Lokasi' }).locator('div').click();
    await page.locator('.gm-style > div > div:nth-child(2) > div > div:nth-child(3) > div').first().click();
    await page.getByRole('button', { name: 'Close' }).click();
    await page.getByRole('row', { name: '1. Lobby Utama Kantor test' }).locator('#moreMenu').click();
    await page.getByRole('menuitem', { name: 'Ubah' }).locator('div').click();
    await page.locator('#Nama').fill('1. Lobby Utama Kantor');
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.locator('.gm-style > div > div:nth-child(2) > div > div:nth-child(3) > div').first().click();
    await page.getByRole('button', { name: 'Close' }).click();
  
    //modul ubah lokasi
    await page.locator('tr:nth-child(8) > td:nth-child(7)').click();
    await page.getByRole('menuitem', { name: 'Cek Titik Lokasi' }).click();
    // await page.locator('div:nth-child(2) > div > div:nth-child(3) > div:nth-child(7)').click();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    // await page.getByRole('button', { name: 'Close' }).click();
    await page.locator('tr:nth-child(8) > td:nth-child(7)').click();
    await page.getByRole('menuitem', { name: 'Ubah' }).click();
    await page.locator('#Nama').click();
    await page.locator('#Nama').fill('Lokasi Dirubah');
    await page.getByRole('button', { name: 'Ubah Lokasi' }).click();
    await page.getByRole('textbox', { name: 'Lokasi' }).click();
    await page.getByRole('textbox', { name: 'Lokasi' }).fill('new yo');
    await page.getByText('New York DriveAltadena, CA,').click();
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.locator('tr:nth-child(8) > td:nth-child(7)').click();
    await page.getByRole('menuitem', { name: 'Cek Titik Lokasi' }).click();
    // await page.locator('div').filter({ hasText: /^To navigate, press the arrow keys\.Use ctrl \+ scroll to zoom the map$/ }).getByRole('button').click();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    // await page.getByRole('button', { name: 'Close' }).click();
    await page.locator('tr:nth-child(8) > td:nth-child(7)').click();
    await page.getByRole('menuitem', { name: 'Ubah' }).click();
    await page.locator('#Nama').fill('Lokasi Awal');
    await page.getByRole('button', { name: 'Ubah Lokasi' }).click();
    await page.getByRole('textbox', { name: 'Lokasi' }).click();
    await page.getByRole('textbox', { name: 'Lokasi' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Lokasi' }).fill('Jl haji alwi');
    await page.getByText('Jl. H. AlwiSumber Bening,').click();
    await page.getByRole('button', { name: 'Simpan' }).click();
  });

  test("Hapus (TC003)", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/pilihOrganisasi');
  
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('link', { name: 'Profil dan Konfigurasi' }).click();
    await page.getByRole('button', { name: 'Lewati' }).click();
    await page.getByRole('button', { name: 'Tambah lokasi' }).click();
    await page.locator('#Nama').click();
    await page.locator('#Nama').press('CapsLock');
    await page.locator('#Nama').fill('TEST ADD DAN HAPUS');
    await page.getByRole('textbox', { name: 'Lokasi' }).click();
    await page.getByRole('textbox', { name: 'Lokasi' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Lokasi' }).fill('dinoyo');
    await page.getByText('Jalan Dinoyo PermaiDinoyo,').click();
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.locator('tr:nth-child(11) > td:nth-child(7)').click();
    await page.getByRole('menuitem', { name: 'Hapus' }).click();
    await page.getByRole('button', { name: 'Ya' }).click();
    await page.getByText('Hapus Lokasi berhasilTutup').click();
    await page.getByRole('button', { name: 'Tutup' }).click();
  });

  test("Aktif & Non Aktif (TC004)", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/pilihOrganisasi');
  
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('link', { name: 'Profil dan Konfigurasi' }).click();
    await page.getByRole('button', { name: 'Lewati' }).click();
    await page.getByRole('button', { name: 'Tambah lokasi' }).click();
    await page.locator('#Nama').click();
    await page.locator('#Nama').fill('Test aktif ke non aktif');
    await page.getByRole('textbox', { name: 'Lokasi' }).click();
    await page.getByRole('textbox', { name: 'Lokasi' }).fill('hawai');
    await page.getByText('Hawaiian TerraceCincinnati,').click();
    await page.getByRole('button', { name: 'Simpan' }).click();
  
    await page.locator('tr:nth-child(12) > td:nth-child(7)').click();
    await page.getByRole('menuitem', { name: 'Non-Aktifkan' }).click();
    await page.getByRole('button', { name: 'Ya' }).click();
    await page.getByText('Lokasi berhasil di Non-').click();
    await page.getByRole('button', { name: 'Tutup' }).click();
    await page.locator('tr:nth-child(12) > td:nth-child(7)').click();
    await page.getByRole('menuitem', { name: 'Aktifkan' }).click();
    await page.getByRole('button', { name: 'Ya' }).click();
    await page.getByText('Lokasi berhasil di Aktifkan').click();
    await page.getByRole('button', { name: 'Tutup' }).click();
    await page.locator('tr:nth-child(12) > td:nth-child(7)').click();
    await page.getByRole('menuitem', { name: 'Hapus' }).locator('div').click();
    await page.getByRole('button', { name: 'Ya' }).click();
    await page.getByText('Hapus Lokasi berhasil').click();
    await page.getByRole('button', { name: 'Tutup' }).click();
  

  })


})


test("Ubah (TC002)", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/pilihOrganisasi');
  
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('link', { name: 'Profil dan Konfigurasi' }).click();
    await page.getByRole('button', { name: 'Lewati' }).click();
  
   
    await page.getByRole('button', { name: 'Tambah lokasi' }).click();
    await page.locator('#Nama').click();
    await page.locator('#Nama').fill('Testing Tambah dan hapus Lokasi');
    await page.getByRole('textbox', { name: 'Lokasi' }).click();
    await page.getByRole('textbox', { name: 'Lokasi' }).fill('amerika');
    await page.getByText('Amerika PladsCopenhagen').click();
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.locator('tr:nth-child(19) > td:nth-child(7)').click();
    await page.getByRole('menuitem', { name: 'Hapus' }).click();
    await page.getByRole('button', { name: 'Ya' }).click();
    await page.getByText('Hapus Lokasi berhasil').click();
    await page.getByRole('button', { name: 'Tutup' }).click();
  });