import { MeterialModule } from './material.module';
import { CourselistService } from './courselist.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodBaverageComponent } from './food-baverage/food-baverage.component';
import { RestaurantComponent } from './food-baverage/restaurant/restaurant.component';
import { BarsComponent } from './food-baverage/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WelnessAndSpaComponent } from './lifestyle/welness-and-spa/welness-and-spa.component';
import { ResoteActivitiesComponent } from './lifestyle/resote-activities/resote-activities.component';
import { ExperinceComponent } from './lifestyle/experince/experince.component';
import { ExcursionComponent } from './lifestyle/excursion/excursion.component';
import { WeddingComponent } from './wedding/wedding.component';
import { WestonWeddingComponent } from './wedding/weston-wedding/weston-wedding.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavLinkComponent } from './navigation/sidenav-link/sidenav-link.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodBaverageComponent,
    RestaurantComponent,
    BarsComponent,
    LifestyleComponent,
    WelnessAndSpaComponent,
    ResoteActivitiesComponent,
    ExperinceComponent,
    ExcursionComponent,
    WeddingComponent,
    WestonWeddingComponent,
    CelebrationComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenavLinkComponent,
    NavtabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MeterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    CourselistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
