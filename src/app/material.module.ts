// tslint:disable-next-line:quotemark
import { NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';


@NgModule({
    imports: [
        MatSliderModule,
        MatCardModule
    ],
    exports: [
        MatSliderModule,
        MatCardModule
    ]
})

export class MeterialModule{

}
