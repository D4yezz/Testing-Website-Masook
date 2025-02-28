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

})
