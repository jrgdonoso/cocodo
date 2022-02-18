import { IntranetComponent } from './intranet.component';
import { NgModule } from "@angular/core";


import { FormParcelDeliveryComponent } from './components/form-parcel-delivery/form-parcel-delivery.component';
import { IntranetRoutingModule } from './intranet-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
    imports:[
        CommonModule,
        IntranetRoutingModule,
        ReactiveFormsModule
        
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