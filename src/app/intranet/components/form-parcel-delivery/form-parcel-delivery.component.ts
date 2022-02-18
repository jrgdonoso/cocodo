import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { ComponentFixtureAutoDetect } from "@angular/core/testing";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { debounceTime } from "rxjs";
import { FormParcelDeliveryModule } from './form-parcel-delivery.module';


@Component({
    selector: 'form-parcel-delivery',
    templateUrl: './form-parcel-delivery.component.html'
})

export class FormParcelDeliveryComponent implements OnInit{

    fFormParcelDelivery:FormGroup;
    bShowFormParcelDelivery:Boolean=false;

    constructor(private FormBuilder: FormBuilder){//Se injecta como un servicion

        this.buildFormParcelDelivery();
        
     
    }

    ngOnInit(){}


    private buildFormParcelDelivery(){
        //valor inicial,validaciones,validaciones asincronas
        this.fFormParcelDelivery=this.FormBuilder.group({
            typeRetreat:['', [Validators.required]],
            street:['', [Validators.required] ],
            number:['', [Validators.required] ],
            department:['' ],
            commune:['', [Validators.required] ],
            city:['', [Validators.required] ],
            whoDelivers:['', [Validators.required] ]
        }); 

        this.fFormParcelDelivery.valueChanges.pipe(
            debounceTime(500)// delay 5sec
        ).subscribe(value=>{
            console.log(value);
        })
    }
   


    private showFormParcelDelivery(){
      
    }


    save(event:Event){
        event.preventDefault(); //cancela recarga por defecto del submit
        const values=this.fFormParcelDelivery.value;
        
        if( this.fFormParcelDelivery.valid  ){
            console.log('Formulario valido');
        }else{
            console.log('Formulario No valido');
            
        }
        
        
        console.log(values);

    }

}