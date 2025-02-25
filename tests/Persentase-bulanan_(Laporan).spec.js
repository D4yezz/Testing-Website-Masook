// @ts-check
import { test, expect } from "@playwright/test";

  const fs = require("fs");
  const path = require("path");
  test("Unduh Rekap (TC001)", async ({ page }) => {
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

    await page.getByRole("button", { name: "Laporan" }).click();
    await page.getByRole("link", { name: "Persentase Bulanan" }).click();


    const downloadPath = path.join(__dirname, "../downloads & upload");

    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.getByRole('button', { name: 'Unduh Rekap' }).click(),
    ]);

    const filePath = path.join(
      downloadPath,
      await download.suggestedFilename()
    );
    await download.saveAs(filePath);

    expect(fs.existsSync(filePath)).toBeTruthy();
    console.log(`File berhasil diunduh di: ${filePath}`);
  });
  