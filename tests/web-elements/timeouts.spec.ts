import {test} from '@playwright/test';
import {expect} from '@playwright/test';

test.beforeEach(async ({page},testInfo) => { // Her testten önce çalışacak olan bir fonksiyon tanımlıyoruz.
    await page.goto('http://www.uitestingplayground.com/ajax/'); // Test sırasında belirtilen URL'ye gidiyoruz.
    await page.getByText('Button Triggering AJAX Request').click(); 

    testInfo.setTimeout(testInfo.timeout + 5000); // Testin süresini 5 saniye artırıyoruz.

});


test('Timeouts', async ({page}) => { // Bir test tanımlıyoruz ve 'page' nesnesini kullanıyoruz.

    const successButton = page.locator('.bg-success'); // 'Success' butonunu buluyoruz.
    await successButton.click({timeout: 5000}); // 'Success' butonuna tıklıyoruz ve 5 saniye bekliyoruz.


}); // Testin sonunu belirtiyoruz.

test('Timeouts2', async ({page}) => { // Bir test tanımlıyoruz ve 'page' nesnesini kullanıyoruz.

    test.setTimeout(10000); // Testin süresini 10 saniye olarak ayarlıyoruz.
    test.slow(); // Testin yavaş olduğunu belirtiyoruz.


}); // Testin sonunu belirtiyoruz.