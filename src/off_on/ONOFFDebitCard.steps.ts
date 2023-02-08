import { Given, Then, When, World } from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { expect } from "chai";
import { on_Off } from "./ONOFFDebitCard.page";
import { Sign_offPage } from "../utilsGlomo/Sign _off.page";
import { accountsPage } from "../utilsGlomo/utilsAccounts.page";
import { Cardspage } from "../card/card.page";
import { loansContainerAndroidPage } from "../utilsGlomo/card.page";
import { LoginContainerAndroidPage } from "../login/login.page";

export class DebitAmpOFFSteps {

    private world: World;

    constructor(world: World) {
        this.world = world;
    }
    /*------------------ */
    get Cardspage() {
        return pageProvider.wait(Cardspage);
    }
    get LoginContainerAndroidPage() {
        return pageProvider.wait(LoginContainerAndroidPage);
    }
    get accountsPage() {
        return pageProvider.wait(accountsPage);
    }
    get loansContainerAndroidPage() {
        return pageProvider.wait(loansContainerAndroidPage);
    }
    get Sign_offPage() {
        return pageProvider.wait(Sign_offPage);
    }
    get on_Off() {
        return pageProvider.wait(on_Off);
    }
    validatePosition(containerPage) {
        expect(pageProvider.wait(containerPage).isCurrent()).to.be.true;
    }
    data() {
        const dataManager = this.world.users.get();
        return dataManager;
    }
    login(id:string){
        this.Cardspage.card();
        this.validatePosition(Cardspage);
        this.loansContainerAndroidPage.credit_1(id);
        this.validatePosition(loansContainerAndroidPage);
        this.on_Off.toTurnOff();
        this.loansContainerAndroidPage.scrollToID('notInline');
        this.on_Off.dev();
    }
    /*APAGAR O PRENDER TARJETAS DEBIT DESDE LA POSICION GLOBAL */
    @When(/^We select our card DEBIT$/)
    cardsDEBIT() {
        this.login(this.data().id);
    }
    @When(/^proceed to (.*) the card debit$/)
    ofs(option:string,) {
        this.loansContainerAndroidPage.valided(option);
    }

    /*APAGAR O PRENDER TARJETAS CARDS/VISA DESDE LA POSICION GLOBAL */

    @When(/^to select the VISA credit card$/)
    VisaCredit() {
        this.login(this.data().id2);
    }
    @Then(/^we will turn (.*) the credit card$/)
    off_on(option:string) {
        this.loansContainerAndroidPage.valided(option);
    }
    /*ULTIMO PASO COMPARIDO */
    @Then(/^validate that the process is correct.$/)
    Off() {
        this.loansContainerAndroidPage.salirGlobal();
        this.Sign_offPage.Signoff();
    }
}