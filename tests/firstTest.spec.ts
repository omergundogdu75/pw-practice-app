import { test } from '@playwright/test';


test.describe('My first test suite 1', () => { // Test grubu tanımlıyoruz.

    test.beforeEach(async ({ page }) => { // Her testten önce çalışacak olan bir fonksiyon tanımlıyoruz.
        await page.goto('/'); // Test sırasında belirtilen URL'ye gidiyoruz.
        await page.getByText('Forms').click(); // Sayfada 'Forms' metnini bulup tıklıyoruz.
    });


    test('The first test', async ({ page }) => { // Bir test tanımlıyoruz ve 'page' nesnesini kullanıyoruz.
        await page.getByText('Form Layouts').click(); // 'Forms Layouts' metnini bulup tıklıyoruz.
    });


    test('navigete to datepicker', async ({ page }) => { // İkinci bir test tanımlıyoruz.
        await page.getByText('Datepicker').click(); // 'Datepicker' metnini bulup tıklıyoruz.
    }); // Testin sonunu belirtiyoruz.


    test.afterEach(async ({ page }) => { // Her testten sonra çalışacak olan bir fonksiyon tanımlıyoruz.
        await page.close(); // Sayfayı kapatıyoruz.
    }
    );

}); // Test grubunun sonunu belirtiyoruz.

