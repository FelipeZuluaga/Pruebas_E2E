import { PageContext, Page } from "@testing/wdio-page-objects";

const selectors = {
	principal: `cells-operations-list-indicators[data-select="app__main"] .list` ,
		bntTrasferir: `[data-selector="transfer"]`,
		bntBillPay: `[data-selector="billPayments"]`,
		bntphoneRec: `[data-selector="mobileTopUp"]`,
		bntMas: `[id="viewMoreLink"]`,
		cuentDest: `cells-product-selector-modal[data-select="app__transactional"]`,
	/*----------------- */	
	prinValor: `cells-step-enter-amount[data-select="app__main"] [id="stepContainer"]`,	
		valor: `[aria-label="Valor"]`,
		continue: `[id="enterAmountBtn"]`,
		Trasfer: `cells-operation-summary[data-select="app__confirm"] [id="collapser"] cells-st-button`,
		valid: `cells-successful-response[data-select="app__main"] [data-selector="cells-successful-response-origin-data"]`,
}	
const selectorsVerMas = {
 principal: `[continue="account"] cells-operations-list-indicators ul`,
	PayCard:`li[data-selector="payCard"]`,
	MobileTransfer:`li[data-selector="mobileTransfer"]`,
	MonthlyStatement:`li[data-selector="monthlyStatement"]`,
	CertificatesEnquiryAccounts:`li[data-selector="certificatesEnquiryAccounts"]`,
	cardlessWithdrawal: `li[data-selector="cardlessWithdrawal"]`,
}

@PageContext({
	wrapper: `[class="fullbleed layout vertical"]`,
	context: 'web'
})
export class trasferAccounts extends Page {

	trasfer() {
        $(selectors.principal).$(selectors.bntTrasferir).click();
    }
	paymentServices(){
		$(selectors.principal).$(selectors.bntBillPay).click();
	}
	phoneRecharge(){
		$(selectors.principal).$(selectors.bntphoneRec).click();
	}
	Further(){
		$(selectors.principal).$(selectors.bntMas).click();
	}
	accounts(cuentaDestino: string){
		$(selectors.cuentDest).$(` [data-selector='${cuentaDestino}']`).click();
	}
	opPayaccount(Monto: string) {
        $(selectors.prinValor).$(selectors.valor).addValue(Monto);
        $(selectors.prinValor).$(selectors.continue).click();
    }
	bntTras(){
		$(selectors.Trasfer).click();
	}
	validad(){
		$(selectors.valid).isExisting();
	}
	savids(cuentaLibretón:string){
		$(selectors.cuentDest).$(` [data-selector='${cuentaLibretón}']`).click();
	}
	/*--------------------------VER MAS cuentas Corrientes o ahorros -----------------------------*/
	wiewTrasfs(){
        $(selectorsVerMas.principal).$(selectors.bntTrasferir).click();
    }
	wiewPayCard(){
        $(selectorsVerMas.principal).$(selectorsVerMas.PayCard).click();
    }
	wiewpaymentServices(){
		$(selectorsVerMas.principal).$(selectors.bntBillPay).click();
	}
}