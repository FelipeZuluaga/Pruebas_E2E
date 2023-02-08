import { PageContext, Page } from "@testing/wdio-page-objects";
const selectors = {
    bntApagar: `cells-product-summary-cardorange[slot="app__main"] [id="headerButtonsBox"] cells-st-button [name="left-button"]`,
    modalApagar: 'glomo-alert-manager [id="acceptButton"]',
}
@PageContext({
    wrapper: `[class="fullbleed layout vertical"]`,
    context: 'web'
})
export class on_Off extends Page {
	
	toTurnOff(){
		$(selectors.bntApagar).click();
	}
    dev(){
       $(selectors.modalApagar).click();
    }
}
