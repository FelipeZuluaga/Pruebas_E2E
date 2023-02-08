import { When, Then, World } from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { trasferAccounts } from "../trasfersAccounts/TransfersAccounts.page";
import { BillPaymentAndroidPage } from "./modalBillPayment.page";
import { btnContinueValuePage } from "./btnContinueValue.page";
import { accountsPage } from "../utilsGlomo/utilsAccounts.page";

export class billPaymentsSteps {
    
    private world: World;

    constructor(world: World) {
        this.world = world;
    }

    get trasferAccounts(){
        return pageProvider.wait(trasferAccounts);
    }
    get BillPaymentAndroidPage(){
        return pageProvider.wait(BillPaymentAndroidPage);
    }
    get btnContinueValuePage(){
        return pageProvider.wait(btnContinueValuePage);
    }
    data(){
        const dataManager = this.world.users.get();
        return dataManager;
    }

    /*  @BILLP001 */ 
    @When(/^the user access to dashboard$/)
    productsGP(){
        pageProvider.wait(accountsPage).currentAccount_1(this.data().idAccount);
    }
    @When(/^the user navigates to billPayments page from account$/)
    selectAccount(){
        this.trasferAccounts.paymentServices();
        this.BillPaymentAndroidPage.btnModalPayService();
    }
    @Then(/^sees the following items in the screen$/)
    viewOptions(){
        this.BillPaymentAndroidPage.viewOptionServicePayment();
    }
    /*  @BILLP002 */
    @Then(/^filters search by "Norte de Santander" location$/)
    filterLocation(){
        this.BillPaymentAndroidPage.btnOptionServicePayNewBill();
        this.BillPaymentAndroidPage.btnFilters();
        this.btnContinueValuePage.inputLocationService();
        this.btnContinueValuePage.selectDepartment();
        this.BillPaymentAndroidPage.btnViewResults();
        this.btnContinueValuePage.showServices();
    }

    /* @BILLP003 */
    @Then(/^the user remove the filter$/)
    removeFilters(){
        this.btnContinueValuePage.removeFilters();
    }
    /* @BILLP004 */ 
    @Then(/^the user navigates to pay new service from account$/)
    seesItems(){
        this.trasferAccounts.paymentServices();
        this.BillPaymentAndroidPage.btnModalPayService();
    }
    @When(/^searches for a service with the following criteria$/)
    addNameService(){
        this.BillPaymentAndroidPage.btnOptionServicePayNewBill();
        this.BillPaymentAndroidPage.inputNameService(this.data().service);
        this.BillPaymentAndroidPage.service();
        this.BillPaymentAndroidPage.identificationNumber(this.data().reference);
        this.BillPaymentAndroidPage.contractNumber(this.data().sender);
        this.BillPaymentAndroidPage.btnContinue(); 
    }
    @When(/^the user accepts the amount$/)
    formAcept(){
        this.btnContinueValuePage.btnContinueValue();
        this.btnContinueValuePage.btnPayment();
    }
    /* @BILLP006 */
    @When(/^user searches for a service with the following criteria$/)
    addNameService2(){
        this.BillPaymentAndroidPage.btnOptionServicePayNewBill();
        this.BillPaymentAndroidPage.inputNameService(this.data().service2);
        this.BillPaymentAndroidPage.service2();
        this.BillPaymentAndroidPage.inputInvoicePaymentReference(this.data().reference2);
        this.btnContinueValuePage.hideKeyAndroid();
        this.BillPaymentAndroidPage.btnContinue();
        this.BillPaymentAndroidPage.clickOptionVoluntaryContribution();
        this.BillPaymentAndroidPage.btnContinue(); 
    }
}