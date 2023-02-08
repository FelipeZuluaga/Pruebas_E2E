import { PageContext, Page, pageProvider } from "@testing/wdio-page-objects";

const selects ={
    data: `[slot="full"]`,
    NuevoDestino:`[aria-label="Nuevo destino"]`,
    MisCuentas:`[aria-label="Mis Cuentas"]`,
    ContactosGuardados:`[aria-label="Contactos guardados"]`,
    TransferenciasFavoritas:`[aria-label="Transferencias favoritas"]`
}
@PageContext({
    wrapper: `cells-step-recipient-selector[id="transfer-destination"] [id="stepContainer"]`,
    context: 'web'
})
export class destinywebPage extends Page {
    
    newdestination(){
        let nuevoDes = $(selects.data).$(selects.NuevoDestino);
        return nuevoDes.click();
    }
    myaccounts(){
        let MisCuent = $(selects.data).$(selects.MisCuentas);
        return MisCuent.click();
    }
    contactsSaved(){
        let ContacGuard = $(selects.data).$(selects.ContactosGuardados);
        return ContacGuard.click();
    }
    transferfavorites(){
        let favoritos = $(selects.data).$(selects.TransferenciasFavoritas);
        return favoritos.click();
    }
}