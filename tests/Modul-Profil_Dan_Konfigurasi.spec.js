import { test, expect } from "@playwright/test";

test("Ubah Profil", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto("https://sim.dev.masook.id/#/login");
    
    // Login
    await page.getByRole("textbox", { name: "Username" }).fill("operatorjmi@mail.com");
    await page.getByRole("textbox", { name: "Kata Sandi" }).fill("111111");
    await page.getByRole("button", { name: "Masuk" }).click();
    
    // Tunggu sampai halaman utama dimuat
    await page.waitForSelector(".logo", { state: "visible" });
    await page.locator("div:nth-child(2) > .ra-0 > .v-card__text > .container > .text-center > .logo").click();
    
    // Navigasi ke Profil
    await page.getByRole("link", { name: "Profil dan Konfigurasi" }).click();
    await page.waitForTimeout(2000);
    
    await page.getByRole("button", { name: "Lewati" }).click();
    await page.locator("#edit").click();
    
    // Edit profil
    await page.locator("#Surel").click();
    await page.locator("[id=\"Nomor\\ Telp\"]").click();
    await page.locator("#Faximile").click();
    await page.locator("#Alamat").click();
    await page.getByRole("button", { name: "Lanjut" }).click();
    
    // Tunggu sampai halaman informasi tambahan tersedia
    await page.waitForSelector("button:has-text('Informasi Tambahan')", { state: "visible" });
    await page.getByRole("button", { name: "Informasi Tambahan" }).click();
    
    // Tunggu sampai input muncul
    await page.getByRole('textbox', { name: 'Nama Atribut Organisasi' }).fill('Status Pendidikan');
    await page.getByRole('textbox', { name: 'Isi Atribut Organisasi' }).fill('Lulus');
    
    // Simpan perubahan
    await page.getByRole("button", { name: "Lanjut" }).click();
    await page.getByRole("button", { name: "Simpan" }).click();
    
    // Tunggu konfirmasi simpan muncul
    await page.waitForSelector("text=Simpan Data BerhasilTutup", { state: "visible" });
    await page.getByText("Simpan Data BerhasilTutup").click();
});
