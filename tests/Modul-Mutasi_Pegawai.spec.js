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
        await page.getByRole('link', { name: 'Mutasi' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/mutasi');
    
        await page.locator('#toggleSearch').click();
        await page.getByRole('textbox', { name: 'Cari Pegawai' }).click();
        
        // Cari "sugeng"
        await page.locator('#caridata').fill('sugeng');
        await page.getByRole('button', { name: 'append icon' }).click();
        await expect(page.getByText('sugeng')).toBeVisible();
    
        // Cari "tatang"
        await page.locator('#caridata').fill('tatang');
        await page.getByRole('button', { name: 'append icon' }).click();
        await expect(page.getByText('tatang')).toBeVisible();
    });

    //ini masih erorrrr
    test('Tambah Data (TC002)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Anggota' }).click();
        await page.getByRole('link', { name: 'Mutasi' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/mutasi');
    
        await page.locator('#add').click();
        await page.getByRole('textbox', { name: 'Pilih Nama / NIP' }).click();
        await page.getByRole('option', { name: 'Operator Masook Indonesia' }).click();
        await page.getByRole('textbox', { name: 'Pilih Organisasi' }).click();
        await page.getByRole('option', { name: 'test' }).locator('div').first().click();
        await page.getByRole('textbox', { name: 'Tanggal Mutasi*' }).click();
        await page.getByRole('button', { name: '24' }).click();
        await page.getByRole('textbox', { name: 'Tanggal Mulai*' }).click();
        await page.getByRole('button', { name: '23' }).nth(1).click();
        await page.getByText('Pilih file dengan format (.').click();
        await page.getByPlaceholder('Pilih file dengan format (.').setInputFiles('D:/PlayWright/Testing-Website-Masook/downloads & upload/1. PENGENALAN C# (1).pdf');
        await page.getByRole('textbox', { name: 'Tuliskan Keterangan Mutasi' }).click();
        await page.locator('[data-vv-name="keterangan"]').fill('testing');
        await page.getByRole('button', { name: 'Lanjut' }).click();
        // const page3Promise = page.waitForEvent('popup');
        // await page.getByRole('button', { name: 'Lihat Dokumen' }).click();
        // const page3 = await page3Promise;
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Ajukan' }).click();
        // await page3.close(); // Menutup tab dokumen setelah melihatnya
        await page.getByText('Mutasi berhasil ditambahkanTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
    });
    
    test('Refresh (TC003)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Anggota' }).click();
        await page.getByRole('link', { name: 'Mutasi' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/mutasi');
        await page.locator('#refresh').click();
    
        // Tunggu 2 detik untuk memastikan loading terlihat
        await page.waitForSelector('.v-overlay__content .v-progress-circular', { state: 'hidden' });
           
           
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/mutasi');

    });



    
    

})

test.describe('Menu (TC002)', () => {
    test('Periksa (TC001)', async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Anggota' }).click();
        await page.getByRole('link', { name: 'Mutasi' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/mutasi');
        
        await page.getByRole('row', { name: 'avatar Alip test - Jayantara' }).getByRole('button').click();
        const page3Promise = page.waitForEvent('popup');
        await page.getByRole('button', { name: 'Lihat Dokumen' }).click();
        const page3 = await page3Promise;
        await page.getByRole('banner').getByRole('button').click();
    });

    test('Batal Ajuan (TC002)', async ({ page }) => {
        // ganti setiap test

        test.setTimeout(60000);
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Anggota' }).click();
        await page.getByRole('link', { name: 'Mutasi' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/mutasi');
        
        await page.getByRole('row', { name: 'avatar Operator Masook Indonesia - Jayantara Indonesia test • Keluar Ajuan' }).getByRole('button').click();
        await expect(page.getByRole('row', { name: 'avatar Operator Masook Indonesia - Jayantara Indonesia test • Keluar Ajuan' }).getByRole('button')).toBeVisible();
        await page.getByRole('button', { name: 'Batal Ajuan' }).click();
        await page.getByRole('button', { name: 'Ya' }).click();
        
        
    });

})

