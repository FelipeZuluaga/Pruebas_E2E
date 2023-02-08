import { PageContext, Page, pageProvider } from "@testing/wdio-page-objects";

const selectors = {
    input: `//*[@resource-id="co.com.bbva.mb.dev:id/editText"]`,
    bntNumDocum: `//*[@resource-id="co.com.bbva.mb.dev:id/nextButton"]`,
    bntPass: `//*[@resource-id="co.com.bbva.mb.dev:id/loginButton"]`,
    ActivarMasTarde: `//*[@text="Activar más tarde"]`,
    Entendido: `//*[@text="Entendido"]`,
    ActivarAhora: `//*[@text="Activar ahora"]`,
    bancoItau: `//android.widget.TextView[@content-desc="Configuración Botón"]`,
    banColpatria: `//android.widget.TextView[@content-desc="Operaciones favoritas Botón"]`,
    tipoAhorros: `//android.widget.TextView[@content-desc="Usar QR Botón"]`,
    HolaUser: '//*[@text="Hola Adolfo"]',
    MessgeError: '//*[@text="No pudimos ingresar en app BBVA. Puedes volver a intentarlo en unos minutos."]',
};
@PageContext({
    wrapper: ``,
    context: 'mobile-android'
})
export class LoginContainerAndroidPage extends Page {

    /*------------- */
    txtDocumentNumber(NumeroDocumento1: string) {
        $(selectors.input).addValue(NumeroDocumento1);
        $(selectors.bntNumDocum).click();
    }
    /*------------- */
    txtPassword(Passaword: string) {
        $(selectors.input).addValue(Passaword);
    }
    bntIngreso() {
        $(selectors.bntPass).isExisting();
    }
    btnNotifications() {
        $(selectors.Entendido).waitForDisplayed();
        $(selectors.Entendido).click();
    }
    Login(NumeroDocumento1: string, Passaword: string) {
        $(selectors.input).addValue(NumeroDocumento1);
        $(selectors.bntNumDocum).click();
        $(selectors.input).addValue(Passaword);
        $(selectors.bntPass).click();
    }
    modalWelcome(option:string) {
        switch (option) {
            case 'welcome experience':
                $(selectors.HolaUser).isExisting();
                $(selectors.Entendido).click();
                $(selectors.ActivarMasTarde).click();
                this.btnNotifications();
                $(selectors.ActivarAhora).click();
                break;
        }
    }
    errorDocument({ criteria }) {
        switch (criteria) {
            case 'wrong password':
                $(selectors.input).addValue("80799993");
                $(selectors.bntNumDocum).click();
                $(selectors.input).addValue("Prueba03ds");
                break;
        }
    }
    bntIngresar(){
        $(selectors.bntPass).click();
    }
    mensajeError(){
        $(selectors.MessgeError).isExisting();
    }
    ErrorAutome(){
        $(selectors.Entendido).isExisting();
        $(selectors.Entendido).waitForDisplayed();
    }
    LoginTotal(NumeroDocumento1: string, Passaword: string) {
        $(selectors.input).addValue(NumeroDocumento1);
        $(selectors.bntNumDocum).click();
        $(selectors.input).addValue(Passaword);
        $(selectors.bntPass).click();
        $(selectors.Entendido).click();
        $(selectors.ActivarMasTarde).click();
        this.btnNotifications();
        $(selectors.ActivarAhora).click();
    }
}