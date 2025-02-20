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
  });
});
