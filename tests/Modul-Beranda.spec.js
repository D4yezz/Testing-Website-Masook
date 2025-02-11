import { test, expect } from "@playwright/test";

test("Beranda(TC001)", async ({ page }) => {

    test.setTimeout(60000);
    await page.goto('https://sim.dev.masook.id/#/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
    await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByText('Jayantara Indonesia').click();
    await page.goto('https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU');
    await page.getByRole('link', { name: 'Beranda' }).click();

    //menuju informasi analitik
    await page.getByRole('listitem').filter({ hasText: 'Informasi Analitik Informasi' }).click();
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/analitik/ORG-BPDZNU');
    await page.getByRole('link', { name: 'Beranda' }).click();
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU');

    //menuju konfigurasi umum
    await page.getByRole('listitem').filter({ hasText: 'Konfigurasi Umum Konfigurasi' }).click();
    await expect(page).toHaveURL('https://sim.dev.masook.id/#/organisasi/ORG-BPDZNU?mode=popup');
    await page.getByRole('button', { name: 'Lewati' }).click();
    await page.getByRole('banner').getByRole('button').filter({ hasText: /^$/ }).click();
    await page.getByRole('link', { name: 'Beranda' }).click();
    await page.goto('https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU');

    //menuju tab baru apk masook mobile
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('list').filter({ hasText: 'Aplikasi Mobile Masook Anda' }).click();
    const page1 = await page1Promise;

    //menuju tab baru Situs Bantuan informasi
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('listitem').filter({ hasText: 'Situs Bantuan Informasi' }).locator('div').nth(1).click();
    const page2 = await page2Promise;
  });
  