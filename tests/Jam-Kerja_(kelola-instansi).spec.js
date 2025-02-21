// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Toggle", () => {
  test("Cari Data (TC001)", async ({ page }) => {
    await page.goto("https://sim.dev.masook.id/");
    await page.waitForLoadState("load");
    await page
      .getByRole("textbox", { name: "Username" })
      .fill("operatorjmi@mail.com");
    await page.getByRole("textbox", { name: "Kata Sandi" }).fill("111111");
    await page.getByRole("button", { name: "Masuk" }).click();
    await page.waitForLoadState("load");
    await expect(page).toHaveURL("https://sim.dev.masook.id/#/pilihOrganisasi");

    await page
      .locator("div:nth-child(2) > .ra-0 > .v-card__text > .container")
      .click();
    await expect(page).toHaveURL(
      "https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU"
    );

    await page.getByRole("button", { name: "Kelola Instansi" }).click();
    await page.getByRole("link", { name: "Jam Kerja" }).click();
    await page.locator("#toggleSearch").click();
    await page.getByRole("textbox", { name: "Cari Jam Kerja" }).click();
    await page.locator("#caridata").fill("jam kerja 5 hari");
    await page.getByRole("button", { name: "append icon" }).click();
    await expect(
      page.getByRole("cell", { name: "jam kerja 5 hari" })
    ).toBeVisible();
    // gagal karena data tidak terfilter
  });

  test("Tambah Data (TC002)", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto("https://sim.dev.masook.id/");
    await page.waitForLoadState("load");
    await page
      .getByRole("textbox", { name: "Username" })
      .fill("operatorjmi@mail.com");
    await page.getByRole("textbox", { name: "Kata Sandi" }).fill("111111");
    await page.getByRole("button", { name: "Masuk" }).click();
    await page.waitForLoadState("load");
    await expect(page).toHaveURL("https://sim.dev.masook.id/#/pilihOrganisasi");

    await page
      .locator("div:nth-child(2) > .ra-0 > .v-card__text > .container")
      .click();
    await page.waitForLoadState("load");
    await expect(page).toHaveURL(
      "https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU"
    );
    await page.getByRole("button", { name: "Kelola Instansi" }).click();
    await page.getByRole("link", { name: "Jam Kerja" }).click();
    await page.locator("#add").click();
    await page.getByRole("textbox", { name: "Label Jam kerja" }).click();
    await page.locator('[data-vv-name="nama"]').fill("testing jadwal");
    await page.getByRole("button", { name: "Tipe Jam Kerja" }).click();
    await page
      .getByRole("option", { name: "Khusus" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("textbox", { name: "Awal Berlaku" }).click();
    await page.getByRole("button", { name: "25", exact: true }).click();
    await page.getByRole("textbox", { name: "Akhir Berlaku" }).click();
    await page
      .getByRole("menu")
      .filter({ hasText: "2025Wed, Feb 19February 2025" }) //tanggal atau bulan harus diubah ketika menjalankan test
      .getByLabel("Next month")
      .click();
    await page.getByRole("button", { name: "22" }).first().click();
    await page.getByRole("textbox", { name: "Deskripsi" }).click();
    await page.locator('[data-vv-name="keterangan"]').fill("ini testing");

    // gagal karena jadwal bertabrakan
    await page.getByRole("button", { name: "Presensi 2x (Datang dan" }).click();
    await page
      .getByRole("option", { name: "Presensi 4x (Datang, Awal" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Detail Jadwal" }).click();

    // Detail Masuk
    await page
      .locator(
        ".col-sm-12 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page
      .locator("form")
      .filter({ hasText: "BatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "03" })
      .locator("div")
      .first()
      .click();
    await page
      .locator("form")
      .filter({ hasText: "03BatalResetPilih" })
      .getByRole("button")
      .nth(1)
      .click();
    // await page.getByRole('option', { name: '04' }).click();
    await page.waitForTimeout(200);
    await page
      .getByRole("option", { name: "03" })
      .locator("div")
      .first()
      .click({ force: true });

    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Toleransi Masuk \(Menit\)$/ })
      .click();
    await page
      .locator(
        "div:nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page.locator('[data-vv-name="toleransi_datang"]').fill("1");
    await page
      .locator(
        "div:nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "02" })
      .locator("div")
      .first()
      .click();
    await page
      .locator("form")
      .filter({ hasText: "02BatalResetPilih" })
      .getByRole("button")
      .nth(1)
      .click();
    await page.waitForTimeout(200);
    await page
      .getByRole("option", { name: "02" })
      .locator("div")
      .first()
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        "div:nth-child(5) > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "04" }).click();
    await page
      .locator("form")
      .filter({ hasText: "04BatalResetPilih" })
      .getByRole("button")
      .nth(1)
      .click();
    await page.waitForTimeout(200);
    await page
      .getByRole("option", { name: "01" })
      .locator("div")
      .first()
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    // Detail Masuk

    // Detail Istirahat
    await page
      .locator(
        ".primary--text > .v-form > .row > div > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "07" }).click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        ".primary--text > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "07" })
      .locator("div")
      .first()
      .click();
    await page
      .locator(
        "div:nth-child(19) > .v-dialog > .v-card > .v-card__text > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page.waitForTimeout(100);
    // await page.locator('div:nth-child(21) > .v-dialog > .v-card > .v-card__text > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot').click();
    await page
      .getByRole("option", { name: "04" })
      .locator("div")
      .first()
      .click();
    // await page.waitForTimeout(100);
    // await page.getByRole('option', { name: '02' }).click();
    await page.getByRole("button", { name: "Pilih" }).click();
    // await page.getByRole('button', { name: 'Pilih' }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    // Detail Istirahat

    // Awal Istirahat
    await page
      .locator(
        "div:nth-child(3) > .v-stepper__wrapper > .v-form > .row > div > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "06" })
      .locator("div")
      .first()
      .click();
    // await page.getByRole("option", { name: "06" }).click();
    await page
      .locator("form")
      .filter({ hasText: "06BatalResetPilih" })
      .getByRole("button")
      .nth(1)
      .click();
    await page.waitForTimeout(200);
    await page
      .getByRole("option", { name: "05" })
      .locator("div")
      .first()
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        "div:nth-child(3) > .v-stepper__wrapper > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "07" }).click();
    await page
      .locator(
        "div:nth-child(25) > .v-dialog > .v-card > .v-card__text > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page.getByRole("option", { name: "04" }).nth(1).click();
    await page.getByRole("button", { name: "Pilih" }).click();
    // await page.getByRole('spinbutton', { name: 'Toleransi Awal Istirahat Mulai' }).click();

    // await page.getByRole('spinbutton', { name: 'Toleransi Awal Istirahat Mulai' }).click();
    await page.locator('[data-vv-name="toleransi_istirahat_mulai"]').fill("1");
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    // Awal Istirahat

    // Akhir Istirahat
    await page
      .locator(
        "div:nth-child(4) > .v-stepper__wrapper > .v-form > .row > div > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "07" })
      .locator("div")
      .first()
      .click();
    await page
      .locator(
        "div:nth-child(28) > .v-dialog > .v-card > .v-card__text > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page.getByRole("option", { name: "04" }).nth(1).click();
    // await page.locator('div:nth-child(28) > .v-dialog > .v-card > .v-card__text > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot').click();
    // await page.getByRole('option', { name: '00' }).locator('div').first().click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        "div:nth-child(4) > .v-stepper__wrapper > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "08" }).click();
    // await page
    //   .locator("form")
    //   .filter({ hasText: "07BatalResetPilih" })
    //   .getByRole("button")
    //   .nth(1)
    //   .click();
    // await page.waitForTimeout(200);
    // await page
    //   .getByRole("option", { name: "09" })
    //   .locator("div")
    //   .first()
    //   .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .getByRole("spinbutton", { name: "Toleransi Akhir Istirahat" })
      .click();
    await page
      .locator('[data-vv-name="toleransi_istirahat_selesai"]')
      .fill("5");
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    // Akhir Istirahat

    // Detail Jam keluar kerja
    await page
      .locator(
        "div:nth-child(5) > .v-stepper__wrapper > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "09" })
      .locator("div")
      .first()
      .click();
    // await page
    //   .locator("form")
    //   .filter({ hasText: "09BatalResetPilih" })
    //   .getByRole("button")
    //   .nth(1)
    //   .click();
    // await page.waitForTimeout(200);
    // await page
    //   .getByRole("option", { name: "09" })
    //   .locator("div")
    //   .first()
    //   .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .getByRole("spinbutton", { name: "Toleransi Pulang (Menit)" })
      .click();
    await page.locator('[data-vv-name="toleransi_pulang"]').fill("2");
    await page
      .locator(
        "div:nth-child(5) > .v-stepper__wrapper > .v-form > .row > div:nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.waitForTimeout(200);
    await page
      .getByRole("option", { name: "09" })
      .locator("div")
      .first()
      .click({ force: true });
    // await page.locator('form').filter({ hasText: '08BatalResetPilih' }).getByRole('button').nth(1).click()
    // await page.locator('div:nth-child(34) > .v-dialog > .v-card > .v-card__text > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot').click()
    // await page.getByRole("button", { name: "Pilih menit" }).click();
    // await page.locator('.v-select__slot>.v-select__selections>input[placeholder="Pilih menit"]').nth(10).click();
    // await page.locator('form').filter({ hasText: '07BatalResetPilih' }).getByRole('button').nth(1).click();
    // await page.waitForTimeout(200);
    // await page
    //   .getByRole('option', { name: '04' })
    //   .locator('div')
    //   .first()
    //   .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        "div:nth-child(5) > .v-stepper__wrapper > .v-form > .row > div:nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "10" }).click();
    // await page
    //   .locator("form")
    //   .filter({ hasText: "09BatalResetPilih" })
    //   .getByRole("button")
    //   .nth(1)
    //   .click();
    // await page
    //   .getByRole("option", { name: "08" })
    //   .locator("div")
    //   .first()
    //   .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    // Detail Jam keluar kerja
    await page
      .getByRole("banner")
      .filter({ hasText: "Pilih Hari yang akan di" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "RABU" }).click();
    await page.getByRole("option", { name: "SABTU" }).click();
    await page.getByRole("button", { name: "Simpan" }).click();
    await page.waitForLoadState("load");
    // gagal karena jadwal bertabrakan

    // test jadwal lain
    await page
      .getByRole("banner")
      .filter({ hasText: "Pilih Hari yang akan di" })
      .locator("button")
      .click();
    await page
      .getByRole("button", { name: "Presensi 4x (Datang, Awal" })
      .click();
    await page
      .getByRole("option", { name: "Presensi 3x (Datang, Awal" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Detail Jadwal" }).click();
    await page
      .locator(
        ".col-sm-12 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page
      .locator("form")
      .filter({ hasText: "BatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "07" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Toleransi Masuk \(Menit\)$/ })
      .click();
    await page.locator('[data-vv-name="toleransi_datang"]').fill("10");
    await page
      .locator(
        "div:nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "06" })
      .locator("div")
      .first()
      .click();
    await page
      .locator("form")
      .filter({ hasText: "06BatalResetPilih" })
      .getByRole("button")
      .nth(1)
      .click();
    await page
      .getByRole("option", { name: "02" })
      .locator("div")
      .first()
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        "div:nth-child(5) > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "08" }).click();
    // await page.locator('form').filter({ hasText: '08BatalResetPilih' }).getByRole('button').nth(1).click();
    // await page.getByRole('option', { name: '00' }).locator('div').first().click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .locator(
        ".primary--text > .v-form > .row > div > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "09" }).click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        ".primary--text > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "10" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .locator(
        "div:nth-child(3) > .v-stepper__wrapper > .v-form > .row > div > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "09" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        "div:nth-child(3) > .v-stepper__wrapper > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "09" }).click();
    await page
      .locator(
        "div:nth-child(22) > .v-dialog > .v-card > .v-card__text > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page.waitForTimeout(100);
    await page
      .getByRole("option", { name: "05" })
      .locator("div")
      .first()
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Toleransi Awal Istirahat Mulai$/ })
      .click();
    await page.locator('[data-vv-name="toleransi_istirahat_mulai"]').fill("2");
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .locator(
        "div:nth-child(5) > .v-stepper__wrapper > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "11" }).click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        "div:nth-child(5) > .v-stepper__wrapper > .v-form > .row > div:nth-child(3) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page.locator('[data-vv-name="toleransi_pulang"]').fill("5");
    await page
      .locator(
        "div:nth-child(5) > .v-stepper__wrapper > .v-form > .row > div:nth-child(4) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "10" }).click();
    await page
      .locator(
        "div:nth-child(27) > .v-dialog > .v-card > .v-card__text > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page
      .getByRole("option", { name: "09" })
      .locator("div")
      .first()
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        "div:nth-child(5) > .v-stepper__wrapper > .v-form > .row > div:nth-child(5) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "12" }).click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .getByRole("banner")
      .filter({ hasText: "Pilih Hari yang akan di" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "SENIN" }).click();
    await page.getByRole("option", { name: "RABU" }).click();
    await page.getByRole("option", { name: "JUMAT" }).click();
    // test jadwal lain

    await page.getByRole("button", { name: "Simpan" }).click();
    await page.waitForLoadState("load");
    await page.getByRole("button", { name: "Next page" }).click();
    await expect(
      page.getByRole("link", { name: "testing jadwal" })
    ).toBeVisible();
    // masih gagal karena error
  });
});

test.describe("Menu", () => {
  test("Detail (TC003)", async ({ page }) => {
    await page.goto("https://sim.dev.masook.id/");
    await page.waitForLoadState("load");
    await page
      .getByRole("textbox", { name: "Username" })
      .fill("operatorjmi@mail.com");
    await page.getByRole("textbox", { name: "Kata Sandi" }).fill("111111");
    await page.getByRole("button", { name: "Masuk" }).click();
    await page.waitForLoadState("load");
    await expect(page).toHaveURL("https://sim.dev.masook.id/#/pilihOrganisasi");

    await page
      .locator("div:nth-child(2) > .ra-0 > .v-card__text > .container")
      .click();
    await expect(page).toHaveURL(
      "https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU"
    );
    await page.getByRole("button", { name: "Kelola Instansi" }).click();
    await page.getByRole("link", { name: "Jam Kerja" }).click();
    await page.getByRole("button", { name: "Goto Page" }).click();
    await page
      .getByRole("row", { name: "testing jadwal Khusus 25 Feb" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Detail" }).click();
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^testing jadwal$/ })
        .first()
    ).toBeVisible();
    await page.locator("#edit").click();
    await page.waitForLoadState("load");
    await expect(
      page.getByRole("button", { name: "JUMAT, RABU, SENIN" })
    ).toBeVisible();
  });

  test("Set Default (TC004)", async ({ page }) => {
    await page.goto("https://sim.dev.masook.id/");
    await page.waitForLoadState("load");
    await page
      .getByRole("textbox", { name: "Username" })
      .fill("operatorjmi@mail.com");
    await page.getByRole("textbox", { name: "Kata Sandi" }).fill("111111");
    await page.getByRole("button", { name: "Masuk" }).click();
    await page.waitForLoadState("load");
    await expect(page).toHaveURL("https://sim.dev.masook.id/#/pilihOrganisasi");

    await page
      .locator("div:nth-child(2) > .ra-0 > .v-card__text > .container")
      .click();
    await expect(page).toHaveURL(
      "https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU"
    );
    await page.getByRole("button", { name: "Kelola Instansi" }).click();
    await page.getByRole("link", { name: "Jam Kerja" }).click();
    await page.getByRole("button", { name: "Goto Page" }).click();
    await page
      .getByRole("row", { name: "testing jadwal Khusus 25 Feb" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Set Default" }).click();
    await page.getByRole("button", { name: "Ya" }).click();
    await page.waitForLoadState("load");
  });

  test("Ubah (TC005)", async ({ page }) => {
    await page.goto("https://sim.dev.masook.id/");
    await page.waitForLoadState("load");
    await page
      .getByRole("textbox", { name: "Username" })
      .fill("operatorjmi@mail.com");
    await page.getByRole("textbox", { name: "Kata Sandi" }).fill("111111");
    await page.getByRole("button", { name: "Masuk" }).click();
    await page.waitForLoadState("load");
    await expect(page).toHaveURL("https://sim.dev.masook.id/#/pilihOrganisasi");

    await page
      .locator("div:nth-child(2) > .ra-0 > .v-card__text > .container")
      .click();
    await expect(page).toHaveURL(
      "https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU"
    );
    await page.getByRole("button", { name: "Kelola Instansi" }).click();
    await page.getByRole("link", { name: "Jam Kerja" }).click();
    await page.getByRole("button", { name: "Goto Page" }).click();
    await page
      .getByRole("row", { name: "testt Khusus 18 Feb 2025 18" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Ubah" }).click();
    await page.locator(".v-text-field__slot").first().click();
    await page.locator('[data-vv-name="nama"]').fill("testt ini diubah");
    await page
      .locator(
        "div:nth-child(4) > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .click();
    await page
      .locator('[data-vv-name="keterangan"]')
      .fill("ini adalah test ubah dan hapus");
    await page
      .getByRole("banner")
      .filter({ hasText: "Pilih Hari yang akan di" })
      .locator("button")
      .click();
    await page.getByRole("button", { name: "Detail Jadwal" }).click();

    await page
      .getByRole("banner")
      .filter({ hasText: "Pilih Hari yang akan di" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "JUMAT" }).locator("i").click();
    await page.getByRole("option", { name: "SABTU" }).locator("i").click();
    await page
      .locator(".col-sm-12 > .v-input > .v-input__control > .v-input__slot")
      .first()
      .click();
    await page
      .locator("form")
      .filter({ hasText: "BatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "08" }).click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        ".v-stepper__wrapper > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "09" }).click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page.getByRole("button", { name: "Simpan" }).click();
    await expect(
      page
        .locator("div")
        .filter({ hasText: "Aksi Berhasil dijalankanTutup" })
        .nth(3)
    ).toBeVisible();
  });

  test("Hapus (TC006)", async ({ page }) => {
    test.setTimeout(50000);
    await page.goto("https://sim.dev.masook.id/");
    await page.waitForLoadState("load");
    await page
      .getByRole("textbox", { name: "Username" })
      .fill("operatorjmi@mail.com");
    await page.getByRole("textbox", { name: "Kata Sandi" }).fill("111111");
    await page.getByRole("button", { name: "Masuk" }).click();
    await page.waitForLoadState("load");
    await expect(page).toHaveURL("https://sim.dev.masook.id/#/pilihOrganisasi");

    await page
      .locator("div:nth-child(2) > .ra-0 > .v-card__text > .container")
      .click();
    await expect(page).toHaveURL(
      "https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU"
    );

    // tambah data dummy
    await page.getByRole("button", { name: "Kelola Instansi" }).click();
    await page.getByRole("link", { name: "Jam Kerja" }).click();
    await page.locator("#add").click();
    await page.getByRole("textbox", { name: "Label Jam kerja" }).click();
    await page.locator('[data-vv-name="nama"]').fill("testing jadwal hapus");
    await page.getByRole("button", { name: "Tipe Jam Kerja" }).click();
    await page
      .getByRole("option", { name: "Khusus" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("textbox", { name: "Awal Berlaku" }).click();
    await page.getByRole("button", { name: "25", exact: true }).click();
    await page.getByRole("textbox", { name: "Akhir Berlaku" }).click();
    await page
      .getByRole("menu")
      .filter({ hasText: "2025Fri, Feb 21February 2025" }) //tanggal atau bulan harus diubah ketika menjalankan test
      .getByLabel("Next month")
      .click();
    await page.getByRole("button", { name: "22" }).first().click();
    await page.getByRole("textbox", { name: "Deskripsi" }).click();
    await page.locator('[data-vv-name="keterangan"]').fill("ini testing");
    await page.getByRole("button", { name: "Presensi 2x (Datang dan" }).click();
    await page
      .getByRole("option", { name: "Presensi 3x (Datang, Awal" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Detail Jadwal" }).click();
    await page
      .locator(
        ".col-sm-12 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page
      .locator("form")
      .filter({ hasText: "BatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "07" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Toleransi Masuk \(Menit\)$/ })
      .click();
    await page.locator('[data-vv-name="toleransi_datang"]').fill("10");
    await page
      .locator(
        "div:nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "06" })
      .locator("div")
      .first()
      .click();
    await page
      .locator("form")
      .filter({ hasText: "06BatalResetPilih" })
      .getByRole("button")
      .nth(1)
      .click();
    await page
      .getByRole("option", { name: "02" })
      .locator("div")
      .nth(1)
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        "div:nth-child(5) > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "08" }).click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .locator(
        ".primary--text > .v-form > .row > div > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "09" }).click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        ".primary--text > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "10" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .locator(
        "div:nth-child(3) > .v-stepper__wrapper > .v-form > .row > div > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "09" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        "div:nth-child(3) > .v-stepper__wrapper > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "09" }).click();
    await page
      .locator(
        "div:nth-child(21) > .v-dialog > .v-card > .v-card__text > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page.waitForTimeout(100);
    await page
      .getByRole("option", { name: "05" })
      .locator("div")
      .first()
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Toleransi Awal Istirahat Mulai$/ })
      .click();
    await page.locator('[data-vv-name="toleransi_istirahat_mulai"]').fill("2");
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .locator(
        "div:nth-child(5) > .v-stepper__wrapper > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "11" }).click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        "div:nth-child(5) > .v-stepper__wrapper > .v-form > .row > div:nth-child(3) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page.locator('[data-vv-name="toleransi_pulang"]').fill("5");
    await page
      .locator(
        "div:nth-child(5) > .v-stepper__wrapper > .v-form > .row > div:nth-child(4) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "10" }).click();
    await page
      .locator(
        "div:nth-child(26) > .v-dialog > .v-card > .v-card__text > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page
      .getByRole("option", { name: "09" })
      .nth(1)
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        "div:nth-child(5) > .v-stepper__wrapper > .v-form > .row > div:nth-child(5) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Pilih WaktuBatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "12" }).click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .getByRole("banner")
      .filter({ hasText: "Pilih Hari yang akan di" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "SENIN" }).click();
    await page.getByRole("option", { name: "RABU" }).click();
    await page.getByRole("option", { name: "JUMAT" }).click();
    await page.getByRole("button", { name: "Simpan" }).click();
    await page.waitForLoadState("load");
    await page.getByRole("button", { name: "Next page" }).click();
    await expect(
      page.getByRole("link", { name: "testing jadwal hapus" })
    ).toBeVisible();
    // tambah data dummy

    await page
      .getByRole("row", { name: "testing jadwal hapus Khusus 25 Feb" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Hapus" }).click();
    await page.getByRole("button", { name: "Ya" }).click();
    await expect(page.getByRole('cell', { name: 'jam kerja 5 hari' })).toBeVisible();
  });
});
