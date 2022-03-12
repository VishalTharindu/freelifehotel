import { from } from 'rxjs';
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
import {
    MatFormFieldModule,
  } from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input'
import {MatCheckboxModule} from '@angular/material/checkbox'


@NgModule({
    imports: [
        MatSliderModule,
        MatCardModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatTabsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
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
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
    ]
})

export class MeterialModule{

}
