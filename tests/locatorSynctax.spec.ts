import {test} from '@playwright/test';



test.beforeEach(async ({ page }) => { // Her testten önce çalışacak olan bir fonksiyon tanımlıyoruz.
    await page.goto('http://localhost:4200/'); // Test sırasında belirtilen URL'ye gidiyoruz.
    await page.getByText('Forms').click(); // Sayfada 'Forms' metnini bulup tıklıyoruz.
    await page.getByText('Form Layouts').click(); // 'Forms Layouts' metnini bulup tıklıyoruz.
    
});


test('Locator Syntax', async ({ page }) => { // Bir test tanımlıyoruz ve 'page' nesnesini kullanıyoruz.

    //by tag name
    await page.locator('input').first().click();

    //by id
    await page.locator('#inputEmail1').click();

    //by class value
    await page.locator('.input-full-width');

    //by attribute name
    await page.locator('[placeholder="Email"]');

    //by class value full
    await page.locator('[class="input-full-width size-medium shape-rectangle"]');

    //combine diffrent selectors
    await page.locator('input[placeholder="Email"][nbinput]');

    //by xpath - not recommended
    await page.locator('//input[@placeholder="Email"]');

    //by partial text match
    await page.locator(':text("Using")');

    //by exact text match
    await page.locator(':text-is("Using the Grid")');



    




}); // Testin sonunu belirtiyoruz.

