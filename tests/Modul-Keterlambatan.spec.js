import { test, expect } from "@playwright/test";

test.describe('Toggle (TC001)', ()=>{
    test('Search (TC001)', async ({ page }) => {
        test.setTimeout(120000); // Timeout 2 menit
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Instansi' }).click();
        await page.getByRole('link', { name: 'Keterlambatan' }).click();
        await page.locator('#toggleSearch').click();
        await page.getByRole('textbox', { name: 'Cari Kategori Keterlambatan' }).click();
        await page.locator('#caridata').fill('tes');
        await page.getByRole('button', { name: 'append icon' }).click();
        
      
      });
    
      test('Add(TC002)', async ({ page }) => {
        test.setTimeout(120000); // Timeout 2 menit
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Instansi' }).click();
        await page.getByRole('link', { name: 'Keterlambatan' }).click();
        await page.locator('#add').click();
        await page.locator('div').filter({ hasText: /^Nama$/ }).click();
        await page.getByRole('textbox', { name: 'Nama kategori keterlambatan' }).fill('tes ngawur');
        await page.getByRole('textbox', { name: 'Persentase' }).click();
        await page.getByRole('textbox', { name: 'Persentase potongan' }).fill('12121212011293891823918391');
        await page.getByRole('button', { name: 'Satuan' }).click();
        await page.getByText('Menit', { exact: true }).click();
        await page.getByRole('textbox', { name: 'Batas Awal' }).click();
        await page.getByRole('textbox', { name: 'Batas Awal' }).fill('9210390219301930921');
        await page.getByRole('textbox', { name: 'Batas Akhir' }).click();
        await page.getByRole('textbox', { name: 'Batas Akhir' }).fill('219309120391293');
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByText('Batas bawah tidak boleh lebih besar dari Batas atasTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.locator('#add').click();
        await page.getByRole('textbox', { name: 'Nama' }).click();
        await page.getByRole('textbox', { name: 'Nama kategori keterlambatan' }).fill('tes benar');
        await page.getByRole('textbox', { name: 'Persentase' }).click();
        await page.getByRole('textbox', { name: 'Persentase potongan' }).fill('90');
        await page.getByRole('button', { name: 'Satuan' }).click();
        await page.getByRole('option', { name: 'Hari' }).locator('div').first().click();
        await page.getByRole('textbox', { name: 'Batas Awal' }).click();
        await page.getByRole('textbox', { name: 'Batas Awal' }).fill('1002');
        await page.getByRole('textbox', { name: 'Batas Akhir' }).click();
        await page.getByRole('textbox', { name: 'Batas Akhir' }).fill('200');
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByText('Batas bawah tidak boleh lebih besar dari Batas atasTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.locator('#add').click();
        await page.getByRole('textbox', { name: 'Nama' }).click();
        await page.getByRole('textbox', { name: 'Nama kategori keterlambatan' }).fill('test bisa');
        await page.getByRole('textbox', { name: 'Persentase' }).click();
        await page.getByRole('textbox', { name: 'Persentase potongan' }).fill('12');
        await page.getByRole('button', { name: 'Satuan' }).click();
        await page.getByRole('option', { name: 'Menit' }).locator('div').first().click();
        await page.getByRole('textbox', { name: 'Batas Awal' }).click();
        await page.getByRole('textbox', { name: 'Batas Awal' }).fill('12');
        await page.getByRole('textbox', { name: 'Batas Akhir' }).click();
        await page.getByRole('textbox', { name: 'Batas Akhir' }).fill('50');
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.locator('div:nth-child(15) > div:nth-child(2) > #moreMenu').click();
        await page.getByRole('menuitem', { name: 'Hapus' }).click();
        await page.getByRole('button', { name: 'Ya' }).click();
        await page.getByText('Data berhasil dihapusTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
       
        
      
      });
    
      
      test('Refresh (TC003)', async ({ page }) => {
        test.setTimeout(120000); // Timeout 2 menit
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Instansi' }).click();
        await page.getByRole('link', { name: 'Keterlambatan' }).click();
        // Klik tombol refresh
        await page.locator('#refresh').click();
      
        // Tunggu 2 detik untuk memastikan loading terlihat
        await page.waitForSelector('.v-overlay__content .v-progress-circular', { state: 'hidden' });
           
           
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/kategoriTerlambat');
      });
  
  })
 

  test.describe('Menu (TC002)', ()=>{
    test('Ubah (TC001)', async ({ page }) => {
        test.setTimeout(60000); // Timeout 2 menit
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Instansi' }).click();
        await page.getByRole('link', { name: 'Keterlambatan' }).click();
        await page.locator('div:nth-child(15) > div:nth-child(2) > #moreMenu').click();
        await page.getByRole('menuitem', { name: 'Ubah' }).click();
        await page.locator('div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click();
        await page.getByRole('textbox', { name: 'Persentase potongan' }).fill('1121');
        await page.getByRole('button', { name: 'Menit' }).click();
        await page.getByRole('option', { name: 'Hari' }).click();
        await page.locator('div:nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click();
        await page.getByRole('textbox', { name: 'Batas Awal' }).fill('123');
        await page.locator('div:nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click();
        await page.getByRole('textbox', { name: 'Batas Akhir' }).fill('241');
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.locator('div:nth-child(15) > div:nth-child(2) > #moreMenu').click();
        await page.getByRole('menuitem', { name: 'Ubah' }).click();
        await page.locator('div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click();
        await page.getByRole('textbox', { name: 'Persentase potongan' }).fill('112121312313');
        await page.getByRole('button', { name: 'Hari' }).click();
        await page.getByRole('option', { name: 'Menit' }).locator('div').first().click();
        await page.locator('div:nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click();
        await page.getByRole('textbox', { name: 'Batas Awal' }).fill('123131231231231');
        await page.locator('div:nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click();
        await page.getByRole('textbox', { name: 'Batas Akhir' }).fill('24132131231231');
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByText('Batas bawah tidak boleh lebih besar dari Batas atasTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.locator('div:nth-child(15) > div:nth-child(2) > #moreMenu').click();
        await page.getByRole('menuitem', { name: 'Ubah' }).click();
        await page.locator('div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click();
        await page.getByRole('textbox', { name: 'Persentase potongan' }).fill('11211231231313123');
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByText('Terdapat kesalahan pada sistem. Silakan coba lagi nanti.Tutup').click();
        await page.waitForTimeout(3000);
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.locator('div:nth-child(15) > div:nth-child(2) > #moreMenu').click();
        await page.getByRole('menuitem', { name: 'Ubah' }).click();
        await page.locator('div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click();
        await page.getByRole('textbox', { name: 'Persentase potongan' }).fill('1');
        await page.getByRole('button', { name: 'Hari' }).click();
        await page.getByRole('option', { name: 'Menit' }).click();
        await page.locator('div:nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click();
        await page.getByRole('textbox', { name: 'Batas Awal' }).fill('12');
        await page.locator('div:nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click();
        await page.getByRole('textbox', { name: 'Batas Akhir' }).fill('24');
        await page.getByRole('button', { name: 'Simpan' }).click();
      });

      test('Hapus (TC002)', async ({ page }) => {
        test.setTimeout(60000); // Timeout 2 menit
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Instansi' }).click();
        await page.getByRole('link', { name: 'Keterlambatan' }).click();
        await page.locator('#add').click();
        await page.getByRole('textbox', { name: 'Nama' }).click();
        await page.getByRole('textbox', { name: 'Nama kategori keterlambatan' }).fill('tes hapus');
        await page.getByRole('textbox', { name: 'Persentase' }).click();
        await page.getByRole('textbox', { name: 'Persentase potongan' }).fill('1');
        await page.getByRole('button', { name: 'Satuan' }).click();
        await page.getByRole('option', { name: 'Menit' }).click();
        await page.getByRole('textbox', { name: 'Batas Awal' }).click();
        await page.getByRole('textbox', { name: 'Batas Awal' }).fill('11');
        await page.getByRole('textbox', { name: 'Batas Akhir' }).click();
        await page.getByRole('textbox', { name: 'Batas Akhir' }).fill('13');
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.locator('div:nth-child(17) > div:nth-child(2) > #moreMenu').click();
        await page.getByRole('menuitem', { name: 'Hapus' }).click();
        await page.getByRole('button', { name: 'Ya' }).click();
        await page.getByText('Data berhasil dihapusTutup').click();
        await page.waitForTimeout(3000);
        await page.getByRole('button', { name: 'Tutup' }).click();
      });
  
  })