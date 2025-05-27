import {test} from '@playwright/test';
import {expect} from '@playwright/test';

test.beforeEach(async ({page}) => { // Her testten önce çalışacak olan bir fonksiyon tanımlıyoruz.
    await page.goto('http://www.uitestingplayground.com/ajax/'); // Test sırasında belirtilen URL'ye gidiyoruz.
    await page.getByText('Button Triggering AJAX Request').click(); 

});

test.skip('Auto Waiting', async ({page}) => { // Bir test tanımlıyoruz ve 'page' nesnesini kullanıyoruz.
   
    
    const successButton = page.locator('.bg-success'); // 'Success' butonunu buluyoruz.
    //await successButton.click(); // 'Success' butonuna tıklıyoruz.
      
   // const text = await successButton.textContent(); // 'Success' butonunun metnini alıyoruz.
//    await successButton.waitFor({state:'attached'}); // 'Success' butonunun sayfada görünür olmasını bekliyoruz.

    
//     const allTextContents = await successButton.allTextContents(); // 'Success' butonunun tüm metin içeriklerini alıyoruz.

    
//     expect(allTextContents).toContain('Data loaded with AJAX get request.'); // Butonun metninin 'Data loaded with AJAX get request' içerdiğini kontrol ediyoruz.

    await expect(successButton).toHaveText('Data loaded with AJAX get request.',{timeout:20000}); // 'Success' butonunun metninin 'Data loaded with AJAX get request' olduğunu kontrol ediyoruz.


});

test.skip('alternative auto waiting', async ({page}) => { // Bir test tanımlıyoruz ve 'page' nesnesini kullanıyoruz.
    const successButton = page.locator('.bg-success'); // 'Success' butonunu buluyoruz.


    //____Waiting for element____
    //await page.waitForSelector('.bg-success'); // 'Success' butonunun sayfada görünür olmasını bekliyoruz.

    // wait for particular response
    //await page.waitForResponse('http://www.uitestingplayground.com/ajaxdata'); // Belirli bir yanıtı bekliyoruz.

    // wait for networks calls tobe completed - not recommended
    await page.waitForLoadState('networkidle'); // Tüm ağ çağrılarının tamamlanmasını bekliyoruz. Bu yöntem önerilmez.

    const text = await successButton.textContent(); // 'Success' butonunun metnini alıyoruz.

    await expect(text).toContain('Data loaded with AJAX get request.'); // 'Success' butonunun metninin 'Data loaded with AJAX get request' olduğunu kontrol ediyoruz.

});
