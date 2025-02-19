import { test, expect } from "@playwright/test";

const path = require('path');

test("Unduh (TC001)", async ({ page }) => {
    // Navigasi dan login
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/pilihOrganisasi');
  
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('button', { name: 'Kelola Instansi' }).click();
    await page.getByRole('link', { name: 'Pola Kerja' }).click();

    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Unduh Template' }).click();
    const download = await downloadPromise;

    // Gunakan path absolut
    const savePath = path.resolve(__dirname, 'downloads', 'unduhan_template.xlsx');
    await download.saveAs(savePath);
});

test("Bulan-Dropdown (TC002)", async ({ page }) => {
    // Navigasi dan login
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/pilihOrganisasi');

    // Navigasi ke halaman Pola Kerja
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('button', { name: 'Kelola Instansi' }).click();
    await page.getByRole('link', { name: 'Pola Kerja' }).click();

    // Pilih Januari
    await page.getByRole('button', { name: 'Februari' }).click();
    await page.getByRole('option', { name: 'Januari' }).click();
    
    // Pilih Februari
    await page.getByRole('button', { name: 'Januari' }).click();
    await page.getByRole('option', { name: 'Februari' }).click();
    
    // Pilih Maret
    await page.getByRole('button', { name: 'Februari' }).click();
    await page.getByRole('option', { name: 'Maret' }).click();
    
    // Pilih April
    await page.getByRole('button', { name: 'Maret' }).click();
    await page.getByRole('option', { name: 'April' }).click();
    
    // Pilih Mei
    await page.getByRole('button', { name: 'April' }).click();
    await page.getByRole('option', { name: 'Mei' }).click();
    
    // Pilih Juni
    await page.getByRole('button', { name: 'Mei' }).click();
    await page.getByRole('option', { name: 'Juni' }).click();
    
    // Pilih Juli
    await page.getByRole('button', { name: 'Juni' }).click();
    await page.getByRole('option', { name: 'Juli' }).click();
    
    // Pilih Agustus
    await page.getByRole('button', { name: 'Juli' }).click();
    await page.getByRole('option', { name: 'Agustus' }).click();
    
    // Pilih September
    await page.getByRole('button', { name: 'Agustus' }).click();
    await page.getByRole('option', { name: 'September' }).click();
    
    // Pilih Oktober
    await page.getByRole('button', { name: 'September' }).click();
    await page.getByRole('option', { name: 'Oktober' }).click();
    
    // Pilih November
    await page.getByRole('button', { name: 'Oktober' }).click();
    await page.getByRole('option', { name: 'November' }).click();
    
    // Pilih Desember
    await page.getByRole('button', { name: 'November' }).click();
    await page.getByRole('option', { name: 'Desember' }).click();
});

test("Unggah (TC003)", async ({ page }) => {
    // Navigasi dan login
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/pilihOrganisasi');
  
    await page.getByText('Jayantara Indonesia').click();
    await page.getByRole('button', { name: 'Kelola Instansi' }).click();
    await page.getByRole('link', { name: 'Pola Kerja' }).click();

    //dilanjutkan kamis

});

test("Search (TC004)", async ({ page }) => {
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
    await page.getByRole('link', { name: 'Pola Kerja' }).click();

    // Klik tombol pencarian
    await page.locator('form header').getByRole('button').filter({ hasText: /^$/ }).click();

    // Isi input pencarian (gunakan selector langsung ke elemen input)
    const searchInput = page.locator('.v-input__control input'); // Selector langsung ke input
    await searchInput.waitFor({ state: 'visible' }); // Tunggu hingga input terlihat
    await searchInput.fill('tes');

    // Klik tombol "append icon" setelah pengisian
    await page.getByRole('button', { name: 'append icon' }).click();

    // Masukkan data pencarian tambahan
    await searchInput.fill('dias');
    await page.getByRole('button', { name: 'append icon' }).click();

    await searchInput.fill('alip');
    await page.getByRole('button', { name: 'append icon' }).click();

    // Klik tombol "clear icon" untuk menghapus pencarian
    await page.getByRole('button', { name: 'clear icon' }).click();

    // Klik kembali tombol "append icon"
    await page.getByRole('button', { name: 'append icon' }).click();
});

test.describe('Ubah Data (TC005)', () => {
    test("Ubah Data Hari Wekeend (TC001)", async ({ page }) => {
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
        await page.getByRole('link', { name: 'Pola Kerja' }).click();
    
        await page.locator('td:nth-child(2)').first().click();
        await page.getByRole('button', { name: 'Libur' }).click();
        await page.getByRole('option', { name: 'Reguler Work' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('button', { name: 'Reguler Work' }).click();
        await page.getByRole('option', { name: 'JAM KHUSUS SETENGAH HARI' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
    
        await page.getByRole('button', { name: 'JAM KHUSUS SETENGAH HARI' }).click();
        await page.getByRole('option', { name: 'SHIFT PAGI' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('button', { name: 'SHIFT PAGI' }).click();
        await page.getByRole('option', { name: 'SHIFT SIANG' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'SHIFT SIANG' }).click();
        await page.getByRole('option', { name: 'SHIFT MALAM' }).locator('div').first().click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByText('Pola kerja berhasil diperbaruiTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        
        await page.getByRole('cell', { name: 'SHIFT MALAM' }).click();
        await page.getByRole('button', { name: 'SHIFT MALAM' }).click();
        await page.getByRole('option', { name: 'REGULER 6HK' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('button', { name: 'REGULER 6HK' }).click();
        await page.getByRole('option', { name: 'Jam 3 -' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('button', { name: 'Jam 3 -' }).click();
        await page.getByRole('option', { name: 'Jam IOS' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('button', { name: 'Jam IOS' }).click();
        await page.getByRole('option', { name: 'jam 4x istirahat' }).locator('div').first().click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByText('Pola kerja berhasil diperbaruiTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('cell', { name: 'jam 4x istirahat' }).click();
        await page.getByRole('button', { name: 'jam 4x istirahat' }).click();
        await page.getByRole('option', { name: 'jam 3x awal istirahat' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('button', { name: 'jam 3x awal istirahat' }).click();
        await page.getByRole('option', { name: 'Jadwal Ramadhan', exact: true }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Jadwal Ramadhan' }).click();
        await page.getByRole('option', { name: 'Jadwal Ramadhan Jumat' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('button', { name: 'Jadwal Ramadhan Jumat' }).click();
        await page.getByRole('option', { name: 'ds' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'ds' }).click();
        await page.getByRole('option', { name: 'Jadwal Khusus Hilmi@Jayantara' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Jadwal Khusus Hilmi@Jayantara' }).click();
        await page.getByRole('option', { name: 'Tesqiuémique' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('button', { name: 'Tesqiuémique' }).click();
        await page.getByRole('option', { name: 'jam kerja 5 hari' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByText('Pola kerja berhasil diperbaruiTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('cell', { name: 'jam kerja 5 hari' }).first().click();
        await page.getByRole('button', { name: 'jam kerja 5 hari' }).click();
        await page.getByRole('option', { name: 'testt' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('button', { name: 'testt' }).click();
        await page.getByRole('option', { name: 'Libur' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByText('Pola kerja berhasil diperbaruiTutup').click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        
    });
    
    
    
    test("Ubah Data Hari Biasa (TC002)", async ({ page }) => {
        test.setTimeout(60000); // Timeout 2 menit
    
        // Navigasi dan login
        await page.goto('https://sim.dev.masook.id/#/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
        await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
        await page.getByRole('button', { name: 'Masuk' }).click();
        await expect(page).toHaveURL('https://sim.dev.masook.id/#/pilihOrganisasi');
      
        // Pilih organisasi dan buka Pola Kerja
        await page.getByText('Jayantara Indonesia').click();
        await page.getByRole('button', { name: 'Kelola Instansi' }).click();
        await page.getByRole('link', { name: 'Pola Kerja' }).click();
    
        await page.locator('td:nth-child(4)').first().click();
        await page.getByRole('button', { name: 'Libur' }).click();
        await page.getByRole('option', { name: 'Reguler Work' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('cell', { name: 'Reguler Work' }).click();
        await page.getByRole('button', { name: 'Reguler Work' }).click();
        await page.getByRole('option', { name: 'JAM KHUSUS SETENGAH HARI' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('cell', { name: 'JAM KHUSUS SETENGAH HARI' }).click();
        await page.getByRole('button', { name: 'JAM KHUSUS SETENGAH HARI' }).click();
        await page.getByRole('option', { name: 'SHIFT PAGI' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('button', { name: 'SHIFT PAGI' }).click();
        await page.getByRole('option', { name: 'SHIFT SIANG' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('cell', { name: 'SHIFT SIANG' }).click();
        await page.getByRole('button', { name: 'SHIFT SIANG' }).click();
        await page.getByRole('option', { name: 'SHIFT MALAM' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('cell', { name: 'SHIFT MALAM' }).click();
        await page.getByRole('button', { name: 'SHIFT MALAM' }).click();
        await page.getByRole('option', { name: 'REGULER 6HK' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('button', { name: 'REGULER 6HK' }).click();
        await page.getByRole('option', { name: 'Jam 3 -' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('cell', { name: 'Jam 3 -' }).locator('div').click();
        await page.getByRole('button', { name: 'Jam 3 -' }).click();
        await page.getByRole('option', { name: 'Jam IOS' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('cell', { name: 'Jam IOS' }).click();
        await page.getByRole('button', { name: 'Jam IOS' }).click();
        await page.getByRole('option', { name: 'jam 4x istirahat' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('cell', { name: 'jam 4x istirahat' }).click();
        await page.getByRole('button', { name: 'jam 4x istirahat' }).click();
        await page.getByRole('option', { name: 'jam 3x awal istirahat' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('cell', { name: 'jam 3x awal istirahat' }).click();
        await page.getByRole('button', { name: 'jam 3x awal istirahat' }).click();
        await page.getByRole('option', { name: 'Jadwal Ramadhan', exact: true }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('cell', { name: 'Jadwal Ramadhan' }).click();
        await page.getByRole('button', { name: 'Jadwal Ramadhan' }).click();
        await page.getByRole('option', { name: 'Jadwal Ramadhan Jumat' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('button', { name: 'Jadwal Ramadhan Jumat' }).click();
        
        await page.getByRole('option', { name: 'ds' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('cell', { name: 'ds' }).click();
        await page.getByRole('button', { name: 'ds' }).click();
        await page.getByRole('option', { name: 'Jadwal Khusus Hilmi@Jayantara' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('cell', { name: 'Jadwal Khusus Hilmi@Jayantara' }).click();
        await page.getByRole('button', { name: 'Jadwal Khusus Hilmi@Jayantara' }).click();
        await page.getByRole('option', { name: 'Tesqiuémique' }).locator('div').first().click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('button', { name: 'Tesqiuémique' }).click();
        await page.getByRole('option', { name: 'jam kerja 5 hari' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('cell', { name: 'jam kerja 5 hari' }).click();
        await page.getByRole('button', { name: 'jam kerja 5 hari' }).click();
        await page.getByRole('option', { name: 'testt' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('button', { name: 'testt' }).click();
        await page.getByRole('option', { name: 'testing jadwal' }).click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('cell', { name: 'testing jadwal' }).click();
        await page.getByRole('button', { name: 'testing jadwal' }).click();
        await page.getByRole('option', { name: 'Libur' }).click();
        await page.locator('.v-input--selection-controls__ripple').click();
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        
    });
})

test.describe('Halaman (TC006)', () => {
    test("Button (TC001)", async ({ page }) => {
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
        await page.getByRole('link', { name: 'Pola Kerja' }).click();
    
        // Loop dari halaman 1 hingga halaman 10
        for (let i = 2; i <= 10; i++) {
            // Klik nomor halaman yang sesuai
            await page.getByRole('listitem').filter({ hasText: `${i}` }).click();
        }
    });

    test("Arrow (TC002)", async ({ page }) => {
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
        await page.getByRole('link', { name: 'Pola Kerja' }).click();
    
        // Loop untuk klik tombol "Next page" sebanyak 9 kali
        for (let i = 0; i < 9; i++) {
            await page.getByRole('button', { name: 'Next page' }).click();
    
        }
    });
    
});










