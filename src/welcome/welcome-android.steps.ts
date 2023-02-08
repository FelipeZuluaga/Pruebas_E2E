import { Given, Then, When} from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { expect } from "chai";
import { WelcomeContainerAndroidPage } from "./welcome-android.page";

export class LoginContainerSteps {

    get WelcomeContainerAndroidPage() {
        return pageProvider.wait(WelcomeContainerAndroidPage);
    }
    validatePosition(containerPage) {
        expect(pageProvider.wait(containerPage).isCurrent()).to.be.true;
    }
    @Given(/^a user accesses the application for the first time$/)
    welcomeBBVA() {
        this.WelcomeContainerAndroidPage.welcomeSpinner();
        this.validatePosition(WelcomeContainerAndroidPage);
    }
    @When(/^the user is in the Welcome User Distribution$/)
    welcomeVideo() {
        this.WelcomeContainerAndroidPage.welcomeVideo();
        this.validatePosition(WelcomeContainerAndroidPage);
    }
    @Then(/^the user sees the following items in the screen$/)
    optionsWelcome() {
        this.WelcomeContainerAndroidPage.btnHazteCliente();
        this.validatePosition(WelcomeContainerAndroidPage);
    }
}
