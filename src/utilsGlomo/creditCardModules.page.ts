import { PageContext, Page } from "@testing/wdio-page-objects";

const selects = {
   principal: `[id="cells-template-card"] cells-operations-list-indicators ul`, 
    payCards:`li[data-selector="payCard"]`,
    CardPin:`li[data-selector="changeCardPin"]`,
    monthlyStat:`li[data-selector="monthlyStatement"]`,
    MoreLink:`li:nth-of-type(4) button[id="viewMoreLink"]`,
  main2:`[continue="card"] cells-operations-list-indicators ul`, 
    wiewPayments:`li[data-selector="paymentsScheduled"]`,
    instantCash:`li[data-selector="instantCashCard"]`
}
@PageContext({
    wrapper: `[class="fullbleed layout vertical"]`,
    context: 'web'
})
export class creditcardmodulesPage extends Page {

    payCard(){
        let PagarTarjeta = $(selects.principal).$(selects.payCards);
        return PagarTarjeta.click();
    }
    /*------------- */
    changeCardPin(){
        let cambiarPinTarjeta = $(selects.principal).$(selects.CardPin);
        return cambiarPinTarjeta.click();
    }
    /*------------- */
    monthlyStatement(){
        let estado_mensual = $(selects.principal).$(selects.monthlyStat);
        return estado_mensual.click();
    } 
    /*------------- */
    viewMoreLink(){
        let verMásEnlace = $(selects.principal).$(selects.MoreLink);
        return verMásEnlace.click();
    }
    
    /*-------------   Modulo de ver mas --------------------*/

    wiewPayCard(){
        let wiewPay = $(selects.main2).$(selects.payCards);
        return wiewPay.click();
    }
    wiewChangeCardPin(){
        let wiewChange = $(selects.main2).$(selects.CardPin);
        return wiewChange.click();
    }
    wiewMonthlyStatement(){
        let wiewMonthlyS = $(selects.main2).$(selects.monthlyStat);
        return wiewMonthlyS.click();
    }
    wiewPaymentsScheduled(){
        let wiewPaymentsS = $(selects.main2).$(selects.wiewPayments);
        return wiewPaymentsS.click();
    }
    wiewPaymentsScheduledValid(){
        $(selects.main2).$(selects.wiewPayments).isExisting();
    }
    instantCashCard(){
        let InstantCashC = $(selects.main2).$(selects.instantCash);
        return InstantCashC.click();
    }
}