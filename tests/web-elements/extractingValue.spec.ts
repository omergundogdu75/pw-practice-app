import {test} from '@playwright/test';
import {expect} from '@playwright/test';

test.beforeEach(async ({page}) => { // Her testten önce çalışacak olan bir fonksiyon tanımlıyoruz.
    await page.goto('/'); // Test sırasında belirtilen URL'ye gidiyoruz.
    await page.getByText('Forms').click(); // Sayfada 'Forms' metnini bulup tıklıyoruz.
    await page.getByText('Form Layouts').click(); // 'Forms Layouts' metnini bulup tıklıyoruz.

});
test('Extracting Values', async ({page}) => { // Bir test tanımlıyoruz ve 'page' nesnesini kullanıyoruz.

    //single text value
    const basicForm = page.locator('nb-card').filter({hasText: 'Basic form'}); // 'Basic form' metnini içeren bir nb-card öğesini buluyoruz.
    const buttonText = await basicForm.locator('button').textContent(); // 'Basic form' içindeki butonun metnini alıyoruz.
    expect(buttonText).toContain('Submit'); // Butonun metninin 'Submit'  içerdiğini kontrol ediyoruz.

    // All text values
    const allTextContents = await page.locator('nb-radio').allTextContents();
    expect(allTextContents).toContain("Option 1");

    //input value
    const emailField = basicForm.getByRole('textbox', {name: "Email"});
    await emailField.fill('omer@email.com');

    const inputValue = await emailField.inputValue(); // 'Email' alanının değerini alıyoruz.
    expect(inputValue).toBe("omer@email.com");

    const placeholderValue = await emailField.getAttribute('placeholder'); // 'Email' alanının placeholder değerini alıyoruz.
    expect(placeholderValue).toBe("Email");

    
});