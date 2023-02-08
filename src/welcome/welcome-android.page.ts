import { PageContext, Page } from "@testing/wdio-page-objects";

const selects = {
    bntBiometria: `//*[@text="Ingresa con biometría"]`,
    bntCliente: `//*[@text='Hazte cliente']`,
    Acceder: `//*[@resource-id="co.com.bbva.mb.dev:id/welcomeTopButton"]`
}
@PageContext({
    wrapper: `//android.widget.FrameLayout[resource-id='co.com.bbva.mb.dev:id/welcomeSpinner']`,
    context: 'mobile-android'
})
export class WelcomeContainerAndroidPage extends Page {

    welcomeSpinner() {
        let biomet= $(selects.bntBiometria);
        return biomet.isExisting();
    }
    welcomeVideo() {
        let cliente = $(selects.bntCliente);
        return cliente.isExisting();
    }
    btnHazteCliente(){
        $(selects.Acceder).isExisting();
    }
    btnAccionLoginAcceder() {
        $(selects.Acceder).click();
    }
}
