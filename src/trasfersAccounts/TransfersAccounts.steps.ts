import { Then, When, World } from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { expect } from "chai";
import { accountsPage } from "../utilsGlomo/utilsAccounts.page";
import { trasferAccounts } from "./TransfersAccounts.page";
import { destinywebPage } from "../utilsGlomo/destiny.page";
import { trasfer } from "../utilsGlomo/trasfer.page";

export class TrasAcountSteps {
	private world: World;

	constructor(world: World) {
		this.world = world;
	}
	get trasfer() {
		return pageProvider.wait(trasfer);
	}
	get destinywebPage() {
		return pageProvider.wait(destinywebPage);
	}
	get trasferAccounts() {
		return pageProvider.wait(trasferAccounts);
	}
	validatePosition(containerPage) {
		expect(pageProvider.wait(containerPage).isCurrent()).to.be.true;
	}
	data(){
		const user = this.world.users.get();
		return user;
	}
	@When(/^I login to the account$/)
	SavingsAccount2() {
		pageProvider.wait(accountsPage).currentAccount_1(this.data().idAccount);
	}
	@When(/^enter the transfer option in the lower menu$/)
	transfer() {
		this.trasferAccounts.trasfer();
	}
	@When(/^select my products option$/)
	opProduct() {
		this.destinywebPage.myaccounts();
	}
	@Then(/^choose the Current account to transfer$/)
	Trasfer() {
		const user = this.world.users.get();
		const cuentaDestino: string = user.cuentaDestino;
		this.trasferAccounts.accounts(cuentaDestino);
	}
	@Then(/^enter the amount$/)
	WorthDes() {
        const Monto: string = this.data().Monto;
        this.trasferAccounts.opPayaccount(Monto);
        this.validatePosition(trasferAccounts);
	}
	@Then(/^View the confirmation screen the account must come preloaded$/)
	confirmation() {
		this.trasfer.trasfer();
	}
	@Then(/^Verify data and transfer Accounts must be savings, checking or mobile money$/)
	checking() {
		this.trasferAccounts.validad();
	}
	/*-------------------------------- Transferir Desde La Opcion Mas ----------- */
	@When(/^I click on the Savings Card$/)
	SavingsAccount4() {
		pageProvider.wait(accountsPage).currentAccount_1(this.data().idAccount2);
	}
	@When(/^enter the transfer option$/)
	trafer() {
		this.trasferAccounts.Further();
	}
	@When(/^select MIS CUENTAS$/)
	opPuct() {
		this.trasferAccounts.wiewTrasfs();
	}
	@Then(/^See The Accounts To Which I Can Transfer$/)
	Value() {
		this.destinywebPage.myaccounts();
	}
	@Then(/^choose the account to which you want to transfer$/)
	Trasfr() {
        const cuentaLibretón: string = this.data().cuentaLibretón;
		this.trasferAccounts.savids(cuentaLibretón);
	}
	@Then(/^Enter the value to be transferred$/)
	Wor() {
        const Monto: string = this.data().Monto;
        this.trasferAccounts.opPayaccount(Monto);
        this.validatePosition(trasferAccounts);
	}
	@Then(/^See the confirmation screen, the account must come pre-loaded$/)
	confir() {
		this.trasfer.trasfer();
		this.validatePosition(trasferAccounts);
	}
	@Then(/^Verify the data and the transfer Accounts must be savings, checking or mobile money$/)
	Verify() {
		this.trasferAccounts.validad();
		this.validatePosition(trasferAccounts);
	}
}