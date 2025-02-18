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
    test.setTimeout(45000);
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
      .filter({ hasText: "2025Tue, Feb 18February 2025" })
      .getByLabel("Next month")
      .click();
    await page.getByRole("button", { name: "22" }).nth(1).click();
    await page.getByRole("textbox", { name: "Deskripsi" }).click();
    await page.locator('[data-vv-name="keterangan"]').fill("ini testing");
    await page.getByRole("button", { name: "Presensi 2x (Datang dan" }).click();
    await page
      .getByRole("option", { name: "Presensi 4x (Datang, Awal" })
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
      .getByRole("option", { name: "01" })
      .locator("div")
      .first()
      .click();
    await page
      .locator("form")
      .filter({ hasText: "01BatalResetPilih" })
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
      .getByRole("option", { name: "01" })
      .locator("div")
      .first()
      .click();
    await page
      .locator("form")
      .filter({ hasText: "01BatalResetPilih" })
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
    await page.getByRole("option", { name: "06" }).click();
    await page
      .locator("form")
      .filter({ hasText: "06BatalResetPilih" })
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
    await page.getByRole("option", { name: "06" }).click();
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
      .getByRole("option", { name: "06" })
      .locator("div")
      .first()
      .click();
    // await page.locator('div:nth-child(21) > .v-dialog > .v-card > .v-card__text > .v-form > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot').click();
    await page.getByRole("button", { name: "Pilih" }).click();
    // await page.getByRole('option', { name: '05' }).click();
    // await page.getByRole('button', { name: 'Pilih' }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
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
    await page.getByRole("option", { name: "02" }).click();
    await page
      .locator("form")
      .filter({ hasText: "02BatalResetPilih" })
      .getByRole("button")
      .nth(1)
      .click();
    await page.waitForTimeout(200);
    await page
      .getByRole("option", { name: "06" })
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
    await page.getByRole("option", { name: "06" }).click();
    await page.getByRole("button", { name: "Pilih" }).click();
    // await page.getByRole('spinbutton', { name: 'Toleransi Awal Istirahat Mulai' }).click();

    // await page.getByRole('spinbutton', { name: 'Toleransi Awal Istirahat Mulai' }).click();
    await page.locator('[data-vv-name="toleransi_istirahat_mulai"]').fill("2");
    await page.getByRole("button", { name: "Selanjutnya" }).click();
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
      .getByRole("option", { name: "06" })
      .locator("div")
      .first()
      .click();
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
    await page.getByRole("option", { name: "07" }).click();
    await page
      .locator("form")
      .filter({ hasText: "07BatalResetPilih" })
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
      .getByRole("spinbutton", { name: "Toleransi Akhir Istirahat" })
      .click();
    await page
      .locator('[data-vv-name="toleransi_istirahat_selesai"]')
      .fill("10");
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
    await page
      .getByRole("option", { name: "11" })
      .locator("div")
      .first()
      .click();
    await page
      .locator("form")
      .filter({ hasText: "11BatalResetPilih" })
      .getByRole("button")
      .nth(1)
      .click();
    await page.waitForTimeout(200);
    await page
      .getByRole("option", { name: "06" })
      .locator("div")
      .first()
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .getByRole("spinbutton", { name: "Toleransi Pulang (Menit)" })
      .click();
    await page.locator('[data-vv-name="toleransi_pulang"]').fill("70");
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
      .getByRole("option", { name: "06" })
      .locator("div")
      .first()
      .click({ force: true });
    await page.locator('[placeholder="Pilih menit"]').click();
    // await page.locator('form').filter({ hasText: '07BatalResetPilih' }).getByRole('button').nth(1).click();
    await page.waitForTimeout(200);
    await page
      .getByRole("option", { name: "05" })
      .locator("div")
      .first()
      .click();
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
    await page.getByRole("option", { name: "11" }).click();
    await page
      .locator("form")
      .filter({ hasText: "11BatalResetPilih" })
      .getByRole("button")
      .nth(1)
      .click();
    await page
      .getByRole("option", { name: "08" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .getByRole("banner")
      .filter({ hasText: "Pilih Hari yang akan di" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "RABU" }).click();
    await page.getByRole("option", { name: "SABTU" }).click();
    await page.getByRole("button", { name: "Simpan" }).click();
    await expect(page.getByText("Aksi Berhasil dijalankanTutup")).toBeVisible();

    // masih gagal karena error
  });
});
