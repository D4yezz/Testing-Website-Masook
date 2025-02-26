import { test, expect } from "@playwright/test";

    test.describe('Toggle (TC001)', () => {

        test('Cari Data (TC001)', async ({ page }) => {
            test.setTimeout(60000);
            await page.goto('https://sim.dev.masook.id/#/login');
            await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
            await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
            await page.getByRole('button', { name: 'Masuk' }).click();
            await page.getByText('Jayantara Indonesia').click();
            await page.getByRole('button', { name: 'Ketidakhadiran' }).click();
            await page.getByRole('link', { name: 'Ajuan' }).click();
            await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/cuti');
        
            
            await page.locator('#toggleSearch').click();
            await page.getByRole('textbox', { name: 'Cari Ajuan' }).click();
            await page.locator('#caridata').fill('alip');
            await page.getByRole('button', { name: 'append icon' }).click();
            await page.getByRole('button', { name: 'clear icon' }).click();
            await page.locator('#caridata').click();
            await page.locator('#caridata').fill('taufik');
            await page.locator('#caridata').press('Enter');
            await page.getByRole('button', { name: 'clear icon' }).click();
            await page.locator('#caridata').fill('kukuh');
            await page.locator('#caridata').press('Enter');
            await page.getByRole('listitem').filter({ hasText: '2' }).click();
            await page.getByRole('button', { name: 'clear icon' }).click();
            await page.getByRole('button', { name: 'Goto Page 1' }).click();
        });

        test('Filter Data (TC002)', async ({ page }) => {
            test.setTimeout(60000);
            await page.goto('https://sim.dev.masook.id/#/login');
            await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
            await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
            await page.getByRole('button', { name: 'Masuk' }).click();
            await page.getByText('Jayantara Indonesia').click();
            await page.getByRole('button', { name: 'Ketidakhadiran' }).click();
            await page.getByRole('link', { name: 'Ajuan' }).click();
            await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/cuti');
        
            
            
            await page.locator('#toggleSelectDate').click();
            await page.getByRole('textbox', { name: 'Anggota' }).click();
            await page.getByRole('option', { name: 'Semua Anggota' }).click();
            await page.getByRole('button', { name: 'Status Ajuan' }).click();
            await page.getByRole('option', { name: 'Menunggu' }).locator('div').first().click();
            await page.getByRole('button', { name: 'Terapkan' }).click();
            await page.locator('#toggleSelectDate').click();
            await page.getByRole('button', { name: 'Menunggu clear icon' }).click();
            await page.getByRole('option', { name: 'Disetujui' }).click();
            await page.getByRole('button', { name: 'Terapkan' }).click();
            await page.locator('#toggleSelectDate').click();
            await page.getByRole('button', { name: 'Disetujui clear icon' }).click();
            await page.getByRole('option', { name: 'Ditolak' }).click();
            await page.getByRole('button', { name: 'Terapkan' }).click();
            await page.locator('#toggleSelectDate').click();
            await page.getByRole('button', { name: 'Ditolak clear icon' }).click();
            await page.getByRole('option', { name: 'Dibatalkan' }).click();
            await page.getByRole('button', { name: 'Terapkan' }).click();
        });
    });

