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

  test("Refresh(TC003)", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://sim.dev.masook.id/#/login');
    
    // Login
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('link', { name: 'Ubah Presensi' }).click();
    
    // Klik tombol refresh
    await page.locator('#refresh').click();
  
    // Tunggu 2 detik untuk memastikan loading terlihat
    await page.waitForSelector('.v-overlay__content .v-progress-circular', { state: 'hidden' });
    
    
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/klaimPresensi');
  
    // Test selesai
  })

  
  test.describe('Titik Tiga (TC004)', ()=>{
    test("Pratinjau(TC001)", async ({ page }) => {
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
     
      await page.getByRole('row', { name: 'Kamis, 29-08-2024 Adi' }).locator('#moreMenu').click();
      await page.getByRole('menuitem', { name: 'Pratinjau' }).click();
      await page.getByRole('button', { name: 'Tutup' }).click();
      await page.getByRole('row', { name: 'Minggu, 03-03-2024 Adi' }).locator('#moreMenu').click();
      await page.getByRole('menuitem', { name: 'Pratinjau' }).click();
      await page.getByRole('banner').getByRole('button').click();
  
      
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
      await page.getByRole('link', { name: 'Ubah Presensi' }).click();
      await page.locator('#add').click();
      await page.getByRole('textbox', { name: 'Pilih Anggota' }).click();
      await page.getByRole('option', { name: 'Alip test' }).locator('div').first().click();
      await page.getByRole('textbox', { name: 'Tanggal' }).click();
      await page.getByRole('button', { name: '17' }).click();
      await page.getByRole('textbox', { name: 'Keterangan' }).click();
      await page.locator('[data-vv-name= "keterangan"]').fill('test ubah');
      await page.getByRole('button', { name: 'Simpan' }).dblclick();
      await page.getByRole('row', { name: 'Senin, 17-02-2025 Alip test' }).locator('#moreMenu').click();
      await page.waitForTimeout(2000)
      await page.getByRole('menuitem', { name: 'Ubah' }).click();
      await page.getByRole('button', { name: 'Diisi jika akan pulang cepat' }).nth(1).click();
      await page.getByRole('option', { name: 'Skor 4 (>90)' }).locator('div').first().click();
      await page.getByRole('button', { name: 'Simpan' }).click();
      await page.getByRole('row', { name: 'Senin, 17-02-2025 Alip test' }).locator('#moreMenu').click();
      await page.getByRole('menuitem', { name: 'Pratinjau' }).click();
      await page.getByRole('button', { name: 'Tutup' }).click();
      await page.getByRole('row', { name: 'Senin, 17-02-2025 Alip test' }).locator('#moreMenu').click();
      await page.getByRole('menuitem', { name: 'Hapus' }).click();
      await page.getByRole('button', { name: 'Ya' }).click();
      
    })
    
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
      await page.getByRole('link', { name: 'Ubah Presensi' }).click();
      await page.getByRole('row', { name: 'Selasa, 01-05-2125 Alip test' }).locator('#moreMenu').click();
      await page.getByRole('menuitem', { name: 'Hapus' }).click();
      await page.getByRole('button', { name: 'Ya' }).click();
      await page.getByRole('row', { name: 'Jumat, 06-03-1925 Alip test' }).locator('#moreMenu').click();
      await page.getByRole('menuitem', { name: 'Hapus' }).click();
      await page.getByRole('button', { name: 'Ya' }).click();
      await page.getByRole('row', { name: 'Jumat, 14-02-2025 Alip test alipia1144@gmail.com 1 - - 1.5 Senin, 17-02-2025 󰇙' }).locator('#moreMenu').click();
      await page.getByRole('menuitem', { name: 'Hapus' }).click();
      await page.getByRole('button', { name: 'Ya' }).click();
      await page.getByRole('row', { name: 'Jumat, 14-02-2025 Alip test' }).locator('#moreMenu').click();
      await page.getByRole('menuitem', { name: 'Hapus' }).click();
      await page.getByRole('button', { name: 'Ya' }).click();
  
    })
  
  })

  test("Halaman Dropdown (TC005)", async ({ page }) => {
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
    
    
    await page.getByRole('button', { name: 'Hal.' }).click();
    await page.getByRole('option', { name: '2' }).click();
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: 'Hal.' }).click();
    await page.getByRole('option', { name: '3' }).click();
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: 'Hal.' }).click();
    await page.getByRole('option', { name: '4' }).click()
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Hal.' }).click();
    await page.getByRole('option', { name: '5' }).click();
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: 'Hal.' }).click();
    await page.getByRole('option', { name: '6' }).click();
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: 'Hal.' }).click();
    await page.getByRole('option', { name: '7' }).click();
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: 'Hal.' }).click();
    await page.getByRole('option', { name: '8' }).click();
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: 'Hal.' }).click();
    await page.getByRole('option', { name: '9' }).click();
    await page.waitForTimeout(2000)

  })

  test("Halaman Button (TC006)", async ({ page }) => {
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
    
    await page.getByRole('button', { name: 'Current Page, Page' }).click();
    await page.getByRole('button', { name: 'Goto Page 2' }).click();
    await page.getByRole('button', { name: 'Goto Page 3' }).click();
    await page.getByRole('button', { name: 'Goto Page 4' }).click();
    await page.getByRole('button', { name: 'Goto Page 5' }).click();
    await page.getByRole('button', { name: 'Goto Page 6' }).click();
    await page.getByRole('button', { name: 'Goto Page 7' }).click();
    await page.getByRole('button', { name: 'Goto Page 8' }).click();
    await page.getByRole('button', { name: 'Goto Page 9' }).click();
  })

  test("Next Arrow Button (TC007)", async ({ page }) => {
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
    
    await page.getByRole('button', { name: 'Next page' }).click();
    await page.getByRole('button', { name: 'Next page' }).click();
    await page.getByRole('button', { name: 'Next page' }).click();
    await page.getByRole('button', { name: 'Next page' }).click();
    await page.getByRole('button', { name: 'Next page' }).click();
    await page.getByRole('button', { name: 'Next page' }).click();
    await page.getByRole('button', { name: 'Next page' }).click();
    await page.getByRole('button', { name: 'Next page' }).click();
    await page.getByRole('button', { name: 'Previous page' }).click();
    await page.getByRole('button', { name: 'Previous page' }).click();
    await page.getByRole('button', { name: 'Previous page' }).click();
    await page.getByRole('button', { name: 'Previous page' }).click();
    await page.getByRole('button', { name: 'Previous page' }).click();
    await page.getByRole('button', { name: 'Previous page' }).click();
    await page.getByRole('button', { name: 'Previous page' }).click();
    await page.getByRole('button', { name: 'Previous page' }).click();
    await page.getByRole('listitem').filter({ hasText: /^$/ }).first().click();
  })


