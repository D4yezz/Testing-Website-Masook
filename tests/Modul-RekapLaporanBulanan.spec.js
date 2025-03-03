import { test, expect } from "@playwright/test";

test.describe('Toggle (TC001)', () => {
    test('List Item (TC001)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Laporan' }).click();
        await page.getByRole('link', { name: 'Rekap Laporan Bulanan' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/laporan/bulanan');


        await page.getByRole('button', { name: 'Testing' }).click();
        await page.locator('div').filter({ hasText: /^Test Hapus$/ }).click();
        await page.getByRole('button', { name: 'Test Hapus' }).click();
        await page.locator('div').filter({ hasText: /^Hapus Data$/ }).click();
        await page.getByRole('button', { name: 'Hapus Data' }).click();
        await page.locator('#list-item-479-3 div').filter({ hasText: /^Testing hari ini$/ }).click();
        await page.getByRole('button', { name: 'Testing hari ini' }).click();
        await page.locator('#list-item-480-4 div').filter({ hasText: /^Testing hari ini$/ }).click();
        await page.getByRole('button', { name: 'Testing hari ini' }).click();
        await page.locator('div').filter({ hasText: /^Testing hari ini dihapus$/ }).click();
        await page.getByRole('button', { name: 'Testing hari ini dihapus' }).click();
        await page.locator('div').filter({ hasText: /^Juni 2024$/ }).click();
        await page.getByRole('button', { name: 'Juni' }).click();
        await page.locator('div').filter({ hasText: /^April 2024$/ }).click();
        await page.getByRole('button', { name: 'April' }).click();
        await page.locator('div').filter({ hasText: /^Maret 2024$/ }).click();
        await page.getByRole('button', { name: 'Maret 2024 Maret 2024 Jumat,' }).click();
        await page.locator('div').filter({ hasText: /^Februari 2024$/ }).click();
        await page.getByRole('button', { name: 'Februari' }).click();
        await page.locator('div').filter({ hasText: /^Awal Tahun 2024$/ }).click();
    });
    

    test('Search (TC002)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Laporan' }).click();
        await page.getByRole('link', { name: 'Rekap Laporan Bulanan' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/laporan/bulanan');
    
        // Melakukan pencarian pertama
        const searchBox = page.getByRole('textbox', { name: 'Masukan Nama / NIP' });
        await searchBox.click();
        await searchBox.fill('alip');
        await searchBox.press('Enter');
    
        // Menunggu hasil pencarian muncul
        await page.waitForTimeout(2000);
        
        // Memeriksa apakah ada teks "Alip" atau "alip" di tabel (case-insensitive)
        await expect(page.locator('table')).toContainText(/alip/i);
    
        // Melakukan pencarian kedua dengan teks yang tidak valid
        await searchBox.fill('aiwdoakdoawkdokawd');
        await searchBox.press('Enter');
    
        await page.waitForTimeout(2000);
        // await expect(page.locator('table')).not.toContainText(/aiwdoakdoawkdokawd/i);
    
        // Melakukan pencarian ketiga
        await searchBox.fill('test');
        await searchBox.press('Enter');
    
        await page.waitForTimeout(2000);
        await expect(page.locator('table')).toContainText(/test/i);
    });

    test('Cetak(download) (TC003)', async ({ browser }) => {
        test.setTimeout(60000);
    
        // Atur folder download
        const downloadPath = 'D:/PlayWright/Testing-Website-Masook/downloads & upload/';
        const context = await browser.newContext({ acceptDownloads: true });
        const page = await context.newPage();
    
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Laporan' }).click();
        await page.getByRole('link', { name: 'Rekap Laporan Bulanan' }).click();
    
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/laporan/bulanan');
    
        // Tunggu event download
        const downloadPromise = page.waitForEvent('download');
        await page.getByRole('button', { name: 'Cetak' }).click();
        const download = await downloadPromise;
    
        // Simpan file ke lokasi yang diinginkan
        await download.saveAs(`${downloadPath}/${download.suggestedFilename()}`);
    
        // Tutup browse
    });
    

    test('Filter Data (TC004)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Laporan' }).click();
        await page.getByRole('link', { name: 'Rekap Laporan Bulanan' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/laporan/bulanan');
    
       await page.locator('#toggleSelectDate').click();
       await page.getByRole('textbox', { name: 'Grup' }).click();
       await page.getByRole('option', { name: 'Semua Grup' }).click();
       await page.getByRole('button', { name: 'Terapkan' }).click();
       await page.locator('#toggleSelectDate').click();
       await page.locator('#filterGrup').click();
       await page.getByRole('option', { name: 'Staff DIP' }).click();
       await page.getByRole('button', { name: 'Terapkan' }).click();
       await page.locator('#toggleSelectDate').click();
       await page.locator('div:nth-child(2) > .pa-1 > .v-input > .v-input__control > .v-input__slot > .v-select__slot').click();
       await page.getByRole('option', { name: 'Supervisor DIP' }).click();
       await page.getByRole('button', { name: 'Terapkan' }).click();
       await page.locator('#toggleSelectDate').click();
       await page.locator('#filterGrup').click();
       await page.getByRole('option', { name: 'testing grup', exact: true }).click();
       await page.getByRole('button', { name: 'Terapkan' }).click();
       await page.locator('#toggleSelectDate').click();
       await page.locator('#filterGrup').click();
       await page.getByRole('option', { name: 'Semua Grup' }).click();
       await page.getByRole('button', { name: 'Terapkan' }).click();
       await page.locator('#toggleSelectDate').click();
       await page.getByRole('button', { name: 'Status', exact: true }).click();
       await page.getByRole('option', { name: 'Aktif', exact: true }).locator('div').first().click();
       await page.getByRole('button', { name: 'Terapkan' }).click();
       await page.getByRole('button', { name: 'Goto Page 2' }).click();
       await page.locator('#toggleSelectDate').click();
       await page.getByRole('button', { name: 'Aktif clear icon' }).click();
       await page.getByRole('option', { name: 'Tidak Aktif' }).click();
       await page.getByRole('button', { name: 'Terapkan' }).click();
       await page.locator('#toggleSelectDate').click();
       await page.getByRole('button', { name: 'Tidak Aktif clear icon' }).getByLabel('clear icon').click();
       await page.getByRole('button', { name: 'Status Pengguna' }).click();
       await page.getByRole('option', { name: 'Aktif', exact: true }).click();
       await page.getByRole('button', { name: 'Terapkan' }).click();

       await page.locator('#toggleSelectDate').click();
       await page.getByRole('button', { name: 'Aktif clear icon' }).click();
       await page.getByRole('option', { name: 'Tidak Aktif' }).click();
       await page.getByRole('button', { name: 'Terapkan' }).click();
    });
    

})

test.describe('Menu (TC002)', () => {
    test('Menu (TC002)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Laporan' }).click();
        await page.getByRole('link', { name: 'Rekap Laporan Bulanan' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/laporan/bulanan');
    
        
        
        await page.getByRole('button', { name: 'Testing' }).click();
        await page.locator('div').filter({ hasText: /^Hapus Data$/ }).click();

        await page.locator('.text--center').first().click();
        await page.getByRole('button', { name: 'Ubah Status Presensi' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByText('Presensi berhasil di ubahTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('cell', { name: 'KLAIM' }).click();
        await page.getByRole('button', { name: 'Batal Klaim' }).click();
        await page.getByRole('button', { name: 'Ya' }).click();
        await page.getByText('Proses batal klaim Presensi berhasilTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.locator('td:nth-child(3)').first().click();
        await page.locator('form').filter({ hasText: 'AnggotaTanggal PresensiSkor' }).getByRole('button').first().click();
        await page.getByRole('option', { name: 'Skor 2 (31-60)' }).click();
        await page.locator('form').filter({ hasText: 'AnggotaTanggal PresensiSkor' }).getByRole('button').nth(2).click();
        await page.locator('#list-item-1227-1').getByText('Skor 3 (61-90)').click();
       
        // await page.locator('.v-text-field__slot').nth(0).click();
        await page.locator('.v-input__control> .v-input__slot> .v-text-field__slot> textarea').fill('testing');

        
        
        await page.getByRole('button', { name: 'Ubah Status Presensi' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByText('Presensi berhasil di ubahTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('cell', { name: 'KLAIM' }).click();
        
        
        await page.locator('span').filter({ hasText: 'KLAIM' }).first().click();
        await page.locator('body').press('ArrowUp')
        await page.getByRole('button', { name: 'Batal Klaim' }).click();
        await page.getByRole('button', { name: 'Ya' }).click();
        await page.getByText('Proses batal klaim Presensi berhasilTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.locator('body').press('ArrowUp');
    });
})

