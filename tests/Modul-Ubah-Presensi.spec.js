import { test, expect } from "@playwright/test";

 test("Filter Data(TC001)", async ({ page }) => {
     test.setTimeout(60000);
     await page.goto('https://sim.dev.masook.id/#/login');
     await page.getByRole('textbox', { name: 'Username' }).click();
     await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
     await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
     await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
     await page.getByRole('button', { name: 'Masuk' }).click();
     await expect(page).toHaveURL('https://sim.dev.masook.id/#/pilihOrganisasi');
   
     await page.getByText('Jayantara Indonesia').click();
     await page.getByRole('link', { name: 'Ubah Presensi' }).click();
     await page.locator('#toggleSelectDate').click();
     await page.getByRole('button', { name: 'Terapkan' }).click();
     await page.locator('#toggleSelectDate').click();
     await page.getByRole('textbox', { name: 'Anggota' }).click();
     await page.getByText('Semua Anggota').click();
     await page.getByRole('button', { name: 'Terapkan' }).click();
     await page.locator('#toggleSelectDate').click();
     await page.getByRole('textbox', { name: 'Anggota' }).click();
     await page.getByRole('option', { name: 'Adi Pratamaaaaa' }).locator('div').first().click();
     await page.getByRole('button', { name: 'Terapkan' }).click();
     await page.locator('#toggleSelectDate').click();
     await page.getByRole('textbox', { name: 'Anggota' }).click();
     await page.getByText('Semua Anggota').click();
     await page.getByRole('button', { name: 'Waktu' }).click();
     await page.locator('div').filter({ hasText: /^Oktober 2024$/ }).click();
     await page.getByRole('button', { name: 'Terapkan' }).click();
     await page.locator('#toggleSelectDate').click();
     await page.getByRole('button', { name: 'Waktu Oktober 2024 clear icon' }).click();
     await page.locator('div').filter({ hasText: /^September 2024$/ }).click();
     await page.getByRole('button', { name: 'Terapkan' }).click();
     await page.locator('#toggleSelectDate').click();
     await page.getByRole('button', { name: 'clear icon', exact: true }).click();
     await page.getByRole('button', { name: 'Status Pengguna' }).click();
     await page.getByRole('option', { name: 'Aktif', exact: true }).locator('div').first().click();
     await page.getByRole('button', { name: 'Terapkan' }).click();
     await page.locator('#toggleSelectDate').click();
     await page.getByRole('button', { name: 'Waktu' }).click();
     await page.locator('div').filter({ hasText: /^Oktober 2023$/ }).click();
     await page.getByRole('button', { name: 'Terapkan' }).click();
     await page.locator('#toggleSelectDate').click();
     await page.getByRole('button', { name: 'Aktif clear icon' }).getByLabel('clear icon').click();
     await page.getByRole('button', { name: 'Terapkan' }).click();
     await page.locator('#toggleSelectDate').click();
     await page.getByRole('button', { name: 'Waktu Oktober 2023 clear icon' }).click();
     await page.locator('div').filter({ hasText: /^Juni 2023$/ }).click();
     await page.getByRole('button', { name: 'Terapkan' }).click();
     await page.locator('#toggleSelectDate').click();
     await page.getByRole('button', { name: 'Status Pengguna' }).click();
     await page.getByText('Aktif', { exact: true }).click();
     await page.getByRole('button', { name: 'Waktu Juni 2023 clear icon' }).click();
     await page.locator('div').filter({ hasText: /^April 2023$/ }).click();
     await page.getByRole('button', { name: 'Terapkan' }).click();
     await page.locator('#toggleSelectDate').click();
     await page.getByRole('button', { name: 'Waktu April 2023 clear icon' }).click();
     await page.locator('div').filter({ hasText: /^Juni 2023$/ }).click();
     await page.getByRole('button', { name: 'Terapkan' }).click();
    
   })

   test("Tambah Data(TC002)", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/pilihOrganisasi');
  
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('link', { name: 'Ubah Presensi' }).click();
    await page.locator('#add').click();
    await page.getByRole('textbox', { name: 'Pilih Anggota' }).click();
    await page.getByRole('option', { name: 'Alip test' }).click();
    await page.getByRole('textbox', { name: 'Tanggal' }).click();
    await page.getByRole('button', { name: '14' }).click();
    await page.getByRole('textbox', { name: 'Keterangan' }).click();
    await page.locator('[data-vv-name= "keterangan"]').fill('test absen');
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.locator('td:nth-child(8)').first().click();
    await page.getByRole('menuitem', { name: 'Pratinjau' }).click();  
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Tutup' }).click();

    await page.locator('#add').click();
    await page.getByRole('textbox', { name: 'Pilih Anggota' }).click();
    await page.getByRole('option', { name: 'Alip test' }).locator('div').first().click();
    await page.getByRole('textbox', { name: 'Tanggal' }).click();
    await page.getByRole('button', { name: '14' }).click();
    await page.getByRole('button', { name: 'Diisi jika akan terlambat' }).click();
    await page.getByRole('option', { name: 'Skor 2 (31-60)' }).click();
    await page.getByRole('button', { name: 'Diisi jika akan pulang cepat' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Skor 4 (>90)' }).locator('div').first().click();
    await page.getByRole('textbox', { name: 'Keterangan' }).click();
    await page.locator('[data-vv-name= "keterangan"]').fill('test skor');
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.locator('tr:nth-child(3) > td:nth-child(8)').click();
    await page.getByRole('menuitem', { name: 'Pratinjau' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Tutup' }).click();  

    await page.locator('#add').click();
    await page.getByRole('textbox', { name: 'Pilih Anggota' }).click();
    await page.getByRole('option', { name: 'Alip test' }).click();
    await page.getByRole('textbox', { name: 'Tanggal' }).click();
    await page.getByText('2025', { exact: true }).click();
    await page.getByText('1925', { exact: true }).click();
    await page.getByRole('button', { name: 'Mar' }).click();
    await page.getByRole('button', { name: '6', exact: true }).click();
    await page.getByRole('textbox', { name: 'Keterangan' }).click();
    await page.locator('[data-vv-name= "keterangan"]').fill('test masa lampau');
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.getByRole('row', { name: 'Jumat, 06-03-1925 Alip test' }).locator('#moreMenu').click();
    await page.getByRole('menuitem', { name: 'Pratinjau' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Tutup' }).click();


    await page.locator('#add').click();
    await page.getByRole('textbox', { name: 'Pilih Anggota' }).click();
    await page.getByRole('option', { name: 'Alip test' }).locator('div').first().click();
    await page.getByRole('textbox', { name: 'Tanggal' }).click();
    await page.getByText('2025', { exact: true }).click();
    await page.getByText('2125').click();
    await page.waitForTimeout(500);
    await page.getByRole('cell', { name: 'May' }).click();
    await page.getByRole('cell', { name: 'W', exact: true }).click();
    await page.getByRole('button', { name: '1', exact: true }).click();
    await page.getByRole('textbox', { name: 'Keterangan' }).click();
    await page.locator('[data-vv-name= "keterangan"]').fill('test masa depan');
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.getByRole('row', { name: 'Selasa, 01-05-2125 Alip test' }).locator('#moreMenu').click();
    await page.getByRole('menuitem', { name: 'Pratinjau' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Tutup' }).click();  

    
  })