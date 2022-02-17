import { IntranetComponent } from './intranet.component';
import { NgModule } from "@angular/core";


import { FormParcelDeliveryComponent } from './components/form-parcel-delivery/form-parcel-delivery.component';
import { IntranetRoutingModule } from './intranet-routing.module';



@NgModule({
    imports:[
        IntranetRoutingModule
    ],
    declarations:[
        IntranetComponent,
        FormParcelDeliveryComponent
    ],
    exports:[],
    providers:[]
})

export class IntranetModule{
    constructor(){
        
    }
}