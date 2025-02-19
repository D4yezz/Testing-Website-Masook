import { test, expect } from "@playwright/test";

test.describe('Toggle (TC001)', () => {
    test("Search (TC001)", async ({ page }) => {
        test.setTimeout(120000); // Timeout 2 menit
    
        // Navigasi dan login
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/pilihOrganisasi');
    
        // Pilih organisasi dan buka Pola Kerja
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Instansi' }).click();
        await page.getByRole('link', { name: 'Perangkat Instansi' }).click();
        await page.locator('#toggleSearch').click();
        await page.getByRole('textbox', { name: 'Cari Perangkat Instansi' }).click();
        await page.locator('#caridata').fill('xiaomi');
        await page.getByRole('button', { name: 'append icon' }).click();
        await page.waitForTimeout(2000);
        
        await page.locator('#caridata').click();
        await page.locator('#caridata').fill('samsung');
        await page.getByRole('button', { name: 'append icon' }).click();
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
        await page.getByRole('button', { name: 'Kelola Instansi' }).click();
        await page.getByRole('link', { name: 'Perangkat Instansi' }).click();
        // Klik tombol refresh
        await page.locator('#refresh').click();
      
        // Tunggu 2 detik untuk memastikan loading terlihat
        await page.waitForSelector('.v-overlay__content .v-progress-circular', { state: 'hidden' });
           
           
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/device');
      });
})

test.describe('Menu (TC002)', () => {
    test('Hapus (TC002)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Instansi' }).click();
        await page.getByRole('link', { name: 'Perangkat Instansi' }).click();
        
        await page.getByRole('listitem').filter({ hasText: '3' }).click();
        await page.getByRole('row', { name: 'Google-sdk_gphone64_x86_64' }).locator('#moreMenu').click();
        await page.getByRole('menuitem', { name: 'Hapus' }).click();
        await page.getByRole('button', { name: 'Ya' }).click();

      });

      test('Ubah(TC002)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Instansi' }).click();
        await page.getByRole('link', { name: 'Perangkat Instansi' }).click();
        await page.getByRole('row', { name: 'motorola-Moto G motorola-Moto' }).locator('#moreMenu').click();
        await page.getByRole('menuitem', { name: 'Ubah' }).click();
        await page.locator('[data-vv-name="nama"]').fill('motorola-Moto G ubah aowiejdowaindoiawndonwoidnawidan');
        await page.getByRole('spinbutton', { name: 'Latitude*' }).click();
        await page.locator('[data-vv-name="latitude"]').fill('12');
        await page.getByRole('spinbutton', { name: 'Longitude*' }).click();
        await page.locator('[data-vv-name="longitude"]').fill('-1111111112312313131231313123');
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('row', { name: 'motorola-Moto G ubah' }).locator('#moreMenu').click();
        await page.getByRole('menuitem', { name: 'Ubah' }).click();
        await page.locator('#input-376').click();
        await page.locator('[data-vv-name="longitude"]').fill('');
        await page.locator('#input-373').click();
        await page.locator('[data-vv-name="latitude"]').fill('');
        await page.locator('#input-370').click();
        await page.locator('[data-vv-name="nama"]').fill('motorola-Moto G');
        await page.getByRole('button', { name: 'Simpan' }).click();

        
      });
})
