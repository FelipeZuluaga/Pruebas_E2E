import { PageContext, Page } from "@testing/wdio-page-objects";

const selectors = {
    cardsTarje: `[id="cards"]`,
    Operative: 'glomo-operations-list-group[continue="card"] cells-operations-list-indicators cells-operations-list .list [data-selector="paymentsScheduled"]',
    buton: 'button',
    bntEntendido: 'glomo-alert-manager[data-select="app__transactional"] [id="modal"] [vertical-align="bottom"] [slot="buttons"] [id="acceptButton"]',
    typeC: 'glomo-alert-manager[data-select="app__transactional"]',
    headerError: 'glomo-alert-manager[data-select="app__transactional"] [id="modal"] .paragraph-template',
    fulldata: `[id="fillUserData"] [class="full"]`,
    numcuenta: `[id="fillUserData"] [id="accountNumber"] [id="input"]`,
    radiobnt: `[id="cells-step-radio-buttons"] [radio-accepted-button-type="cells-radio-button-description"]`,
    bntContinuar: ` [id="continueButton"]`,
    continuar: `[id="cells-step-radio-buttons"] [id="stepContainer"]`,
    TerminosyCondiciones: `cells-step-legal-terms [id="saveCheck"] [id="checkbox"]`,
    cardpannumber: 'cells-product-summary-cardorange .orange-card-box__overlay-info [data-selector="card-pan-number"]',
    cardDetailButton: 'cells-product-summary-cardorange cells-st-button:nth-of-type(2) [id="cardDetailButton"]',
    maintitle: `cells-product-more-info .content [data-selector="main-title-3"]`,
    bntContTerCondi: 'cells-step-legal-terms [class="btn-message__buttons"] cells-st-button',
};
const validProce ={
 padre:'cells-successful-response [id="body-section"] [data-selector="cells-successful-response-top-info"] ',
    header:'[id="cells-template-automaticCreditCardPaymentReview"] cells-molecule-header',
    cardImag: 'cells-successful-response [data-selector="cells-successful-response-main-title"]',
    cardNum:'li:nth-of-type(1)',
    availableAmount:'li:nth-of-type(2)',
    minimumAmountPayment: 'li:nth-of-type(4)',
    operationDate:'li:nth-of-type(3)',
    exitButton:'button=Salir',
    bank:'li:nth-of-type(3)',
    accountType: 'li:nth-of-type(4)',
    accountNumber: 'li:nth-of-type(5)',
    accountContinueButton: 'cells-successful-response [id="banner"]',
}
@PageContext({
    wrapper: `[class="fullbleed layout vertical"]`,
    context: 'web'
})
export class Cardspage extends Page {


    card() {
        return $(selectors.cardsTarje).click();
    }
    tipo_Credito({ tipo, credito }) {
        switch (tipo) {
            case 'status':
                $(selectors.Operative).isExisting();
                let operative = $(selectors.Operative).$(selectors.buton).isExisting();
                return operative == credito;

            case 'automaticPayment':
                $(selectors.Operative).isExisting();
                let no = false;
                return no == credito;

            case 'additional':
                let not = false;
                return not == credito;

            case 'participantType':
                $(selectors.typeC).isExisting();
                let header = $(selectors.typeC);
                return header = credito;
        }
    }
    bntentedi({ item }) {
        switch (item) {
            case 'Understood Button':
                $(selectors.headerError).isExisting();
                $(selectors.bntEntendido).isExisting();
                break;
        }
    }
    bank(bank: string) {
        $(selectors.fulldata).$(` [id='${bank}']`).click();
    }
    tipoCuenta(accountType: string) {
        $(selectors.fulldata).$(` [id='${accountType}']`).click();
    }
    NumCuentaBanco(numCuenta: string) {
        $(selectors.numcuenta).addValue(numCuenta);
        $(selectors.fulldata).$(selectors.bntContinuar).click();
    }
    radiobntInteto1(numberAttempts: string) {
        $(selectors.radiobnt).$(` [data-selector='${numberAttempts}']`).click();
    }
    bntcontinue() {
        $(selectors.continuar).$(selectors.bntContinuar).click();
    }
    TerCond() {
        $(selectors.TerminosyCondiciones).click();
        $(selectors.bntContTerCondi).click();
    }
    ValidadProcess({ item }) {
        switch (item) {
            case 'header':
                $(validProce.header).isExisting();
                break;
            case 'card image':
                $(validProce.cardImag).isExisting();
                break;
            case 'card number':
                $(validProce.padre).$(validProce.cardNum).isExisting();
                break;
            case 'available amount':
                $(validProce.padre).$(validProce.availableAmount).isExisting();
                break;
            case 'minimum amount payment':
                $(validProce.padre).$(validProce.minimumAmountPayment).isExisting();
                break;
            case 'operation date':
                $(validProce.padre).$(validProce.operationDate).isExisting();
                break;
            case 'exit button':
                $(validProce.exitButton).isExisting();
                break;
            case 'bank':
                $(validProce.padre).$(validProce.bank).isExisting();
                break;
            case 'account type':
                $(validProce.padre).$(validProce.accountType).isExisting();
                break;
            case 'account number':
                $(validProce.padre).$(validProce.accountNumber).isExisting();
                break;
            case 'account continue button':
                $(validProce.accountContinueButton).isExisting();
                break;
        }
    }
}