import { PageContext, Page } from "@testing/wdio-page-objects";
const selects = {
    bntX: `//*[@resource-id="closeButton"]`,
    btnLeft: `//*[@resource-id="btnLeft"]`,
    bntpagar: `//*[@text="Pagar"]`,
    banColpatria: `//android.widget.TextView[@content-desc="Operaciones favoritas Botón"]`,
    tipoAhorros: `//android.widget.TextView[@content-desc="Usar QR Botón"]`,
    bntConfirm: `//*[@text="Confirmar"]`,
}
@PageContext({
    wrapper: `//android.view.View[@resource-id="stepContainer"]`,
    context: 'mobile-android'
})
export class loansContainerAndroidPage extends Page {

    credit_1(id: string) {
        let tarjeta_credito = $(`//*[@resource-id='${id}']`);
        tarjeta_credito.click();
    }
    credit_Anparada(idAnparada: string) {
        let tarjeta_amparada = $(`//*[@resource-id='${idAnparada}']`);
        return tarjeta_amparada.click();
    }
    /*-------------------- */

    valided(option: string) {
        switch (option) {
            
            case 'OFF':
                $(selects.btnLeft).click();
                break;

            case 'ON':
                $(selects.bntX).click();
                $(selects.btnLeft).click();
                break;
        }
    }
    salirGlobal() {
        let salir = $(selects.btnLeft);
        return salir.click();
    }
    salirGlobalDesdeDetail() {
        let salirDetalle = $(selects.btnLeft);
        return salirDetalle.click();
    }
    btnPagar() {
        let pay = $(selects.bntpagar);
        return pay.click();
    }
    scrollToID(findElementsID: string) {
        driver.execute('mobile: scroll', { selector: `new UiSelector().resourceId("${findElementsID}")`, strategy: '-android uiautomator', direction: 'down' });
    }
    bancoColpatria() {
        $(selects.banColpatria).click();
    }
    Ahorros() {
        $(selects.tipoAhorros).click();
    }
    bntConf() {
        $(selects.bntConfirm).click();
    }
}