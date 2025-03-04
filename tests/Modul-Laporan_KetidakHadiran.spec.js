import { test, expect } from "@playwright/test";
import { describe } from "node:test";

test.describe('Toggle (TC001)', () => {
    test('Kalkulasi (TC001)', async ({ browser }) => {
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
        await page.getByRole('link', { name: 'Laporan Ketidakhadiran' }).click();
    
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/laporan/cuti');

        await page.getByRole('button', { name: 'Kalkulasi' }).click();
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowUp');
        await page.locator('body').press('ArrowUp');
        await page.locator('body').press('ArrowUp');
        await page.locator('body').press('ArrowUp');
        await page.locator('body').press('ArrowUp');
        await page.locator('body').press('ArrowUp');
        await page.locator('body').press('ArrowUp');
        await page.getByRole('button', { name: 'Kalkulasi' }).click();
        await page.getByRole('button', { name: 'Kalkulasi' }).click();
        await page.getByRole('button', { name: 'Kalkulasi' }).click();
    });

    test('Filter Data (TC002)', async ({ browser }) => {
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
        await page.getByRole('link', { name: 'Laporan Ketidakhadiran' }).click();
    
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/laporan/cuti');
    
        // Filter berdasarkan anggota "Adi Pratamaaaaa"
        await page.locator('#toggleSelectDate').click();
        await page.getByRole('textbox', { name: 'Anggota' }).click();
        await page.getByRole('option', { name: 'Adi Pratamaaaaa' }).locator('div').first().click();
        await page.getByRole('button', { name: 'Terapkan' }).click();
    
        // Verifikasi bahwa filter diterapkan dengan benar
        await expect(page.locator('selector-yang-menampilkan-nama')).toHaveText('Adi Pratamaaaaa');
    
        // Filter berdasarkan anggota "Alip test"
        await page.locator('#toggleSelectDate').click();
        await page.locator('div').filter({ hasText: /^Anggota$/ }).click();
        await page.getByRole('option', { name: 'Alip test' }).click();
        await page.getByRole('button', { name: 'Terapkan' }).click();
    
        // Verifikasi bahwa filter diterapkan dengan benar
        await expect(page.locator('selector-yang-menampilkan-nama')).toHaveText('Alip test');
    
        // Filter kembali ke "Semua Anggota"
        await page.locator('#toggleSelectDate').click();
        await page.getByRole('textbox', { name: 'Anggota' }).click();
        await page.getByRole('option', { name: 'Semua Anggota' }).click();
    
        // Filter berdasarkan Waktu
        await page.getByRole('button', { name: 'Waktu' }).click();
        await page.locator('div').filter({ hasText: /^Testing$/ }).click();
    
        // Filter berdasarkan Status Pengguna "Aktif"
        await page.getByRole('button', { name: 'Status Pengguna' }).click();
        await page.getByRole('option', { name: 'Aktif', exact: true }).click();
        await page.getByRole('button', { name: 'Terapkan' }).click();
    
        // Verifikasi bahwa filter diterapkan dengan benar
        await expect(page.locator('selector-yang-menampilkan-status')).toHaveText('Aktif');
    
        // Filter berdasarkan Status Pengguna "Tidak Aktif"
        await page.locator('#toggleSelectDate').click();
        await page.getByRole('button', { name: 'Aktif clear icon' }).click();
        await page.getByRole('option', { name: 'Tidak Aktif' }).click();
        await page.getByRole('button', { name: 'Terapkan' }).click();
    
        // Verifikasi bahwa filter diterapkan dengan benar
        await expect(page.locator('selector-yang-menampilkan-status')).toHaveText('Tidak Aktif');
    });

    test('Unduh Data (TC003)', async ({ browser }) => {
        test.setTimeout(60000);
    
        // Atur folder download
        const downloadPath = 'D:/PlayWright/Testing-Website-Masook/downloads & upload/';
        const context = await browser.newContext({
            acceptDownloads: true
        });
    
        const page = await context.newPage();
    
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Laporan' }).click();
        await page.getByRole('link', { name: 'Laporan Ketidakhadiran' }).click();
    
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/laporan/cuti');
    
        // Tunggu event download
        const [download] = await Promise.all([
            page.waitForEvent('download'), // Tunggu hingga proses download dimulai
            page.locator('#btnDownload').click() // Klik tombol download
        ]);
    
        // Simpan file ke direktori yang diinginkan
        const filePath = `${downloadPath}${download.suggestedFilename()}`;
        await download.saveAs(filePath);
    
        console.log(`File berhasil diunduh ke: ${filePath}`);
    });

    test('Refresh (TC003)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Laporan' }).click();
        await page.getByRole('link', { name: 'Laporan Ketidakhadiran' }).click();
    
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/laporan/cuti');
        await page.locator('#refresh').click();

         // Tunggu 2 detik untuk memastikan loading terlihat
         await page.waitForSelector('.v-overlay__content .v-progress-circular', { state: 'hidden' });
       
       
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/laporan/cuti');
        
    });
    
    
    
})

test.describe('Menu (TC002)', () => {
    test('Pratinjau (TC003)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Laporan' }).click();
        await page.getByRole('link', { name: 'Laporan Ketidakhadiran' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/laporan/cuti');

        
        await page.getByRole('row', { name: 'Choirul Fadholanii 0 30 Periksa', exact: true }).getByRole('button').click();
        await page.getByRole('button', { name: 'Batal' }).click();
        await page.getByRole('row', { name: 'Operator Masook Indonesia 0' }).getByRole('button').click();
        await page.getByRole('button', { name: 'Batal' }).click();
        await page.getByRole('row', { name: 'Rakhmat Farunuddin 0 30' }).getByRole('button').click();
        await page.getByRole('button', { name: 'Batal' }).click();
    });
})

