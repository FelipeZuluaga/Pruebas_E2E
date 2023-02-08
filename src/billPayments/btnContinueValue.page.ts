import { PageContext, Page } from "@testing/wdio-page-objects";
const selects ={
    ContinueValue:'//*[@text="Continuar"]',
    Payment:'//*[@text="Pagar"]',
    LocationService:'//*[@text="Perfil"]',
    Department:'//*[@index="4"]',
    Service:'//*[@index="2"]',
    Filters: '//android.view.ViewGroup[1]/androidx.recyclerview.widget.RecyclerView/android.widget.Button[3]',
    VoluntariContribution:'//android.widget.TextView[@content-desc="Operaciones favoritas Botón"]',
}

@PageContext({
    wrapper: ``,
    context: 'mobile-android'
})
export class btnContinueValuePage extends Page {
    
    btnContinueValue(){
        $(selects.ContinueValue).click();
    }
    btnPayment(){
        $(selects.Payment).click();
    }
    inputLocationService(){
        $(selects.LocationService).click();
    }
    selectDepartment(){
        $(selects.Department).click();
    }
    showServices(){
        $(selects.Service).click();
    }
    removeFilters(){
        $(selects.Filters).click();
    }
    hideKeyAndroid(){
        driver.back();
    }
    modalVoluntariContribution(){
        $(selects.VoluntariContribution).click();
    }
}