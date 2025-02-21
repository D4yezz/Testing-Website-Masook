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
    await page.getByRole("button", { name: "Kelola Anggota" }).click();
    await page.getByRole("link", { name: "Grup" }).click();
    await page.locator("#toggleSearch").click();
    await page.getByRole("textbox", { name: "Cari Grup" }).click();
    await page.locator("#caridata").fill("manager");
    await page.locator("#caridata").press("Enter");
    await expect(
      page.getByRole("cell", { name: "MANAGER DSO 1" })
    ).toBeVisible();
    await page.locator("#caridata").fill("@%*#!$^%#@@");
    await page.getByRole("button", { name: "append icon" }).click();
    await expect(
      page.getByRole("cell", { name: "Data tidak tersedia" })
    ).toBeVisible();
  });

  test("Tambah Data (TC002)", async ({ page }) => {
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
    await page.getByRole("button", { name: "Kelola Anggota" }).click();
    await page.getByRole("link", { name: "Grup" }).click();
    await page.locator("#add").click();
    await page.getByRole("textbox", { name: "Label Grup" }).click();
    await page.locator('[data-vv-name="nama"]').fill("testing grup hari ini");
    await page.getByRole("textbox", { name: "Deskripsi" }).click();
    await page
      .locator('[data-vv-name="keterangan"]')
      .fill("ini adalah testing");
    await page.getByRole("textbox", { name: "Masukan Nama" }).click();
    await page.getByRole("textbox", { name: "Masukan Nama" }).fill("dias");
    await page
      .getByRole("row", { name: "Dias test - Belum Verifikasi" })
      .locator("div")
      .nth(4)
      .click();
    await page.getByRole("textbox", { name: "Masukan Nama" }).fill("");
    await page
      .getByRole("row", { name: "Alip test - Belum Verifikasi" })
      .getByRole("cell")
      .first()
      .click();
    await page.getByRole("button", { name: "Simpan" }).click();
    await page
      .locator("#logined")
      .getByRole("button", { name: "Goto Page 2" })
      .click();
    await expect(
      page.getByRole("cell", { name: "testing grup hari ini" })
    ).toBeVisible();
  });
});

test.describe("Menu User", () => {
  test("User (TC003)", async ({ page }) => {
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
    await page.getByRole("button", { name: "Kelola Anggota" }).click();
    await page.getByRole("link", { name: "Grup" }).click();
    await page
      .locator("#logined")
      .getByRole("button", { name: "Goto Page 2" })
      .click();
    // await page.getByRole('cell', { name: 'testing grup' }).click();
    await page.getByRole("link", { name: "testing grup" }).click();
    await expect(page.locator(".v-list-item__subtitle").first()).toHaveText(
      "testing grup"
    );
  });

  test("Ubah (TC004)", async ({ page }) => {
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
    await page.getByRole("button", { name: "Kelola Anggota" }).click();
    await page.getByRole("link", { name: "Grup" }).click();
    await page
      .locator("#logined")
      .getByRole("button", { name: "Goto Page 2" })
      .click();
    await page.locator("#moreMenu").first().click();
    await page.getByRole("menuitem", { name: "Ubah" }).click();
    await page.locator('[data-vv-name="keterangan"]').click();
    await page
      .locator('[data-vv-name="keterangan"]')
      .fill("ini adalah testing yang diubah");
    await page
      .locator("form")
      .getByRole("button", { name: "Next page" })
      .click();
    await page
      .getByRole("row", { name: "dummy test 113333 Belum" })
      .locator("div")
      .nth(4)
      .click();
    await page
      .locator("form")
      .getByRole("button", { name: "Next page" })
      .click();
    await page.getByRole("button", { name: "Goto Page 6" }).click();
    await page
      .getByRole("row", { name: "test tambah data ini bukan" })
      .locator("div")
      .nth(4)
      .click();
    await page
      .locator("form")
      .getByRole("button", { name: "Goto Page 1" })
      .click();
    await page
      .getByRole("row", { name: "Alip test - Belum Verifikasi" })
      .locator("div")
      .nth(4)
      .click();
    await page.getByRole("button", { name: "Simpan" }).click();
    await page.waitForLoadState("load");
    await expect(
      page.getByRole("cell", { name: "ini adalah testing yang diubah" })
    ).toBeVisible();
  });

  test("Hapus (TC005)", async ({ page }) => {
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
    await page.getByRole("button", { name: "Kelola Anggota" }).click();
    await page.getByRole("link", { name: "Grup" }).click();
    await page.locator("#add").click();

    // membuat data baru
    await page.getByRole("textbox", { name: "Label Grup" }).click();
    await page.locator('[data-vv-name="nama"]').fill("dummy dihapus");
    await page.getByRole("textbox", { name: "Deskripsi" }).click();
    await page
      .locator('[data-vv-name="keterangan"]')
      .fill("hapus dummy test");
    await page.getByRole("textbox", { name: "Masukan Nama" }).click();
    await page.getByRole("textbox", { name: "Masukan Nama" }).fill("dias");
    await page
      .getByRole("row", { name: "Dias test - Belum Verifikasi" })
      .locator("div")
      .nth(4)
      .click();
    await page.getByRole("textbox", { name: "Masukan Nama" }).fill("");
    await page
      .getByRole("row", { name: "Alip test - Belum Verifikasi" })
      .getByRole("cell")
      .first()
      .click();
    await page.getByRole("button", { name: "Simpan" }).click();
// membuat data baru

    await page
      .locator("#logined")
      .getByRole("button", { name: "Goto Page 2" })
      .click();
      await page.locator("#moreMenu").nth(1).click();
      await page.getByRole('menuitem', { name: 'Hapus' }).click();
      await page.getByRole('button', { name: 'Ya' }).click();
      await expect(page.getByRole('cell', { name: 'dummy dihapus' })).not.toBeVisible();
  });
});
