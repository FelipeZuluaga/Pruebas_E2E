import { PageContext, Page } from "@testing/wdio-page-objects";

const selectors ={
    cuentaBBVA : `[id="cells-template-cardCreditCardPayment"] cells-step-link-list[id="cells-step-link-list"] [slot="full"] cells-link-list`,
    accounts : `cells-product-selector-modal [id="modal"] .stack.product-spacing.product-number-size-ml`,
    ValidadPago: `[id="cells-template-creditCardPaymentReview"] cells-successful-response cells-contact-avatar`,
    amountcards: `cells-step-enter-amount-credit-card[data-select="app__main"]`,
    radiobntOtrovalor: `cells-radio-button:nth-of-type(3)`,
    inputValor: `cells-enter-limited-amount[id="localOtherAmount"]`,
    bntContinuar: `[id="singleDebtContinueButton"]`,
    MisTarjetasBBVA: `cells-step-recipient-selector[id="account-own-credit-card-payment"] [aria-label="Mis tarjetas BBVA"]`,
    app__transactional :`cells-product-selector-modal[data-select="app__transactional"]`
}

@PageContext({
    wrapper: `[class="fullbleed layout vertical"]`,
    context: 'web'
})
export class PayCredit extends Page {
	
	bankaccountbbva(){
        $(selectors.cuentaBBVA).click();
    }
	acoust(){
		$(selectors.accounts).click();
	}
    validPay(){
        $(selectors.ValidadPago).waitForDisplayed();
        $(selectors.ValidadPago).click();
    
    }
    opPayCart(Monto: string) {
        $(selectors.amountcards).$(selectors.radiobntOtrovalor).click();
        $(selectors.amountcards).$(selectors.inputValor).addValue(Monto);
        $(selectors.amountcards).$(selectors.bntContinuar).click();
    }
    MisTajeBBVVA(TarjetaAPagar: string){
        $(selectors.MisTarjetasBBVA).click();
        $(selectors.app__transactional).$(` [data-selector='${TarjetaAPagar}']`).click();
    }
}