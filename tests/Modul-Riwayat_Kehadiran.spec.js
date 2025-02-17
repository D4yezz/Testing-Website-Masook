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
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('link', { name: 'Riwayat Kehadiran' }).click();
    await page.getByRole('button', { name: 'Lewati' }).click();
   await page.getByRole('row', { name: 'Kamis, 30-01-2025 17:08' }).locator('#getActivitySimpan').click();
   await page.locator('#app').getByRole('document').getByRole('button').click();
   const page1Promise = page.waitForEvent('popup');
   await page.getByRole('row', { name: 'Kamis, 30-01-2025 17:08' }).getByRole('button').first().click();
   const page1 = await page1Promise;
  
   await page1.goto('https://www.google.com/maps/place/7%C2%B057\'15.9%22S+112%C2%B037\'42.0%22E/@-7.954426,112.6283413,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.954426!4d112.6283413?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D');
   await page.getByRole('row', { name: 'Rabu, 08-01-2025 11:16 Taufik' }).locator('#getActivitySimpan').click();
   await page.locator('#app').getByRole('document').getByRole('button').click();
   const page2Promise = page.waitForEvent('popup');
   await page.getByRole('row', { name: 'Rabu, 08-01-2025 11:16 Taufik' }).getByRole('button').first().click();
   const page2 = await page2Promise;
   await page2.goto('https://www.google.com/maps/place/7%C2%B057\'16.7%22S+112%C2%B037\'41.6%22E/@-7.9546412,112.6282316,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.9546412!4d112.6282316?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D');
  });
