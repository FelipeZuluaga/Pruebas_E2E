import { Given,Then, When, World } from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { expect } from "chai";
import { TableDefinition } from "cucumber";
import { Cardspage } from "./card.page";
import { loansContainerAndroidPage }from "../utilsGlomo/card.page";
import { creditcardmodulesPage }from "../utilsGlomo/creditCardModules.page";
import { LoginContainerAndroidPage }from "../login/login.page";
import { WelcomeContainerAndroidPage } from "../welcome/welcome-android.page";

export class CardsSteps {
    /* ---------------------------*/
    private world: World;

    constructor(world: World) {
        this.world = world;
    }
    /* ---------------------------*/
    get Cardspage() {
        return pageProvider.wait(Cardspage);
    }
    get loansContainerAndroidPage() {
        return pageProvider.wait(loansContainerAndroidPage);
    }
    get creditcardmodulesPage() {
        return pageProvider.wait(creditcardmodulesPage);
    }
    get WelcomePage() {
         return pageProvider.wait(WelcomeContainerAndroidPage);
    }
    get LoginContainerAndroidPage() {
        return pageProvider.wait(LoginContainerAndroidPage);
    }
    validatePosition(containerPage) {
        expect(pageProvider.wait(containerPage).isCurrent()).to.be.true;
    }
    data(){
        const dataManager = this.world.users.get();
        return dataManager;
    }
    dataQuemada(bank:string,tipoCuenta:string,numCuenta:string){
        bank = this.data().bank;
        tipoCuenta = this.data().accountType;
        numCuenta = this.data().accountNumber;
        this.Cardspage.bank(bank);
        this.loansContainerAndroidPage.bancoColpatria();
        this.Cardspage.tipoCuenta(tipoCuenta);
        this.loansContainerAndroidPage.Ahorros();
        this.Cardspage.NumCuentaBanco(numCuenta);
        this.Cardspage.radiobntInteto1(this.data().numberAttempts);
        this.Cardspage.bntcontinue();
        this.Cardspage.TerCond();
    }
    selectCard1(){
        this.LoginContainerAndroidPage.LoginTotal(this.data().NumeroDocumento1,this.data().Passaword);
        this.Cardspage.card();
        this.validatePosition(Cardspage);
        this.loansContainerAndroidPage.credit_1(this.data().id);
    }
    /* ---------------------------*/
    @When(/^the user accesses to more operatives from card product detail$/)
    bntContinuarHabiliti(table: TableDefinition) {
        this.selectCard1();
        this.creditcardmodulesPage.viewMoreLink();
        const rows = table.hashes();
        rows.forEach(({tipo, credito}) => {
            this.Cardspage.tipo_Credito({tipo, credito});
        })
    }
    @When(/^the user accesses to scheduled automatic card payments$/)
    scheduled() {
        this.creditcardmodulesPage.wiewPaymentsScheduled();
        this.validatePosition(creditcardmodulesPage);
    }
    @Then(/^the user sees a modal with the following elements:$/)
    Entend(table: TableDefinition) {
        const rows = table.hashes();
        rows.forEach(({item}) => {
            this.Cardspage.bntentedi({item});
        })
    }
    @When(/^the user fills "(.*)", "(.*)" and "(.*)" of automatic payment$/)
    automatic(bank:string,tipoCuenta:string,numCuenta:string) {
        this.dataQuemada(bank,tipoCuenta,numCuenta);
    }
    @Then(/^the user sees the following items in the screen:$/)
    followingitems(table: TableDefinition) {
        this.loansContainerAndroidPage.bntConf();
        const rows = table.hashes();
        rows.forEach(({item}) => {
           this.Cardspage.ValidadProcess({item});
        })
    }

}