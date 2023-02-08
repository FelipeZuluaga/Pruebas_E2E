import { PageContext, Page } from "@testing/wdio-page-objects";

const selects ={
    modalburger : `//android.widget.Button[@resource-id="btnRight"]`,
    salir: `//android.widget.TextView[@text="Salir"]`
}
@PageContext({
    wrapper: `//android.view.View`,
    context: 'mobile-android'
})
export class Sign_offPage extends Page {

    Signoff() {
        $(selects.modalburger).click();
        $(selects.salir).click();
    }
}