import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => { // Her testten önce çalışacak olan bir fonksiyon tanımlıyoruz.
    await page.goto('/'); // Test sırasında belirtilen URL'ye gidiyoruz.

});

// test.describe.configure({ mode: 'parallel' }); // Testlerin paralel olarak çalışmasını sağlıyoruz.

test.describe.parallel('Form Layouts page', () => { // 'Form Layouts' sayfasını tanımlıyoruz.

    test.describe.configure({ retries: 2 }); // Testlerin yeniden deneme sayısını 2 olarak ayarlıyoruz.
    // test.describe.configure({ mode: 'serial' });

    test.beforeEach(async ({ page }) => { // Her testten önce çalışacak olan bir fonksiyon tanımlıyoruz.

        await page.getByText('Forms').click(); // Sayfada 'Forms' metnini bulup tıklıyoruz.
        await page.getByText('Form Layouts').click(); // 'Forms Layouts' metnini bulup tıklıyoruz.

    });

    test('input fields', async ({ page }, testInfo) => { // 'Input fields' testini tanımlıyoruz.

        if (testInfo.retry) { // Eğer test yeniden deneme sayısı varsa
            console.log(`Retrying test: ${testInfo.title} - Attempt: ${testInfo.retry}`); // Konsola yeniden deneme bilgisini yazdırıyoruz.
        }

        const usingTheGridEmailInput = page.locator('nb-card').filter({ hasText: 'Using the Grid' }).getByRole('textbox', { name: 'Email' }); // 'Using the Grid' kartındaki 'Email' alanını buluyoruz.
        await usingTheGridEmailInput.fill('test@test.com');
        await usingTheGridEmailInput.clear(); // 'Email' alanını temizliyoruz.
        await usingTheGridEmailInput.pressSequentially('test2@test.com', { delay: 500 });

        // generic assertions
        const inputValue = await usingTheGridEmailInput.inputValue(); // 'Email' alanının değerini alıyoruz.
        expect(inputValue).toBe('test2@test.com');
        //locator assertions
        await expect(usingTheGridEmailInput).toHaveValue('test2@test.com');

    });

    test('radio buttons', async ({ page }) => { // 'Radio buttons' testini tanımlıyoruz.

        const usingTheGridForm = page.locator('nb-card').filter({ hasText: 'Using the Grid' });
        //await usingTheGridForm.getByLabel('Option 1').check({force:true}); // 'Option 1' seçeneğini işaretliyoruz.
        await usingTheGridForm.getByRole('radio', { name: 'Option 1' }).check({ force: true }); // 'Option 1' seçeneğini işaretliyoruz.

        const radioStatus = await usingTheGridForm.getByRole('radio', { name: 'Option 1' }).isChecked(); // 'Option 1' seçeneğinin işaretli olup olmadığını kontrol ediyoruz.

        expect(radioStatus).toBeTruthy(); // 'Option 1' seçeneğinin işaretli olduğunu doğruluyoruz.
        await expect(usingTheGridForm.getByRole('radio', { name: 'Option 1' })).toBeChecked(); // 'Option 1' seçeneğinin işaretli olduğunu doğruluyoruz.
        await expect(usingTheGridForm.getByRole('radio', { name: 'Option 2' })).not.toBeChecked(); // 'Option 2' seçeneğinin işaretli olmadığını doğruluyoruz.

    });


});

test('checkboxes', async ({ page }) => { // 'Checkboxes' testini tanımlıyoruz.

    await page.getByText('Modal & Overlays').click();
    await page.getByText('Toastr').click();


    // await page.getByRole('checkbox', { name: 'Hide on click' }).uncheck({force:true}); // 'Hide on click' onay kutusunu işaretliyoruz.
    // await page.getByRole('checkbox', { name: 'Prevent arising of duplicate toast' }).check({force:true});

    const allBoxes = page.getByRole('checkbox'); // Tüm onay kutularını alıyoruz.

    for (const box of await allBoxes.all()) { // Her bir onay kutusu için döngü başlatıyoruz.

        await box.check({ force: true }); // Onay kutusunu işaretliyoruz. 
        expect(await box.isChecked()).toBeTruthy(); // Onay kutusunun işaretli olduğunu doğruluyoruz.

    }
});


test('list and dropdown', async ({ page }) => { // 'List and dropdown' testini tanımlıyoruz.

    const dropdownMenu = page.locator('ngx-header nb-select');
    await dropdownMenu.click(); // Dropdown menüsünü tıklıyoruz.

    page.getByRole('list'); // Dropdown menüsündeki listeyi alıyoruz.
    page.getByRole('listitem'); // Dropdown menüsündeki liste öğelerini alıyoruz.

    //const optionList = page.locator('list').locator('nb-option'); // Dropdown menüsündeki seçenekleri alıyoruz.
    const optionList = page.locator('nb-option-list nb-option'); // Dropdown menüsündeki seçenekleri alıyoruz.
    await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"]); // Seçeneklerin metinlerini doğruluyoruz.

    await optionList.filter({ hasText: 'Dark' }).click(); // 'Dark' seçeneğini tıklıyoruz.

    const header = page.locator('nb-layout-header'); // Sayfanın üst kısmındaki başlığı alıyoruz.
    await expect(header).toHaveCSS('background-color', 'rgb(34, 43, 69)'); // Başlığın arka plan rengini doğruluyoruz.

    const colors = {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(34, 43, 69)',
        cosmic: 'rgb(50, 50, 89)',
        corporate: 'rgb(255, 255, 255)'
    }

    await dropdownMenu.click(); // Dropdown menüsünü tıklıyoruz.
    for (const color in colors) { // Renkler için döngü başlatıyoruz.

        await optionList.filter({ hasText: color }).click(); // Renk seçeneğini tıklıyoruz.
        await expect(header).toHaveCSS('background-color', colors[color]); // Başlığın arka plan rengini doğruluyoruz.
        if (color !== 'corporate') { // 'Corporate' seçeneği için özel bir durum
            await dropdownMenu.click(); // Dropdown menüsünü tıklıyoruz.
        }
    }


});

test('toltip', async ({ page }) => { // 'Tooltip' testini tanımlıyoruz.
    await page.getByText('Modal & Overlays').click();
    await page.getByText('Tooltip').click();

    const tooltipCard = page.locator('nb-card', { hasText: 'Tooltip Placements' });
    await tooltipCard.getByRole('button', { name: "Top" }).hover(); // 'Top' butonunu üzerine geliyoruz.

    page.getByRole('tooltip'); // Tooltip öğesini alıyoruz.
    const tooltip = await page.locator('nb-tooltip').textContent(); // Tooltip metnini alıyoruz.
    expect(tooltip).toContain('This is a tooltip'); // Tooltip metninin içeriğini doğruluyoruz.

}); // 'Tooltip' testini tanımlıyoruz.


test('dialog boxes', async ({ page }) => { // 'Dialog boxes' testini tanımlıyoruz.

    await page.getByText('Tables & Data').click(); // 'Modal & Overlays' metnini bulup tıklıyoruz.
    await page.getByText('Smart Table').click(); // 'Dialog' metnini bulup tıklıyoruz.

    page.on('dialog', async dialog => { // Dialog öğesini dinliyoruz.

        expect(dialog.message()).toBe('Are you sure you want to delete?'); // Dialog mesajını doğruluyoruz.
        await dialog.accept(); // Dialog'u kabul ediyoruz.

    });

    await page.getByRole('table').locator('tr', { hasText: "mdo@gmail.com" }).locator(".nb-trash").click();
    await expect(page.locator('table tr').first()).not.toHaveText('mdo@gmail.com');


}); // 'Dialog boxes' testini tanımlıyoruz.


test('web tables', async ({ page }) => { // 'Web tables' testini tanımlıyoruz.

    //1 get the row by any test in this row

    await page.getByText('Tables & Data').click(); // 'Tables & Data' metnini bulup tıklıyoruz.
    await page.getByText('Smart Table').click(); // 'Web Tables' metnini bulup tıklıyoruz.

    const targetRow = page.getByRole('row', { name: "twitter@outlook.com" });
    await targetRow.locator('.nb-edit').click(); // 'Edit' butonunu tıklıyoruz.
    await page.locator('input-editor').getByPlaceholder('Age').clear(); // 'Age' alanını temizliyoruz.
    await page.locator('input-editor').getByPlaceholder('Age').fill('35'); // 'Age' alanına 35 değerini giriyoruz.

    await page.locator('.nb-checkmark').click(); // 'Checkmark' butonunu tıklıyoruz.

    //2 get the row based on the value in specific column
    await page.locator('.ng2-smart-pagination-nav').getByText('2').click(); // '2' sayfasını tıklıyoruz.
    const targetRowById = page.getByRole('row', { name: '11' }).filter({ has: page.locator('td').nth(1).getByText('11') }); // '11' satırını buluyoruz.
    await targetRowById.locator('.nb-edit').click(); // '11' satırını tıklıyoruz.

    await page.locator('input-editor').getByPlaceholder('E-mail').clear(); // 'Age' alanını temizliyoruz.
    await page.locator('input-editor').getByPlaceholder('E-mail').fill('test@gmail.com');
    await page.locator('.nb-checkmark').click(); // 'Checkmark' butonunu tıklıyoruz.

    await expect(targetRowById.locator('td').nth(5)).toHaveText('test@gmail.com');

    //3 test filter of the table

    const ages = ['20', '30', '40', '50', '60', '70', '80', '90'];

    for (let age of ages) { // Yaşlar için döngü başlatıyoruz.

        await page.locator('input-filter').getByPlaceholder('Age').clear(); // 'Age' alanını temizliyoruz.
        await page.locator('input-filter').getByPlaceholder('Age').fill(age);
        await page.waitForTimeout(500); // 500 ms bekliyoruz.

        const ageRows = page.locator('tbody tr'); // 'tbody' içindeki satırları alıyoruz.

        for (let row of await ageRows.all()) { // Her bir satır için döngü başlatıyoruz.

            const cellValue = await row.locator('td').last().textContent(); // 'td' içindeki hücre değerini alıyoruz.

            if (age >= "50") {
                expect(await page.getByRole('table').textContent()).toContain('No data found'); // 'No data found' mesajını doğruluyoruz.
            } else {

                expect(cellValue).toContain(age); // Hücre değerinin yaşı içerdiğini doğruluyoruz.
            }
        }


    }

}); // 'Web tables' testini tanımlıyoruz. 

test('datepicker', async ({ page }) => {

    await page.getByText('Forms').click();
    await page.getByText('Datepicker').click();

    const calendarInputField = page.getByPlaceholder('Form picker')
    await calendarInputField.click();


    let date = new Date();
    date.setDate(date.getDate() + 30)
    const expectedDay = date.getDate().toString()
    const expectedMonthShort = date.toLocaleString('En-US', { month: 'short' })
    const expectedMonthLong = date.toLocaleString('En-US', { month: 'long' })

    const expectedYear = date.getFullYear();
    const dateToAssert = `${expectedMonthShort} ${expectedDay}, ${expectedYear}`

    let calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()
    const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear} `

    while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {

        await page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
        calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()

    }


    await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDay, { exact: true }).click();
    await expect(calendarInputField).toHaveValue(dateToAssert)


    // 2 




}); // 'Datepicker' testini tanımlıyoruz.

test('sliders', async ({ page }) => {

    // Update attribute
    // const tempGauge = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')
    // await tempGauge.evaluate(node => {
    //     node.setAttribute('cx', '232.63')
    //     node.setAttribute('cy', '232.63')
    // })
    // await tempGauge.click();

    //mouse movement
    const tempBox = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger')
    await tempBox.scrollIntoViewIfNeeded()

    const box = await tempBox.boundingBox()

    const x = box.x + box.width / 2
    const y = box.y + box.width / 2

    await page.mouse.move(x, y)
    await page.mouse.down();
    await page.mouse.move(x + 100, y)
    await page.mouse.move(x + 100, y + 100);
    await page.mouse.up();
    await expect(tempBox).toContainText('30')

})


// drag and drop