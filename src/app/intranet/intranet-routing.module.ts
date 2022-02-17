import { Router, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { IntranetComponent } from './intranet.component';


import { FormParcelDeliveryComponent } from "./components/form-parcel-delivery/form-parcel-delivery.component";

const routes=[{
    path:'', component: IntranetComponent, children:
    [
        {path: 'form-parcel',component: FormParcelDeliveryComponent  }

    ]
}]

@NgModule({
    imports:[  RouterModule.forChild(routes)  ],
    exports:[ RouterModule ]
})

export class IntranetRoutingModule{

}