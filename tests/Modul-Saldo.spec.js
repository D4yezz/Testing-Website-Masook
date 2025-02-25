import { test, expect } from "@playwright/test";

test.describe('Toggle (TC001)', () => {
    test('Filter (TC001)', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('button', { name: 'Ketidakhadiran' }).click();
    await page.getByRole('link', { name: 'Saldo' }).click();
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/saldoCuti');

    // Filter: Semua Kategori Ketidakhadiran
    await page.locator('header').filter({ hasText: 'Kelola Saldo Cuti Unggah Data' }).getByRole('button').first().click();
    await page.getByRole('button', { name: 'Kategori Ketidakhadiran' }).click();
    await page.getByRole('option', { name: 'Semua Kategori Ketidakhadiran' }).click();
    await page.getByRole('button', { name: 'Terapkan' }).click();
    

    // Filter: Test kategori ketidakhadiran
    await page.locator('header').filter({ hasText: 'Kelola Saldo Cuti Unggah Data' }).getByRole('button').first().click();
    await page.getByRole('button', { name: 'Semua Kategori Ketidakhadiran' }).click();
    await page.getByRole('option', { name: 'Test kategori ketidakhadiran' }).click();
    await page.getByRole('button', { name: 'Terapkan' }).click();
    await expect(page.locator('table tbody tr').first()).toContainText('Test kategori ketidakhadiran');

    // Filter: Cuti Tahunan
    await page.locator('header').filter({ hasText: 'Kelola Saldo Cuti Unggah Data' }).getByRole('button').first().click();
    await page.getByRole('button', { name: 'Test kategori ketidakhadiran' }).click();
    await page.getByRole('option', { name: 'cuti tahunan', exact: true }).click();
    await page.getByRole('button', { name: 'Terapkan' }).click();
    await expect(page.locator('table tbody tr').first()).toContainText('cuti tahunan');

    // Filter: Cuti Tahunan 2025
    await page.locator('header').filter({ hasText: 'Kelola Saldo Cuti Unggah Data' }).getByRole('button').first().click();
    await page.getByRole('button', { name: 'cuti tahunan' }).click();
    await page.getByRole('option', { name: 'Cuti Tahunan 2025' }).click();
    await page.getByRole('button', { name: 'Terapkan' }).click();
    await expect(page.locator('table tbody tr').first()).toContainText('Cuti Tahunan 2025');

    // Filter: Cuti Tahunan 2024
    await page.locator('header').filter({ hasText: 'Kelola Saldo Cuti Unggah Data' }).getByRole('button').first().click();
    await page.getByRole('button', { name: 'Cuti Tahunan' }).click();
    await page.getByRole('option', { name: 'Cuti Tahunan 2024' }).click();
    await page.getByRole('button', { name: 'Terapkan' }).click();
    await expect(page.locator('table tbody tr').first()).toContainText('Data tidak tersedia');

    // Filter: Kemalasan
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
    await page.getByRole('button', { name: 'Cuti Tahunan' }).click();
    await page.getByRole('option', { name: 'Kemalasan' }).click();
    await page.getByRole('button', { name: 'Terapkan' }).click();
    await expect(page.locator('table tbody tr').first()).toContainText('Kemalasan');

    // Reset ke Semua Kategori Ketidakhadiran
    await page.locator('header').filter({ hasText: 'Kelola Saldo Cuti Unggah Data' }).getByRole('button').first().click();
    await page.getByRole('button', { name: 'Kemalasan' }).click();
    await page.getByRole('option', { name: 'Semua Kategori Ketidakhadiran' }).click();
    await page.getByRole('button', { name: 'Terapkan' }).click();
    
    });
    test('Cari Data (TC002)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Ketidakhadiran' }).click();
        await page.getByRole('link', { name: 'Saldo' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/saldoCuti');
    
        // Aktifkan fitur pencarian
        await page.locator('#toggleSearch').click();
    
        // Cari dengan kata kunci 'alip'
        await page.getByRole('textbox', { name: 'Cari Saldo Cuti' }).click();
        await page.locator('#caridata').fill('alip');
        await page.getByRole('button', { name: 'append icon' }).click();
        await expect(page.locator('table tbody tr').first()).toContainText('Alip'); // Pastikan hasil pertama mengandung 'alip'
    
        // Bersihkan pencarian
        await page.getByRole('button', { name: 'clear icon' }).click();
    
        // Cari dengan kata kunci 'operator'
        await page.locator('#caridata').fill('operator');
        await page.locator('#caridata').press('Enter');
        await expect(page.locator('table tbody tr').first()).toContainText('Operator'); // Pastikan hasil pertama mengandung 'operator'
    
        // Bersihkan pencarian
        await page.getByRole('button', { name: 'clear icon' }).click();
    });

    test('Proses Keterlambatan (TC003)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Ketidakhadiran' }).click();
        await page.getByRole('link', { name: 'Saldo' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/saldoCuti');
    
        // Proses keterlambatan
        await page.locator('#toggleGenerateCuti').click();
        await page.getByRole('textbox', { name: 'Anggota' }).click();
        await page.getByRole('option', { name: 'Alip test' }).click();
        await page.getByRole('button', { name: 'Kategori Ketidakhadiran' }).dblclick();
        await page.getByRole('option', { name: 'Test kategori ketidakhadiran' }).click();
        await page.getByRole('button', { name: 'Terapkan' }).click();
    
        // Expect "Alip test" sudah tidak ada di tabel
        await expect(page.locator('table')).not.toContainText('Alip test');
    });

    test('Refresh (TC004)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Ketidakhadiran' }).click();
        await page.getByRole('link', { name: 'Saldo' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/saldoCuti');
    
        await page.locator('#refresh').click();
    
        // Tunggu 2 detik untuk memastikan loading terlihat
        await page.waitForSelector('.v-overlay__content .v-progress-circular', { state: 'hidden' });
           
           
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/saldoCuti');
    });
    
    test('Unggah (TC005)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Ketidakhadiran' }).click();
        await page.getByRole('link', { name: 'Saldo' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/saldoCuti');
    
       
        await page.getByRole('button', { name: 'Unggah Data' }).click();
        await page.getByText('Pilih file dengan format (.').click();
        await page.getByPlaceholder('Pilih file dengan format (.').setInputFiles('Template-Unggah-Saldo-Cuti-jayantara_indonesia (1).xlsx');
        await page.getByRole('button', { name: 'Unggah', exact: true }).click();
        await page.getByText('Data Saldo Cuti berhasil di importTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
    });
    

});
