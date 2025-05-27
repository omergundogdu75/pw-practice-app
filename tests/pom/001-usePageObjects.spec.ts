import {test,expect} from '@playwright/test'; 
import { PageManager } from '../../page-objects/pageManager';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/');
})


test('navigate to form page', async ({page})=>{

    const pm = new PageManager(page);
    
    await pm.navigateTo().formLayoutPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage();
    await pm.navigateTo().toastrPage();
    await pm.navigateTo().tooltipPage();

})

test('parameterized method', async ({page})=>{

    const pm = new PageManager(page);
    const randomFullName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    const randomPassword = faker.internet.password();

    await pm.navigateTo().formLayoutPage();
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCreadantialsAndSelectOption('test@test.com','123456','Option 1');
    await page.screenshot({path: 'screenshots/form-layouts.png'});
    const buffer = await page.screenshot();
    console.log(buffer.toString('base64')); // Log the screenshot as a base64 string
    await pm.onFormLayoutsPage().submitInlineFormWithNameAndEmail(randomFullName,randomEmail,false);
    await page.locator('nb-card',{hasText: "Inline form" }).screenshot({path: 'screenshots/inline-form.png'});
    // await pm.navigateTo().datepickerPage();
    // await pm.onDatepickerPage().selectCommonDatePickerFromToday(1);
    // await pm.onDatepickerPage().selectDatePickerWithRangeFromToday(1,5);
});