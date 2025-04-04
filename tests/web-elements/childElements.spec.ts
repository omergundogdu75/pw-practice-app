import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => { // Her testten önce çalışacak olan bir fonksiyon tanımlıyoruz.
    await page.goto('http://localhost:4200/'); // Test sırasında belirtilen URL'ye gidiyoruz.
    await page.getByText('Forms').click(); // Sayfada 'Forms' metnini bulup tıklıyoruz.
    await page.getByText('Form Layouts').click(); // 'Forms Layouts' metnini bulup tıklıyoruz.

});


test('Locating Child Elements', async ({ page }) => { // Bir test tanımlıyoruz ve 'page' nesnesini kullanıyoruz.

    await page.locator('nb-card nb-radio :text-is("Option 1")').click(); // 'Option 1' seçeneğini bulup tıklıyoruz.
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click(); // 'Option 2' seçeneğini bulup tıklıyoruz.
    await page.locator('nb-card').getByRole('button', { name: 'Sign in' }).first().click(); 

    await page.locator('nb-card').nth(3).getByRole('button').click();

}); 