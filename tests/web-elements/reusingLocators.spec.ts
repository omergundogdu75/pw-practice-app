import { expect, test } from '@playwright/test';


test.beforeEach(async ({ page }) => { // Her testten önce çalışacak olan bir fonksiyon tanımlıyoruz.
    await page.goto('http://localhost:4200/'); // Test sırasında belirtilen URL'ye gidiyoruz.
    await page.getByText('Forms').click(); // Sayfada 'Forms' metnini bulup tıklıyoruz.
    await page.getByText('Form Layouts').click(); // 'Forms Layouts' metnini bulup tıklıyoruz.

});

test('Reusing Locators', async ({ page }) => { // Bir test tanımlıyoruz ve 'page' nesnesini kullanıyoruz.

    const basicForm = page.locator('nb-card').filter({ hasText: 'Basic form' }); // 'Basic form' metnini içeren bir nb-card öğesini buluyoruz.
    const emailField = basicForm.getByRole('textbox', { name: "Email" }); // 'Email' alanını buluyoruz.
    const passwordField = basicForm.getByLabel('Password'); // 'Password' alanını buluyoruz.
    const signInButton = basicForm.getByRole('button'); // 'Sign in' butonunu buluyoruz.

    await emailField.fill('omer@gmail.com');
    await passwordField.fill('123');
    await basicForm.locator('nb-checkbox').click(); // 'Remember me' onay kutusunu tıklıyoruz.
    await signInButton.click();

     await expect(emailField).toHaveValue('omer@gmail.com')

});