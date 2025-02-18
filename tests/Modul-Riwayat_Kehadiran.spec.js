import { test, expect } from "@playwright/test";

test('Filter Data (TC001)', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('link', { name: 'Riwayat Kehadiran' }).click();
    await page.getByRole('button', { name: 'Lewati' }).click();
    await page.locator('#toggleSelectDate').click();
    await page.getByRole('textbox', { name: 'Anggota' }).click();
    await page.getByRole('option', { name: 'Semua Anggota' }).locator('div').first().click();
    await page.getByRole('button', { name: 'Waktu' }).click();
    await page.locator('div').filter({ hasText: /^Test Hapus$/ }).click();
    await page.getByRole('button', { name: 'Terapkan' }).click();
    await page.locator('#toggleSelectDate').click();
    await page.locator('div').filter({ hasText: /^Anggota$/ }).click();
    await page.getByRole('option', { name: 'Semua Anggota' }).locator('div').first().click();
    await page.getByRole('button', { name: 'clear icon', exact: true }).click();
    await page.getByRole('button', { name: 'Status Pengguna' }).click();
    await page.getByRole('option', { name: 'Aktif', exact: true }).locator('div').first().click();
    await page.getByRole('button', { name: 'Terapkan' }).click();
    await page.locator('#toggleSelectDate').click();
    await page.getByRole('textbox', { name: 'Anggota' }).click();
    await page.getByRole('option', { name: 'Adi Pratamaaaaa' }).first().click();
    await page.getByRole('button', { name: 'Waktu' }).click();
    await page.locator('div').filter({ hasText: /^Awal Tahun 2024$/ }).click();
    await page.getByRole('button', { name: 'Terapkan' }).click();
  });

  test('Refresh (TC002)', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('link', { name: 'Riwayat Kehadiran' }).click();
    await page.getByRole('button', { name: 'Lewati' }).click();
    // Klik tombol refresh
    await page.locator('#refresh').click();
  
    // Tunggu 2 detik untuk memastikan loading terlihat
    await page.waitForSelector('.v-overlay__content .v-progress-circular', { state: 'hidden' });
       
       
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/riwayatKehadiran');
  });

  test('Cek Lokasi (TC003)', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('link', { name: 'Riwayat Kehadiran' }).click();
    await page.getByRole('button', { name: 'Lewati' }).click();

    // Buka Google Maps pertama
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('row', { name: 'Kamis, 30-01-2025 17:08' }).getByRole('button').first().click();
    const page1 = await page1Promise;
    await page1.goto('https://www.google.com/maps/place/7%C2%B057\'15.9%22S+112%C2%B037\'42.0%22E');
    await page1.waitForTimeout(2000); // Tunggu 2 detik
    await page1.close(); // Tutup tab Google Maps pertama

    await page.waitForTimeout(2000); // Tunggu 2 detik
    // Buka Google Maps kedua
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('row', { name: 'Rabu, 08-01-2025 11:16 Taufik' }).getByRole('button').first().click();
    const page2 = await page2Promise;
    await page2.goto('https://www.google.com/maps/place/7%C2%B057\'16.7%22S+112%C2%B037\'41.6%22E');
    await page2.waitForTimeout(2000); // Tunggu 2 detik
    await page2.close(); // Tutup tab Google Maps kedua

    // Kembali ke halaman utama Riwayat Kehadiran
    await page.goto('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/riwayatKehadiran');
});

test('Cek Aktifitas (TC004)', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://sim.dev.masook.id/#/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
  await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.getByText('Jayantara Indonesia').click();
  await page.getByRole('link', { name: 'Riwayat Kehadiran' }).click();
  await page.getByRole('button', { name: 'Lewati' }).click();

  await page.getByRole('row', { name: 'Kamis, 30-01-2025 17:08' }).locator('#getActivitySimpan').click();
  await page.locator('#app').getByRole('document').getByRole('button').click();
  await page.getByRole('row', { name: 'Kamis, 30-01-2025 17:06' }).locator('#getActivitySimpan').click();
  await page.locator('#app').getByRole('document').getByRole('button').click();
  await page.getByRole('row', { name: 'Rabu, 08-01-2025 11:16 Taufik' }).locator('#getActivitySimpan').click();
  await page.locator('#app').getByRole('document').getByRole('button').click();
  await page.getByRole('row', { name: 'Rabu, 08-01-2025 11:03 Taufik' }).locator('#getActivitySimpan').click();
  await page.locator('#app').getByRole('document').getByRole('button').click();
  await page.getByRole('row', { name: 'Senin, 06-01-2025 08:23 Dhian' }).locator('#getActivitySimpan').click();
  await page.locator('#app').getByRole('document').getByRole('button').click();
  await page.getByRole('row', { name: 'Sabtu, 21-12-2024 19:41 Villa' }).locator('#getActivitySimpan').click();
  await page.locator('#app').getByRole('document').getByRole('button').click();
  await page.getByRole('row', { name: 'Jumat, 20-12-2024 07:18 Villa' }).locator('#getActivitySimpan').click();
  await page.locator('#app').getByRole('document').getByRole('button').click();
});




test.describe('Halaman (TC005)', ()=>{
  test('Halaman Dropdown (TC001)', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('link', { name: 'Riwayat Kehadiran' }).click();
    await page.getByRole('button', { name: 'Lewati' }).click();
  
    // Loop untuk memilih setiap halaman dari 1 hingga 127
    for (let i = 1; i <= 19; i++) {
      // Klik dropdown halaman
      await page.getByRole('button', { name: /^Hal\./ }).click();
      
      // Pilih opsi halaman berdasarkan urutan yang muncul dalam dropdown
      const optionLocator = await page.getByRole('option', { name: `${i}` });
      await optionLocator.nth(0).click();  // Pilih elemen pertama yang cocok
    }
  });
  
  test('Halaman Button (TC002)', async ({ page }) => {
    test.setTimeout(120000); // Timeout 2 menit
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('link', { name: 'Riwayat Kehadiran' }).click();
    await page.getByRole('button', { name: 'Lewati' }).click();
  
    // Loop untuk klik tombol halaman dari 2 hingga 127
    for (let i = 2; i <= 127; i++) {
      await page.waitForSelector(`button[aria-label="Goto Page ${i}"]`); // Tunggu elemen tersedia
      await page.locator(`button[aria-label="Goto Page ${i}"]`).click(); // Klik tombol
      await page.waitForTimeout(500); // Tunggu sebentar untuk transisi halaman
    }
  });
  
  test('Arrow Button (TC003)', async ({ page }) => {
    test.setTimeout(120000); // Timeout 2 menit
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('link', { name: 'Riwayat Kehadiran' }).click();
    await page.getByRole('button', { name: 'Lewati' }).click();
  
    // Klik tombol "Next page" sebanyak 127 kali
    for (let i = 0; i < 126; i++) {
      await page.waitForSelector('button[aria-label="Next page"]'); // Tunggu tombol tersedia
      await page.getByRole('button', { name: 'Next page' }).click(); // Klik tombol
  
    }
  });

})







