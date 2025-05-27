import { test as base } from '@playwright/test';



export type TestOptions = {

    globalSQaUrl?: string;

}


export const test = base.extend<TestOptions>({
    globalSQaUrl: ['', { option: true }], 
});

