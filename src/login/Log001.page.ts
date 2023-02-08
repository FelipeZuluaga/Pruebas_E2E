import { PageContext, Page } from "@testing/wdio-page-objects";


const select = {
    header: '//*[@resource-id="co.com.bbva.mb.dev:id/loginHeader"]',
    type_input: '//*[@resource-id="co.com.bbva.mb.dev:id/documentSpinner"]',
    number_input: `//*[@resource-id="co.com.bbva.mb.dev:id/editText"]`,
    input: '//*[@resource-id="co.com.bbva.mb.dev:id/hintTextView"]',
    button_disabled: `//*[@resource-id="co.com.bbva.mb.dev:id/nextButton"]`,
}
@PageContext({
    wrapper: `/hierarchy/android.widget.FrameLayout`,
    context: 'mobile-android'
})
export class LogicaLOG001 extends Page {

    ValidadDocument({ item }) {
        switch (item) {
            case 'Login header':
                $(select.header).isExisting()
                break;
            case 'Document type input':
                $(select.type_input).isExisting()
                break;
            case 'Document number input':
                $(select.number_input).isExisting()
                break;
            case 'Continue button disabled':
                $(select.button_disabled).isExisting()
                break;
        }
    }
}