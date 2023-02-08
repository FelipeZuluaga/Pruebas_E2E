import { Given, Then, When, World } from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { expect } from "chai";
import { LoginContainerAndroidPage } from "./login.page";
import { TableDefinition } from "cucumber";
import { LogicaLOG001 } from "./Log001.page";
import { WelcomeContainerAndroidPage } from "../welcome/welcome-android.page";

export class LoginContainerSteps {
    /* ---------------------------*/
    private world: World;

    constructor(world: World) {
        this.world = world;
    }
    /* ---------------------------*/
    get LoginContainerAndroidPage() {
        return pageProvider.wait(LoginContainerAndroidPage);
    }
    get LogicaLOG001() {
        return pageProvider.wait(LogicaLOG001);
    }
    get WelcomePage() {
        return pageProvider.wait(WelcomeContainerAndroidPage);
   }
    /* ---------------------------*/
    validatePosition(containerPage) {
        expect(pageProvider.wait(containerPage).isCurrent()).to.be.true;
    }
    data(){
        const dataManager = this.world.users.get();
        return dataManager;
    }
    /* -------------------@LOG001----------------------*/
    @Given(/^a user not logged and not cached$/)
    inTheWelcomeScreen() {
        this.WelcomePage.btnAccionLoginAcceder();
        this.validatePosition(LoginContainerAndroidPage);
    }
    @Then(/^sees the following items in the screen:$/)
    ValidDocument(table: TableDefinition) {
        const rows = table.hashes();
        rows.forEach(({item}) => {
            this.LogicaLOG001.ValidadDocument({item});
        })
    }
    /* --------@LOG002-----------*/
    @Given(/^a user "(.*)" not logged and not cached$/)
    welcome(numberDocum:string) {
        numberDocum = "80799399";
        this.WelcomePage.btnAccionLoginAcceder();
        this.validatePosition(LoginContainerAndroidPage);
        this.LoginContainerAndroidPage.txtDocumentNumber(numberDocum);
    }
    @When(/^the user has completed the password "(.*)"$/)
    Pass(Passaword:string) {
        Passaword = "Prueba01";
        this.LoginContainerAndroidPage.txtPassword(Passaword);
    }
    @When(/^the user sees the access button enabled$/)
    bntContinuarHabiliti() {
        this.LoginContainerAndroidPage.bntIngreso();
    }
    /* --------@LOG003-----------*/
    @Given(/^a user with the following criteria$/)
    welcomeLogin() {
        this.WelcomePage.btnAccionLoginAcceder();
        this.validatePosition(LoginContainerAndroidPage);
    }
    @When(/^the user does login$/)
    login() {
        this.LoginContainerAndroidPage.Login(this.data().NumeroDocumento1,this.data().Passaword);
    }
    @When(/^the user accesses the "(.*)" screen$/)
    valid(option:string) {
        this.LoginContainerAndroidPage.modalWelcome(option);
    }
    /* --------@LOG018 error-----------*/
    @Given(/^with the following criteria$/)
    LoginIncorret(table: TableDefinition) {
        const rows = table.hashes();
        rows.forEach(({criteria}) => {
            this.LoginContainerAndroidPage.errorDocument({criteria});
        })
    }
    @When(/^the user is in Login Screen$/)
    validpassError() {
        this.LoginContainerAndroidPage.bntIngresar();
    }
    @When(/^does login$/)
    bntIngre() {
        this.LoginContainerAndroidPage.mensajeError();
    }
    @Then(/^sees login error$/)
    MessgeError() {
        this.validatePosition(LoginContainerAndroidPage);
    }

}