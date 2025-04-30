import { Page } from "@playwright/test";

export class FormsLayoutPage{

    private readonly page: Page;

    constructor(page:Page){
        this.page = page;

    }

    async submitUsingTheGridFormWithCreadantialsAndSelectOption(email:string, password:string, optionText:string ){
        const usingTheGridForm = this.page.locator('nb-card').filter({ hasText: 'Using the Grid' });
        await usingTheGridForm.getByRole('textbox', { name: 'Email' }).fill(email);
        await usingTheGridForm.getByRole('textbox', { name: 'Password' }).fill(password);
        await usingTheGridForm.getByRole('radio', { name: 'Option 1' }).check({force:true});
        await usingTheGridForm.getByRole('button').click();
    }


    /**
     * This method is used to submit the inline form with name and email.
     * @param name - shold be first and last name
     * @param email - should be a valid email address
     * @param rememberMe - should be true or false
     */
    async submitInlineFormWithNameAndEmail(name:string, email:string, rememberMe: boolean){

        const inlineForm = this.page.locator('nb-card').filter({ hasText: 'Inline form' });
        await inlineForm.getByRole('textbox', { name: 'Jane Doe' }).fill(name);
        await inlineForm.getByRole('textbox', { name: 'Email' }).fill(email);

        if (rememberMe) {

            await inlineForm.getByRole('checkbox').check({force:true});
            await inlineForm.getByRole('button').click();
            
        }

    }



}