import { PageContext, Page } from "@testing/wdio-page-objects";

const select = {
    Filters:'[id="resultsContainer"] [id="filterButton"] cells-atom-icon[class="icon-size-24"]',
    LocationService:'cells-modal-new-recipient-selector-ar [id="addCardModal"] cells-select-modal',
    ViewResults:'cells-modal-new-recipient-selector-ar[data-select="app__transactional"] cells-confirm-buttons[has-i18n] [class="actions"] cells-st-button',
    NameService:'cells-molecule-input[id="inputViewAll"] [class="field-icons-wrapper"] [id="input"]',
    services:'cells-avatar-item[data-id="0010002383000"][id="0010002383000"]',
    services2:'cells-avatar-item[data-id="0030000030000"][id="0030000030000"]',
    identificationNumber: '[error-message-icon="coronita:alert"] [aria-label="Numero identificacion"]',
    contractNumber:'[error-message-icon="coronita:alert"] [aria-label="Numero contrato"]',
    InvoicePaymentReference:'[error-message-icon="coronita:alert"] [data-selector="input-content"] [aria-label="Numero de formulario"]',
    OptionVoluntaryContribution:'cells-middle-modal [class="md-wrapper "]',
    ContinueInvoicePayment:'cells-st-button[class="secondary"] button',
    Menu:'cells-step[id="stepContainer"] [class="action"] ',
    OptionServicePayment:'cells-step[id="stepContainer"] [slot="full"]'
}

@PageContext({
    wrapper: `[class="fullbleed layout vertical"]`,
    context: 'web'
})
export class BillPaymentAndroidPage extends Page {

    btnModalPayService(){
       driver.back();
    }
    btnFilters(){
        $(select.Filters).click();
    }
    inputLocationService(){
        $(select.LocationService).click();
    }
    btnViewResults(){
        $(select.ViewResults).click();
    }
    inputNameService(nameService: string){
        $(select.NameService).addValue(nameService);
    }
    service(){
        $(select.services).click();
    }
    service2(){
        $(select.services2).click();
    }
    identificationNumber(number: string){
        $(select.identificationNumber).addValue(number);
    }
    contractNumber(number: string){
        $(select.contractNumber).addValue(number);
    }
    btnContinue(){
        browser.keys('Tab');
        browser.keys('Tab');
        browser.keys('Enter');
    }
    inputInvoicePaymentReference(referenceInvoice: string){
        $(select.InvoicePaymentReference).addValue(referenceInvoice);
    }
    clickOptionVoluntaryContribution(){
        $(select.OptionVoluntaryContribution).click();
    }
    btnContinueInvoicePayment(){
        $(select.ContinueInvoicePayment).click();
    }
    elementMenu(element: string) {
        return $(select.Menu).$(`class="action__icon"]:${element}`);
    }

    viewOptionServicePayment(){
        $(select.OptionServicePayment).waitForDisplayed();
    }
    btnOptionServicePayNewBill(){
        this.elementMenu('nth-of-type(1)').click();
    }
    btnOptionServiceScanBarCode(){
        this.elementMenu('nth-of-type(2)').click();
    }
    btnOptionServicePayFavorite(){
        this.elementMenu('nth-of-type(3)').click();
    }
}