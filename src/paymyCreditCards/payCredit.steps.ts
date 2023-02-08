import { Given, Then, When, World } from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { expect } from "chai";
import { PayCredit } from "./payCredit.page";
import { Cardspage } from "../card/card.page";
import { loansContainerAndroidPage } from "../utilsGlomo/card.page";
import { creditcardmodulesPage } from "../utilsGlomo/creditCardModules.page";
import { trasfer } from "../utilsGlomo/trasfer.page";
import { accountsPage } from "../utilsGlomo/utilsAccounts.page";
import { trasferAccounts } from "../trasfersAccounts/TransfersAccounts.page";

export class paymentGPSteps {

    private world: World;

    constructor(world: World) {
        this.world = world;
    }
    get Cardspage() {
        return pageProvider.wait(Cardspage);
    }
    get loansContainerAndroidPage() {
        return pageProvider.wait(loansContainerAndroidPage);
    }
    get trasfer() {
        return pageProvider.wait(trasfer);
    }
    get PayCredit() {
        return pageProvider.wait(PayCredit);
    }
    get creditcardmodulesPage() {
        return pageProvider.wait(creditcardmodulesPage);
    }
    validatePosition(containerPage) {
        expect(pageProvider.wait(containerPage).isCurrent()).to.be.true;
    }
    data(){
        const user = this.world.users.get();
        return user;
    }
    @Then(/^Select credit card$/)
    creditTarj() {
        this.Cardspage.card();
        this.validatePosition(Cardspage);
        this.loansContainerAndroidPage.credit_1(this.data().id2);
        this.validatePosition(loansContainerAndroidPage);
    }
    @Then(/^Go to the option Pay$/)
    PaycreditTarj() {
        this.validatePosition(loansContainerAndroidPage);
    }
    @Then(/^Go to the credit card option$/)
    creditCardOption() {
        this.creditcardmodulesPage.payCard();
        this.validatePosition(creditcardmodulesPage);
    }
    @Then(/^Select the type of payment Other Value$/)
    OtherValue() {
        const Monto: string = this.data().Monto;
        this.PayCredit.opPayCart(Monto);
        this.validatePosition(PayCredit);
    }
    @Then(/^Select the account to be debited$/)
    confirmation() {
        this.PayCredit.bankaccountbbva();
        this.validatePosition(PayCredit);
    }
    @Then(/^Make payment.$/)
    Verify() {
        this.PayCredit.acoust();
        this.trasfer.payment();
        this.PayCredit.validPay();
        this.validatePosition(PayCredit);
    }
    /*------------------ Pago de tarjeta por la opción de Mas --------------*/
    @Then(/^Select a Credit Card$/)
    jkk() {
        this.Cardspage.card();
        this.validatePosition(Cardspage);
        this.loansContainerAndroidPage.credit_1(this.data().id);
        this.validatePosition(loansContainerAndroidPage);
    }
    @Then(/^Go to the lower menu option Pay my card$/)
    Paycredij() {
        this.creditcardmodulesPage.viewMoreLink();
        this.creditcardmodulesPage.wiewPayCard();
        this.validatePosition(creditcardmodulesPage);
    }
    @Then(/^Select the type of payment you will make Minimum payment, Total value, Other value$/)
    Othalue() {
        const Monto: string = this.data().Monto;
        this.PayCredit.opPayCart(Monto);
        this.validatePosition(PayCredit);
    }
    @Then(/^Select the account to debit$/)
    debit() {
        this.PayCredit.bankaccountbbva();
        this.validatePosition(PayCredit);
    }
    @Then(/^Verify data and pay$/)
    Vefy() {
        this.PayCredit.acoust();
        this.loansContainerAndroidPage.btnPagar();
        this.validatePosition(PayCredit);
    }
    /*------------------ Pago de tarjeta por la opción de cuenta ya sea Ahorros o Corriente (Libranton)--------------*/
    @Then(/^I select the checking account$/)
    credirj() {
        pageProvider.wait(accountsPage).currentAccount_1(this.data().idAccount);
    }
    @Then(/^I select More and pay card$/)
    creditption() {
        pageProvider.wait(trasferAccounts).Further();
        pageProvider.wait(trasferAccounts).wiewPayCard();
    }
    @Then(/^Display confirmation screen, the account must come preloaded$/)
    confmation() {
        this.PayCredit.MisTajeBBVVA(this.data().TarjetaAPagar);
    }
    @Then(/^Enter "other value"$/)
    OtValue() {
        const Monto: string = this.data().Monto;
        this.PayCredit.opPayCart(Monto);
        this.validatePosition(PayCredit);
    }
    @Then(/^We will give you Pay and validate the information$/)
    Veify() {
        pageProvider.wait(trasferAccounts).bntTras();
        pageProvider.wait(trasferAccounts).validad();
    }
}