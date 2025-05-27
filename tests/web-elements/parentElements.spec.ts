import { test } from '@playwright/test';


test.beforeEach(async ({ page }) => { // Her testten önce çalışacak olan bir fonksiyon tanımlıyoruz.
    await page.goto('/'); // Test sırasında belirtilen URL'ye gidiyoruz.
    await page.getByText('Forms').click(); // Sayfada 'Forms' metnini bulup tıklıyoruz.
    await page.getByText('Form Layouts').click(); // 'Forms Layouts' metnini bulup tıklıyoruz.

});



test('Locating Parent Elements', async ({ page }) => { // Bir test tanımlıyoruz ve 'page' nesnesini kullanıyoruz.

     await page.locator('nb-card',{hasText:'Using the Grid'}).getByRole('textbox',{name:"Email"}).click();
     await page.locator('nb-card',{has: page.locator('#inputEmail1')}).getByRole('textbox',{name:"Email"}).click();

      await page.locator('nb-card').filter({hasText:'Basic form'}).getByRole('textbox',{name:"Email"}).click();
      await page.locator('nb-card').filter({has:page.locator('.status-danger')}).getByRole('textbox',{name:"Password"}).click();

      await page.locator('nb-card').filter({has:page.locator('nb-checkbox')}).filter({hasText:'Sign in'})
      .getByRole('textbox',{name:"Email"}).click();

    //not recommended
    await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox',{name:"Email"}).click();
});