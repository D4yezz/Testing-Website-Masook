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

    await page.getByRole("link", { name: "Kuesioner" }).click();
    await page.locator("#toggleSearch").click();
    await page.getByRole("textbox", { name: "Cari Kuesioner" }).click();
    await page.locator("#caridata").fill("test");
    await page.locator("#caridata").press("Enter");
    await expect(page.getByText("kuesioner test")).toHaveText(
      "kuesioner test 100"
    );
  });

  test("Tambah Data (TC002)", async ({ page }) => {
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
    await page.waitForLoadState("load");
    await expect(page).toHaveURL(
      "https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU"
    );

    await page.getByRole("link", { name: "Kuesioner" }).click();
    await page.locator("#add").click();
    await page.waitForLoadState("load");
    // await page.waitForSelector('.v-input__control > .v-input__slot > .v-text-field__slot');
    await page
      .getByRole("textbox", { name: "Judul Kuesioner" })
      .fill("testing");
    await page
      .getByRole("textbox", { name: "Deskripsi Kuesioner" })
      .fill("ini adalah testing");
    await page
      .locator("div")
      .filter({ hasText: /^Tampilkan Semua$/ })
      .locator("div")
      .nth(1)
      .click();
    await page
      .locator(
        ".col-sm-12 > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .first()
      .click();

    await page
      .locator(
        ".py-0 > .row > div > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    await page
      .getByText("SMTWTFS12345678910111213141516171819202122232425262728")
      .waitFor();
    await page.getByRole("button", { name: "13" }).click();
    await page
      .locator(
        "div:nth-child(2) > .row > div > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    await page.waitForTimeout(500);

    await page.getByRole("button", { name: "14" }).click();
    await page
      .locator(
        ".py-0 > div > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page.waitForTimeout(500);
    await page
      .locator("form")
      .filter({ hasText: "BatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "05" })
      .locator("div")
      .first()
      .click();
    await page
      .locator("form")
      .filter({ hasText: "05BatalResetPilih" })
      .getByRole("button")
      .nth(1)
      .click();
    await page
      .getByRole("option", { name: "03" })
      .locator("div")
      .first()
      .click();
    // klik tombol reset
    await page.getByRole("button", { name: "Reset" }).click();
    await expect(
      page.getByText("Pilih WaktuBatalResetPilih")
    ).not.toBeVisible();
    await expect(
      page
        .locator(
          ".py-0 > div > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
        )
        .first()
    ).toBeEmpty();
    // mengisi waktu lagi
    await page
      .locator(
        ".py-0 > div > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page.waitForTimeout(500);
    await page
      .locator("form")
      .filter({ hasText: "BatalResetPilih" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "05" })
      .locator("div")
      .first()
      .click();
    await page
      .locator("form")
      .filter({ hasText: "05BatalResetPilih" })
      .getByRole("button")
      .nth(1)
      .click();
    await page
      .getByRole("option", { name: "05" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Pilih", exact: true }).click();

    await page
      .locator("div")
      .filter({ hasText: /^Sebagian Anggota$/ })
      .locator("div")
      .nth(1)
      .click();
    await page.getByRole("textbox", { name: "Cari Nama Responen" }).click();
    await page
      .getByRole("textbox", { name: "Cari Nama Responen" })
      .fill("alip");
    await page
      .getByRole("textbox", { name: "Cari Nama Responen" })
      .press("Enter");
    await page
      .locator(
        "tbody > tr > td > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .first()
      .click();
    await page.getByRole("tab", { name: "Kuesioner Masook" }).click();
    await page.getByRole("textbox", { name: "Judul Kuesioner" }).click();
    await page
      .locator(
        ".mb-5 > .v-card__text > .mt-2 > .row > div > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    await page.locator('[data-vv-name="survey_1"]').fill("testing apa ini?");

    await page
      .locator("form")
      .filter({ hasText: "Pertanyaan ke - 1" })
      .getByRole("button")
      .first()
      .click();
    await page.getByRole("option", { name: "Pilihan Ganda" }).click();
    await page.getByRole("textbox", { name: "opsi" }).click();
    await page.getByRole("textbox", { name: "opsi" }).fill("test 1");
    await page.getByText("Tambah Opsi").click();
    await page.getByRole("textbox", { name: "opsi 2" }).click();
    await page.getByRole("textbox", { name: "opsi 2" }).fill("test 2");
    await page.getByRole("tab", { name: "Pratinjau Kuesioner" }).click();
    await expect(page.getByText("testing apa ini?")).toBeVisible();
    await page.getByRole("button", { name: "Simpan" }).click();
    await page.waitForLoadState("load");
    await page.getByRole("button", { name: "Simpan sebagai draft" }).click();
    await page.waitForLoadState("load");
    await expect(
      page
        .getByRole("cell", { name: "testing Aktif 13 Feb 2025 s/d" })
        .locator("span")
    ).toHaveText("testing");
    await expect(
      page.getByText("Kuesioner berhasil diperbaruiTutup")
    ).toBeVisible();
  });

  test("Filter (TC003)", async ({ page }) => {
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

    await page.getByRole("link", { name: "Kuesioner" }).click();
    await page
      .locator("header")
      .filter({ hasText: /^Kuesioner$/ })
      .getByRole("button")
      .nth(2)
      .click();

    // Tombol Reset
    await page
      .locator("div")
      .filter({ hasText: /^Tanggal$/ })
      .first()
      .click();
    await page.getByRole("button", { name: "10" }).click();
    await page
      .locator(
        "div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page.locator("form").getByRole("button").first().click();
    await page.getByRole("option", { name: "02" }).click();
    await page
      .locator("form")
      .filter({ hasText: "02BatalResetPilih" })
      .getByRole("button")
      .nth(1)
      .click();
    // await page
    //   .getByRole("option", { name: "04" })
    //   .locator("div")
    //   .first()
    //   .waitFor({ state: "visible", timeout: 3000 });
    await page
      .getByRole("option", { name: "04" })
      .locator("div")
      .first()
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page.getByRole("textbox", { name: "Tanggal" }).click();
    await page.getByRole("button", { name: "16" }).click();
    await page
      .locator(
        "div:nth-child(2) > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
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
    await page
      .getByRole("option", { name: "04" })
      .locator("div")
      .first()
      .waitFor({ state: "visible", timeout: 3000 });
    await page
      .getByRole("option", { name: "04" })
      .locator("div")
      .first()
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Filter Berdasarkan Tanggal" })
      .getByRole("button")
      .first()
      .click();
    await page
      .getByRole("option", { name: "Harian" })
      .locator("div")
      .first()
      .click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Filter Berdasarkan Tanggal" })
      .getByRole("button")
      .nth(1)
      .click();
    await page.getByText("Sedang Tayang").click();
    await page.getByRole("button", { name: "Reset Filter" }).click();
    await page.waitForLoadState("load");
    await expect(page.getByText("Kamis, 20-02-2025 10:")).toHaveText(
      "Kamis, 20-02-2025 10:44"
    ); //tanggal harus diubah setiap testing
    // Tombol Reset

    await page
      .locator("header")
      .filter({ hasText: "Kuesioner" })
      .getByRole("button")
      .nth(2)
      .click();
    await page.getByRole("textbox", { name: "Tanggal" }).click();
    await page.getByRole("button", { name: "15" }).click();
    await page
      .locator(
        "div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page.locator("form").getByRole("button").first().click();
    await page
      .getByRole("option", { name: "05" })
      .locator("div")
      .first()
      .click();
    await page.locator("form").getByRole("button").nth(1).click();
    await page
      .getByRole("option", { name: "01" })
      .locator("div")
      .first()
      .waitFor({ state: "visible", timeout: 3000 });
    await page
      .getByRole("option", { name: "01" })
      .locator("div")
      .first()
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator(
        "div:nth-child(2) > .row > div > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    await page.getByRole("button", { name: "15" }).click();
    await page
      .locator(
        "div:nth-child(2) > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot"
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
      .getByRole("option", { name: "04" })
      .locator("div")
      .first()
      .click();
    await page
      .locator("form")
      .filter({ hasText: "04BatalResetPilih" })
      .getByRole("button")
      .nth(1)
      .click();
    await page
      .getByRole("option", { name: "02" })
      .locator("div")
      .first()
      .waitFor({ state: "visible", timeout: 3000 });
    await page
      .getByRole("option", { name: "02" })
      .locator("div")
      .first()
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Filter Berdasarkan Tanggal" })
      .getByRole("button")
      .first()
      .click();
    await page.getByText("Mingguan", { exact: true }).click();
    await page
      .locator("#app")
      .getByRole("document")
      .filter({ hasText: "Filter Berdasarkan Tanggal" })
      .getByRole("button")
      .nth(1)
      .click();
    await page
      .getByRole("option", { name: "Draft" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await page.waitForLoadState("load");
    await expect(page.getByText("Kuisioner Dummy Kinerja")).toHaveText(
      "Kuisioner Dummy Kinerja Mingguan"
    );
  });

  test("Muat Ulang (TC004)", async ({ page }) => {
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

    await page.getByRole("link", { name: "Kuesioner" }).click();
    await page
      .locator("header")
      .filter({ hasText: "Kuesioner" })
      .getByRole("button")
      .nth(3)
      .click();
    await expect(page.locator("div.vld-icon")).toBeVisible();
  });
});

test.describe("Menu (Draft)", () => {
  test("Detail (TC006)", async ({ page }) => {
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

    await page.getByRole("link", { name: "Kuesioner" }).click();
    // Tab Informasi Umum
    await page
      .getByRole("row", { name: "testing Aktif 28 Feb 2025 s/d" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Detail" }).click();
    await expect(page.locator('[data-vv-name="nama"]')).toHaveAttribute(
      "readonly",
      "readonly"
    );
    await expect(page.locator('[data-vv-name="deskripsi"]')).toHaveAttribute(
      "readonly",
      "readonly"
    );
    await page.getByRole("button", { name: "Lihat Target Terpilih" }).click();
    await expect(
      page.getByRole("paragraph").filter({ hasText: "Alip Test" })
    ).toHaveText("Alip Test");
    await page
      .getByRole("banner")
      .filter({ hasText: "Daftar Anggota Terpilih" })
      .getByRole("button")
      .click();

    var next = await page
      .getByRole("list")
      .filter({ hasText: "123456" })
      .getByLabel("Next page");

    for (let i = 0; i < 5; i++) {
      await next.click();
      await page.waitForLoadState("load");
    }
    await expect(
      page
        .getByRole("list")
        .filter({ hasText: "123456" })
        .getByLabel("Previous page")
    ).toBeEnabled();
    await expect(
      page.getByRole("button", { name: "Current Page, Page 6" })
    ).toHaveClass("v-pagination__item v-pagination__item--active primary");

    await page
      .locator("div")
      .filter({ hasText: /^Hal\.6$/ })
      .nth(1)
      .click();
    await page.getByRole("option", { name: "4" }).click();
    await expect(
      page.getByRole("button", { name: "Current Page, Page 4" })
    ).toHaveClass("v-pagination__item v-pagination__item--active primary");

    // Tab Kuesioner Masook
    await page.getByRole("tab", { name: "Kuesioner Masook" }).click();
    await expect(page.locator('[data-vv-name="survey_1"]')).toHaveAttribute(
      "readonly",
      "readonly"
    );
    await expect(page.locator('[data-vv-name="opsi_1"]')).toHaveAttribute(
      "readonly",
      "readonly"
    );
    await expect(page.locator('[placeholder="opsi 1"]')).toHaveAttribute(
      "readonly",
      "readonly"
    );
    await expect(page.locator('[placeholder="opsi 2"]')).toHaveAttribute(
      "readonly",
      "readonly"
    );

    // Tab Pratinjau Kuesioner
    await page.getByRole("tab", { name: "Pratinjau Kuesioner" }).click();
    await expect(page.getByText("testing").nth(1)).toHaveText("testing");
    await page
      .locator("div")
      .filter({ hasText: /^test 1$/ })
      .locator("div")
      .nth(1)
      .click();
    await expect(page.locator('input[value="test 1"]')).toBeChecked();
    await page
      .locator("div")
      .filter({ hasText: /^test 2$/ })
      .locator("div")
      .nth(1)
      .click();
    await expect(page.locator('input[value="test 2"]')).toBeChecked();
  });

  test("Statistik (TC007)", async ({ page }) => {
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

    await page.getByRole("link", { name: "Kuesioner" }).click();
    await page
      .getByRole("row", { name: "testing coba 2 Aktif 28 Feb 2025 s/d" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Statistik" }).click();
    await expect(
      page.getByText("testing coba 2", { exact: true }).nth(1)
    ).toBeVisible();

    // toggle filter
    await page.getByRole("button").filter({ hasText: /^$/ }).nth(1).click();
    await page
      .locator("div")
      .filter({ hasText: /^Tanggal$/ })
      .click();
    await page.getByRole("button", { name: "February" }).click();
    await page.getByRole("button", { name: "2025", exact: true }).click();
    await page.getByText("2010").click();
    await page.getByRole("button", { name: "Jun" }).click();
    await page.getByRole("button", { name: "12" }).click();
    await page
      .locator(
        "div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
      )
      .first()
      .click();
    await page.locator("form").getByRole("button").first().click();
    await page
      .getByRole("option", { name: "02" })
      .locator("div")
      .first()
      .click();
    await page.locator("form").getByRole("button").nth(1).click();
    await page
      .getByRole("option", { name: "03" })
      .locator("div")
      .first()
      .click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Tanggal$/ })
      .click();
    await page.getByRole("button", { name: "20", exact: true }).click();
    await page
      .locator(
        "div:nth-child(2) > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
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
    await page.waitForTimeout(500);
    await page.getByRole("option", { name: "05" }).click({ force: true });
    await page.getByRole("button", { name: "Pilih" }).click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    // toggle filter

    await page.locator("canvas").click({
      position: {
        x: 231,
        y: 131,
      },
    });
    // await expect(page.locator("canvas")).toBeEmpty();
    await page.locator("canvas").click({
      position: {
        x: 237,
        y: 153,
      },
    });
    // await expect(page.locator("canvas")).toBeEmpty();
    await page.locator("canvas").click({
      position: {
        x: 233,
        y: 181,
      },
    });
    await expect(page.locator("canvas")).toBeEmpty();
    await page
      .locator("header")
      .filter({ hasText: "Statistik Kuesioner" })
      .getByRole("button")
      .nth(1)
      .click();
  });

  test("Ubah (TC008)", async ({ page }) => {
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

    await page.getByRole("link", { name: "Kuesioner" }).click();
    await page
      .getByRole("row", { name: "testing Aktif 28 Feb 2025 s/d" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Ubah" }).click();
    // tab informasi umum
    await page.locator('[data-vv-name="nama"]').first().click();
    await page.locator('[data-vv-name="nama"]').first().fill("testing coba 2");
    await page.locator('[data-vv-name="nama"]').first().press("Enter");
    await page.locator('[data-vv-name="deskripsi"]').click();
    await page
      .locator('[data-vv-name="deskripsi"]')
      .fill("ini adalah testing percobaan kedua");
    await page
      .locator("div")
      .filter({ hasText: /^Tampilkan Satu Per Satu$/ })
      .locator("div")
      .nth(1)
      .click();
    await page.getByRole("textbox", { name: "Cari Nama Responen" }).click();
    await page
      .getByRole("textbox", { name: "Cari Nama Responen" })
      .fill("Dias");
    await page
      .getByRole("textbox", { name: "Cari Nama Responen" })
      .press("Enter");
    await page
      .locator(
        "tbody > tr > td > .v-input > .v-input__control > .v-input__slot"
      )
      .first()
      .click();
    // tab informasi umum

    // tab kuesioner masook
    await page.getByRole("tab", { name: "Kuesioner Masook" }).click();
    await page.getByText("Tambah Opsi").click();
    await page.getByRole("textbox", { name: "opsi 3" }).click();
    await page.getByRole("textbox", { name: "opsi 3" }).fill("opsi cadangan");
    await page.getByRole("textbox", { name: "opsi 3" }).press("Enter");
    await page
      .locator("form")
      .filter({ hasText: "Pertanyaan ke - 1" })
      .getByRole("button")
      .nth(2)
      .click();
    await page
      .locator("form")
      .filter({ hasText: "Pertanyaan ke - 1" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Duplikasi" }).click();
    await expect(page.getByText("Pertanyaan ke - 2")).toBeVisible();

    await page.getByRole("button", { name: "Pilihan Ganda" }).nth(1).click();
    await page.getByRole("option", { name: "Tarik Turun" }).click();
    await page
      .locator("form")
      .filter({ hasText: "Pertanyaan ke - 1" })
      .locator("#moreMenu")
      .nth(1)
      .click();

    await page
      .locator(
        "div:nth-child(2) > .v-card__text > .mt-2 > .row > div:nth-child(4) > .d-flex > .px-1 > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
      )
      .click();
    await page.getByRole("button", { name: "Pertanyaan" }).click();
    await expect(page.getByText("Pertanyaan ke - 3")).toBeVisible();
    await page
      .locator("div")
      .filter({ hasText: /^Judul Kuesioner$/ })
      .click();
    await page.locator('[data-vv-name="survey_3"]').fill("pertanyaan cadangan");
    await page.locator('[data-vv-name="survey_3"]').press("Enter");
    await page
      .locator(
        "div:nth-child(3) > .v-card__text > .mt-2 > .row > div:nth-child(2) > .v-input > .v-input__control > .v-input__slot"
      )
      .click();
    await page.getByRole("option", { name: "Kotak Centang" }).click();
    await page.locator('input[placeholder="opsi 1"]').nth(2).fill("pilihan 1");
    await page.locator('input[placeholder="opsi 1"]').nth(2).press("Enter");
    await page.getByText("Tambah Opsi").nth(2).click();
    await page
      .locator(
        "div:nth-child(3) > .v-card__text > .mt-2 > .row > div:nth-child(3) > div:nth-child(2) > div > .v-input"
      )
      .click();
    await page.locator('input[placeholder="opsi 2"]').nth(2).fill("pilihan 2");
    await page.locator('input[placeholder="opsi 2"]').nth(2).press("Enter");
    await page
      .locator("form")
      .filter({ hasText: "Pertanyaan ke - 1" })
      .locator("#moreMenu")
      .nth(2)
      .click();
    await page.getByRole("menuitem", { name: "Duplikasi" }).click();
    await expect(page.getByText("Pertanyaan ke - 4")).toBeVisible();
    await page.getByRole("button", { name: "Kotak Centang" }).nth(1).click();
    await page.getByRole("option", { name: "Jawaban Singkat" }).click();
    await page
      .locator(
        "div:nth-child(4) > .v-card__text > .mt-2 > .row > div:nth-child(3)"
      )
      .click();
    await page
      .locator(
        "div:nth-child(4) > .v-card__text > .mt-2 > .row > div:nth-child(3)"
      )
      .click();
    await page
      .locator("form")
      .filter({ hasText: "Pertanyaan ke - 1" })
      .locator("#moreMenu")
      .nth(3)
      .click();
    await page.getByRole("menuitem", { name: "Duplikasi" }).click();
    await expect(page.getByText("Pertanyaan ke - 5")).toBeVisible();
    await page.getByRole("button", { name: "Jawaban Singkat" }).nth(1).click();
    await page.getByRole("option", { name: "Jawaban Paragraf" }).click();
    await page
      .locator("form")
      .filter({ hasText: "Pertanyaan ke - 1" })
      .locator("#moreMenu")
      .nth(4)
      .click();
    await page.getByRole("menuitem", { name: "Duplikasi" }).click();
    await page
      .locator(
        "div:nth-child(5) > .v-card__text > .mt-2 > .row > div:nth-child(4) > .d-flex > .pt-5 > #moreMenu"
      )
      .click();
    await page.getByRole("menuitem", { name: "Hapus" }).click();
    await page.getByText("Pertanyaan ke - 5").click();
    // tab kuesioner masook

    // tab pratinjau kuesioner
    await page.getByRole("tab", { name: "Pratinjau Kuesioner" }).click();
    await page.getByText("test 1", { exact: true }).click();
    await page.getByRole("button", { name: "Berikutnya" }).click();
    await page
      .locator("form")
      .filter({ hasText: "testing apa ini?" })
      .getByRole("button")
      .click();
    await page.getByRole("option", { name: "opsi cadangan" }).click();
    await page.getByRole("button", { name: "Berikutnya" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^pilihan 1$/ })
      .first()
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^pilihan 2$/ })
      .first()
      .click();
    await page.getByRole("button", { name: "Berikutnya" }).click();
    await page.getByRole("textbox", { name: "Jawabah Anda" }).click();
    await page
      .getByRole("textbox", { name: "Jawabah Anda" })
      .fill("jawaban testing");
    await page.getByRole("button", { name: "Berikutnya" }).click();
    await expect(
      page.locator('.v-alert__content>[data-v-7ff26b30=""]').nth(1)
    ).toHaveText("Pertanyaan ke 5 harus diisi");
    // await page.getByRole('alert').filter({ hasText: 'Pertanyaan ke 5 harus diisi' }).click();
    await page.getByRole("textbox", { name: "Jawaban Anda" }).click();
    await page
      .getByRole("textbox", { name: "Jawaban Anda" })
      .fill("wajib dijawab");
    await page.getByRole("button", { name: "Sebelumnya" }).click();
    // tab pratinjau kuesioner
    await page.getByRole("button", { name: "Simpan" }).click();
    await page.getByRole("button", { name: "Simpan sebagai draft" }).click();
    await expect(page.locator("td[data-v-44d2e47b]").nth(2)).toHaveText("2");
  });

  test("Duplikat (TC009)", async ({ page }) => {
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

    await page.getByRole("link", { name: "Kuesioner" }).click();
    await page
      .getByRole("row", { name: "testing coba 2 Aktif 28 Feb" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Duplikat" }).click();
    await page.getByRole("button", { name: "Duplikat" }).click();
    await page.getByText("Kuesioner berhasil di duplikasiTutup").click();
    await expect(
      page.locator("div").filter({ hasText: "Kuesioner berhasil di" }).nth(3)
    ).toBeVisible();
  });

  test("Tayangkan (TC010)", async ({ page }) => {
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

    await page.getByRole("link", { name: "Kuesioner" }).click();
    await page
      .getByRole("row", { name: "testing coba 2 Aktif 28 Feb" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Tayangkan" }).click();
    await page.getByRole("button", { name: "Ya, Tayangkan" }).click();
    await expect(
      page.locator("div").filter({ hasText: "Kuesioner berhasil di" }).nth(3)
    ).toBeVisible();
    await expect(
      page.locator("span[data-v-44d2e47b]>.v-chip__content").nth(1)
    ).toHaveText("Akan Tayang");
  });

  test("Hapus (TC011)", async ({ page }) => {
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

    await page.getByRole("link", { name: "Kuesioner" }).click();
    await page
      .getByRole("row", { name: "testing coba 2 Copy Draft 0" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Hapus" }).click();
    await page.getByRole("button", { name: "Ya Hapus" }).click();
    await expect(
      page.locator("div").filter({ hasText: "Kuesioner berhasil di" }).nth(3)
    ).toBeVisible();
  });

  test("Batal Tayang (TC012)", async ({ page }) => {
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

    await page.getByRole("link", { name: "Kuesioner" }).click();
    await page
      .getByRole("row", { name: "testing coba 2 Aktif 28 Feb" })
      .locator("#moreMenu")
      .click();
    await page.getByRole("menuitem", { name: "Batal Tayang" }).click();
    await page.getByRole("button", { name: "Ya, Batal Tayang" }).click();
    await expect(
      page
        .locator("div")
        .filter({ hasText: "Kuesioner berhasil di batal" })
        .nth(3)
    ).toBeVisible();
  });
});
