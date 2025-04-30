import {test,expect} from '@playwright/test'; 
import { PageManager } from '../../page-objects/pageManager';

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

    await pm.navigateTo().formLayoutPage();
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCreadantialsAndSelectOption('test@test.com','123456','Option 1');
    await pm.onFormLayoutsPage().submitInlineFormWithNameAndEmail('Jane GND','gnd@test.com',false);
    await pm.navigateTo().datepickerPage();
    await pm.onDatepickerPage().selectCommonDatePickerFromToday(1);
    await pm.onDatepickerPage().selectDatePickerWithRangeFromToday(1,5);
});