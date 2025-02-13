import { test, expect } from "@playwright/test";

 test("Filter Data", async ({ page }) => {
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
    
   
 
   })