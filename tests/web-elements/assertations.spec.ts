import {test} from '@playwright/test';
import {expect} from '@playwright/test';

test.beforeEach(async ({page}) => { // Her testten önce çalışacak olan bir fonksiyon tanımlıyoruz.
    await page.goto('http://localhost:4200/'); // Test sırasında belirtilen URL'ye gidiyoruz.
    await page.getByText('Forms').click(); // Sayfada 'Forms' metnini bulup tıklıyoruz.
    await page.getByText('Form Layouts').click(); // 'Forms Layouts' metnini bulup tıklıyoruz.

});

test('Assertions', async ({page}) => { // Bir test tanımlıyoruz ve 'page' nesnesini kullanıyoruz.

    //General Assertions
    const value = 5;
    expect(value).toBe(5); // 'value' değişkeninin 5'e eşit olduğunu kontrol ediyoruz.
    // expect(value).not.toBe(6); // 'value' değişkeninin 6'ya eşit olmadığını kontrol ediyoruz.
    // expect(value).toBeGreaterThan(4); // 'value' değişkeninin 4'ten büyük olduğunu kontrol ediyoruz.
    // expect(value).toBeLessThan(6); // 'value' değişkeninin 6'dan küçük olduğunu kontrol ediyoruz.
    // expect(value).toBeCloseTo(5.1); // 'value' değişkeninin 5.1'e yakın olduğunu kontrol ediyoruz.
    // expect(value).toBeDefined(); // 'value' değişkeninin tanımlı olduğunu kontrol ediyoruz.
    // expect(value).toBeTruthy(); // 'value' değişkeninin doğru bir değer olduğunu kontrol ediyoruz.
    // expect(value).toBeFalsy(); // 'value' değişkeninin yanlış bir değer olduğunu kontrol ediyoruz.
    // expect(value).toBeNaN(); // 'value' değişkeninin NaN (Not a Number) olduğunu kontrol ediyoruz.
    // expect(value).toBeNull(); // 'value' değişkeninin null olduğunu kontrol ediyoruz.
    // expect(value).toBeUndefined(); // 'value' değişkeninin undefined olduğunu kontrol ediyoruz.
    // expect(value).toBeInstanceOf(Number); // 'value' değişkeninin bir Number nesnesi olduğunu kontrol ediyoruz.
    // expect(value).toBeInstanceOf(String); // 'value' değişkeninin bir String nesnesi olduğunu kontrol ediyoruz.
    // expect(value).toBeInstanceOf(Array); // 'value' değişkeninin bir Array nesnesi olduğunu kontrol ediyoruz.
    // expect(value).toBeInstanceOf(Object); // 'value' değişkeninin bir Object nesnesi olduğunu kontrol ediyoruz.
    // expect(value).toBeInstanceOf(Function); // 'value' değişkeninin bir Function nesnesi olduğunu kontrol ediyoruz.
    // expect(value).toBeInstanceOf(Boolean); // 'value' değişkeninin bir Boolean nesnesi olduğunu kontrol ediyoruz.
    // expect(value).toBeInstanceOf(Date); // 'value' değişkeninin bir Date nesnesi olduğunu kontrol ediyoruz.
    // expect(value).toBeInstanceOf(RegExp); // 'value' değişkeninin bir RegExp nesnesi olduğunu kontrol ediyoruz.
    // expect(value).toBeInstanceOf(Error); // 'value' değişkeninin bir Error nesnesi olduğunu kontrol ediyoruz.
    // expect(value).toBeInstanceOf(Map); // 'value' değişkeninin bir Map nesnesi olduğunu kontrol ediyoruz.
    // expect(value).toBeInstanceOf(Set); // 'value' değişkeninin bir Set nesnesi olduğunu kontrol ediyoruz.

    const basicFormButton = page.locator('nb-card').filter({hasText: 'Basic form'}); // 'Basic form' metnini içeren bir nb-card öğesini buluyoruz.
    const buttonText = await basicFormButton.locator('button').textContent(); // 'Basic form' içindeki butonun metnini alıyoruz.
    expect(buttonText).toContain('Submit'); // Butonun metninin 'Submit' içerdiğini kontrol ediyoruz.

    //Locator Assertions
    await expect(basicFormButton).toHaveText('Submit')

    //Soft Assertions
    await expect.soft(basicFormButton).toHaveText('Submit') // 'Basic form' içindeki butonun metninin 'Submit' olduğunu kontrol ediyoruz.
    await basicFormButton.click(); // 'Basic form' içindeki butona tıklıyoruz.
    




});