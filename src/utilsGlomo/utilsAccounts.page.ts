import { PageContext, Page } from "@testing/wdio-page-objects";


@PageContext({
    wrapper: `//global-products-list`,
    context: 'mobile-android'
})
export class accountsPage extends Page {

    currentAccount_1(idAccount:string) {
        let  account = $(`//*[@resource-id='${idAccount}']`);
        return account.click();
    }
}

