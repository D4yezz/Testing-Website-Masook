// @ts-check
import { test, expect } from "@playwright/test";

test("Fitur Map (TC001)", async ({ page }) => {
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
  await page.getByRole("link", { name: "Analitik" }).click();
  await expect(page.getByText("5+−Leaflet")).toBeVisible();
  await page.getByRole("button", { name: "Zoom in" }).click();
  await page.getByRole("button", { name: "Zoom out" }).click();
});

test("Diagram Perangkat Instansi (TC002)", async ({ page }) => {
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
  await page.getByRole("link", { name: "Analitik" }).click();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^Top 5 Penggunaan Perangkat Instansi$/ })
      .nth(4)
  ).toBeVisible();
  await page
    .locator("canvas")
    .first()
    .click({
      position: {
        x: 64,
        y: 11,
      },
    });
  await page
    .locator("canvas")
    .first()
    .click({
      position: {
        x: 63,
        y: 39,
      },
    });
  await page
    .locator("canvas")
    .first()
    .click({
      position: {
        x: 71,
        y: 63,
      },
    });
  await page
    .locator("canvas")
    .first()
    .click({
      position: {
        x: 62,
        y: 84,
      },
    });
  await page
    .locator("canvas")
    .first()
    .click({
      position: {
        x: 259,
        y: 61,
      },
    });
  await expect(page.locator("canvas").first()).toBeEmpty();
});

test("Diagram Keaktifan Perangkat (TC003)", async ({ page }) => {
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
  await page.getByRole("link", { name: "Analitik" }).click();
  await expect(
    page.getByText("Perangkat Instansi", { exact: true })
  ).toBeVisible();
  await page.locator('canvas').nth(1).click({
    position: {
      x: 18,
      y: 9
    }
  });
  await page.locator('canvas').nth(1).click({
    position: {
      x: 16,
      y: 34
    }
  });

});

test("Diagram Jenis Kelamin (TC004)", async ({ page }) => {
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
    await page.getByRole("link", { name: "Analitik" }).click();
await expect(page.getByText('Jenis Kelamin')).toBeVisible();
await page.locator('canvas').nth(2).click({
    position: {
      x: 16,
      y: 13
    }
  });
await page.locator('canvas').nth(2).click({
    position: {
      x: 14,
      y: 36
    }
  });
await expect(page.locator('canvas').nth(2)).toBeEmpty();
  });
