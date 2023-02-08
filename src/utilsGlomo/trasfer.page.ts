import { PageContext, Page, pageProvider } from "@testing/wdio-page-objects";

const selects = {
	Transferir: `//android.widget.Button[@text="Transferir"]`,
	pagar: `//*[@text="Pagar"]`
}
@PageContext({
	wrapper: `//android.view.View[@resource-id="stepContainer"]`,
	context: 'mobile-android'
})
export class trasfer extends Page {

	trasfer() {
		let bntTrasfer = $(selects.Transferir);
		return bntTrasfer.click();
	}
	payment(){
		let pay = $(selects.pagar);
		return pay.click();	
	}
}