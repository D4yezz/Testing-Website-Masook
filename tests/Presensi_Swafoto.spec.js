// @ts-check
import { test, expect } from "@playwright/test";

test("Search Toggle (TC001)", async ({ page }) => {
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
  await page.getByRole("link", { name: "Presensi Swafoto" }).click();
  await expect(page).toHaveURL(
    "https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/presensiManual"
  );
  await page.locator("#toggleSearch").click();
  await page.waitForSelector(".v-input__slot");
  await page
    .getByRole("textbox", { name: "Cari Presensi Swafoto" })
    .fill("Iman");
  await page.getByRole("button", { name: "append icon" }).click();
  await expect(page.locator("td:nth-child(2)").first()).toBeVisible();
});

test("Filter Toggle (TC002)", async ({ page }) => {
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
  await page.getByRole("link", { name: "Presensi Swafoto" }).click();
  await expect(page).toHaveURL(
    "https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/presensiManual"
  );
  await page.locator("#toggleSelectDate").click();
  await expect(
    page.getByText(
      "Filter Berdasarkan AnggotaStatusWaktuStatus RadiusStatus PenggunaTerapkan"
    )
  ).toBeVisible();
  await page.getByRole("textbox", { name: "Anggota" }).click();
  await page
    .getByRole("option", { name: "Semua Anggota" })
    .locator("div")
    .first()
    .click();
  await page
    .getByRole("combobox")
    .filter({ hasText: "Status" })
    .locator("i")
    .click();
  await page
    .getByRole("option", { name: "DIAJUKAN" })
    .locator("div")
    .first()
    .click();
  await page.getByRole("button", { name: "Waktu" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Awal Tahun 2024$/ })
    .click();
  await page.getByRole("button", { name: "Status Radius" }).click();
  await page
    .getByRole("option", { name: "Dalam Lokasi" })
    .locator("div")
    .first()
    .click();
  await page.getByRole("button", { name: "Status Pengguna" }).click();
  await page
    .getByRole("option", { name: "Aktif", exact: true })
    .locator("div")
    .first()
    .click();
  await page.getByRole("button", { name: "Terapkan" }).click();
  await expect(
    page.getByRole("cell", { name: "Samingun Sudarmanto Salapapua" })
  ).toHaveText("Samingun Sudarmanto Salapapua Nugini");
});

test("Filter Failed (TC003)", async ({ page }) => {
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
  await page.getByRole("link", { name: "Presensi Swafoto" }).click();
  await expect(page).toHaveURL(
    "https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/presensiManual"
  );
  await page.locator("#toggleSelectDate").click();
  await expect(
    page.getByText(
      "Filter Berdasarkan AnggotaStatusWaktuStatus RadiusStatus PenggunaTerapkan"
    )
  ).toBeVisible();
  await page.getByRole("textbox", { name: "Anggota" }).fill("abcdef");
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^No data available$/ })
      .nth(2)
  ).toHaveText("No data available");
  await page.locator("#filterStatus").fill("hijklmn");
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^No data available$/ })
      .nth(3)
  ).toHaveText("No data available");
  await page.getByRole("button", { name: "Status Radius" }).click();
  await page
    .getByRole("option", { name: "Dalam Lokasi" })
    .locator("div")
    .first()
    .click();
  await page.getByRole("button", { name: "clear icon", exact: true }).click();
  await expect(page.locator("input#filterRadius")).toBeEmpty();
});

test("Refresh Toggle (TC004)", async ({ page }) => {
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
  await page.getByRole("link", { name: "Presensi Swafoto" }).click();
  await expect(page).toHaveURL(
    "https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/presensiManual"
  );
  await page.locator("#refresh").click();
  await expect(page.locator("div.vld-icon")).toBeVisible();
});

test("Cek Map Absensi(TC005)", async ({ page }) => {
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
  await page.getByRole("link", { name: "Presensi Swafoto" }).click();
  await expect(page).toHaveURL(
    "https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/presensiManual"
  );
  await page.locator("tr:nth-child(2) > td:nth-child(6) > .ma-2").click();
  await expect(
    page.locator(".v-dialog > .v-card > .v-card__text")
  ).toBeVisible();

  const [newPage] = await Promise.all([
    page.context().waitForEvent("page"),
    page.getByRole("button", { name: "Cek" }).click(),
  ]);

  await newPage.waitForLoadState("load");

  await expect(
    newPage.getByText("2JWH+685 Lowokwaru, Kota Malang, Jawa Timur")
  ).toHaveText("2JWH+685 Lowokwaru, Kota Malang, Jawa Timur");
});

test("Arrows Halaman (TC006)", async ({ page }) => {
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
  await page.getByRole("link", { name: "Presensi Swafoto" }).click();
  await expect(page).toHaveURL(
    "https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/presensiManual"
  );

  var arrows = await page.getByRole("button", { name: "Next page" });

  for (let i = 0; i < 42; i++) {
    await arrows.click();
    await page.waitForLoadState("load");
  }
  await expect(
    page.getByRole("button", { name: "Current Page, Page" })
  ).toHaveClass("v-pagination__item v-pagination__item--active primary");
});

test("Dropdown Halaman (TC007)", async ({ page }) => {
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
  await page.getByRole("link", { name: "Presensi Swafoto" }).click();
  await expect(page).toHaveURL(
    "https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU/presensiManual"
  );

  await page.getByRole("button", { name: "Hal." }).click();
  await page.getByRole("option", { name: "20" }).click();
  await page.waitForLoadState("load");
  await expect(
    page.getByRole("button", { name: "Current Page, Page" })
  ).toHaveClass("v-pagination__item v-pagination__item--active primary");
});




