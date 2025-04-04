import { test } from '@playwright/test';


test.beforeEach(async ({ page }) => { // Her testten önce çalışacak olan bir fonksiyon tanımlıyoruz.
    await page.goto('http://localhost:4200/'); // Test sırasında belirtilen URL'ye gidiyoruz.
    await page.getByText('Forms').click(); // Sayfada 'Forms' metnini bulup tıklıyoruz.
    await page.getByText('Form Layouts').click(); // 'Forms Layouts' metnini bulup tıklıyoruz.

});
test('User facing locators', async ({ page }) => { // Bir test tanımlıyoruz ve 'page' nesnesini kullanıyoruz.

    await page.getByRole('textbox', { name: 'Email' }).first().click(); // 'Email' metnini bulup tıklıyoruz.
    await page.getByRole('button', { name: 'Sign in' }).first().click(); // 'Sign in' butonunu bulup tıklıyoruz.

    await page.getByLabel('Email').first().click(); // 'Email' etiketini bulup tıklıyoruz.
    await page.getByPlaceholder('Jane Doe').click(); // 'Jane Doe' yer tutucusunu bulup tıklıyoruz.

    await page.getByText('Using the Grid').click(); // 'Using the Grid' metnini bulup tıklıyoruz. 

    //await page.getByTitle('IoT Dashboard').click(); // 'IoT Dashboard' başlığını bulup tıklıyoruz.

    await page.getByTestId('SignIn').click(); // 'SignIn' test kimliğini bulup tıklıyoruz.


}); // Testin sonunu belirtiyoruz.