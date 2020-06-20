// tslint:disable-next-line:quotemark
import { NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
    imports: [
        MatSliderModule,
        MatCardModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatTabsModule,
        MatGridListModule
    ],
    exports: [
        MatSliderModule,
        MatCardModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatGridListModule
    ]
})

export class MeterialModule{

}
