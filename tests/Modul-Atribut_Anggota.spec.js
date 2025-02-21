import { test, expect } from "@playwright/test";

test.describe('Toggle (TC001)', () => {
    test('Search (TC001)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Anggota' }).click();
        await page.getByRole('link', { name: 'Atribut Anggota' }).click();
        await page.locator('#toggleSearch').click();
        await page.getByRole('textbox', { name: 'Cari Atribut Anggota' }).click();
        await page.locator('#caridata').fill('status');
        await page.getByRole('button', { name: 'append icon' }).click();
        await expect(page.getByRole('cell', { name: 'STATUS' })).toBeVisible();
        await page.getByRole('button', { name: 'clear icon' }).click();
        await page.locator('#caridata').fill('umur');
        await page.getByRole('cell', { name: 'Umur' }).click();
        await expect(page.getByRole('cell', { name: 'STATUS' })).toBeVisible();
        await page.getByRole('button', { name: 'clear icon' }).click();
        await page.locator('#caridata').fill('test');
        await page.getByRole('button', { name: 'append icon' }).click();
        await expect(page.getByRole('cell', { name: 'Label Test 2024🤫🧏‍♂️' })).toBeVisible;
        await page.getByRole('button', { name: 'clear icon' }).click();
        
      });

      test('Tambah Data (TC002)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Anggota' }).click();
        await page.getByRole('link', { name: 'Atribut Anggota' }).click();
    
        // Menambah data dengan menggunakan data-vv-as
        await page.locator('#add').click();
        await page.locator('[data-vv-as="Label Atribut"]').click();
        await page.locator('[data-vv-as="Label Atribut"]').fill('TEST TEKS');
        await page.locator('[data-vv-as="Label Atribut"]').press('CapsLock');
        await page.getByRole('button', { name: 'Tipe' }).click();
        await page.getByRole('option', { name: 'Teks' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.locator('[data-vv-as="Isian Umum"]').click();
        await page.locator('[data-vv-as="Isian Umum"]').fill('aokwdnoiwndoianoidnaoifnoaeifnoaebfoianfoiabufbaeuibfiabfiabefuibeifbeiufbeiubfeiubfueibfieubfuebfieubfieubfiuebfiuebfuiebfueb');
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByText('Simpan Data BerhasilTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
    
        await page.locator('#add').click();
        await page.locator('[data-vv-as="Label Atribut"]').press('CapsLock');
        await page.locator('[data-vv-as="Label Atribut"]').fill('TEST ANGKA');
        await page.getByRole('button', { name: 'Tipe' }).click();
        await page.getByRole('option', { name: 'Angka' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.locator('[data-vv-as="Isian Umum"]').click();
        await page.locator('[data-vv-as="Isian Umum"]').fill('739182739812739816239816293861983619823698126398126398126361293612986312986389126398126398126398126398126398216');
        await page.locator('[data-vv-as="Isian Umum"]').press('Enter');
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByText('Simpan Data BerhasilTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
    
        await page.locator('#add').click();
        await page.locator('[data-vv-as="Label Atribut"]').press('CapsLock');
        await page.locator('[data-vv-as="Label Atribut"]').fill('TEST PILIHAN');
        await page.getByRole('button', { name: 'Tipe' }).click();
        await page.getByRole('option', { name: 'Pilihan' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.locator('[data-vv-as="default_value"]').nth(0).click();
        await page.locator('[data-vv-as="default_value"]').nth(0).fill('ASDNOIAWNDONAWODNAWOIDNAWOIND');
        await page.locator('form').getByRole('button').nth(2).click();
        await page.locator('[data-vv-as="default_value"]').nth(1).click();
        await page.locator('[data-vv-as="default_value"]').nth(1).fill('NGAWUR');
        await page.locator('form').getByRole('button').nth(3).click();
        await page.locator('[data-vv-as="default_value"]').nth(2).click();
        await page.locator('[data-vv-as="default_value"]').nth(2).fill('123213131');
        await page.locator('form').getByRole('button').nth(4).click();
        await page.locator('[data-vv-as="default_value"]').nth(3).click();
        await page.locator('[data-vv-as="default_value"]').nth(3).fill('ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ');
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByText('Simpan Data BerhasilTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
    
        // Hapus data yang sudah ditambahkan
        await page.getByRole('row', { name: 'TEST TEKS' }).locator('#moreMenu').click();
        await page.getByRole('menuitem', { name: 'Hapus' }).click();
        await page.getByRole('button', { name: 'Ya' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
    
        await page.getByRole('row', { name: 'TEST ANGKA' }).locator('#moreMenu').click();
        await page.getByRole('menuitem', { name: 'Hapus' }).click();
        await page.getByRole('button', { name: 'Ya' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
    
        await page.getByRole('row', { name: 'TEST PILIHAN' }).locator('#moreMenu').click();
        await page.getByRole('menuitem', { name: 'Hapus' }).click();
        await page.getByRole('button', { name: 'Ya' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
    });
    
    
    
        
})

