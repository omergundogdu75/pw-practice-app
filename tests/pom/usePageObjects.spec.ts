import {test,expect} from '@playwright/test';
import { NavigationPage } from '../../page-objects/navigationPage';
import { FormsLayoutPage } from '../../page-objects/formLayoutsPage';
import { DatepickerPage } from '../../page-objects/datepickerPage';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/');
})


test('navigate to form page', async ({page})=>{
    
    const navigateTo = new NavigationPage(page);
    await navigateTo.formLayoutPage()
    await navigateTo.datepickerPage()
    await navigateTo.smartTablePage();
    await navigateTo.toastrPage();
    await navigateTo.tooltipPage();

})

test('parameterized method', async ({page})=>{

    const navigateTo = new NavigationPage(page);
    const onFormLaytoutsPage = new FormsLayoutPage(page);
    const onDatepickerPage = new DatepickerPage(page);


    await navigateTo.formLayoutPage();
    await onFormLaytoutsPage.submitUsingTheGridFormWithCreadantialsAndSelectOption('test@test.com','123456','Option 1');
    await onFormLaytoutsPage.submitInlineFormWithNameAndEmail('Jane GND','gnd@test.com',false);

    await navigateTo.datepickerPage();
    await onDatepickerPage.selectCommonDatePickerFromToday(1);

    await onDatepickerPage.selectDatePickerWithRangeFromToday(1,5);
});