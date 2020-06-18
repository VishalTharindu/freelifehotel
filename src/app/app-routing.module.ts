import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { FoodBaverageComponent } from './food-baverage/food-baverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingComponent } from './wedding/wedding.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'accomodation', component: AccomodationComponent},
  {path: 'celebration', component: CelebrationComponent},
  {path: 'food-baverage', component: FoodBaverageComponent},
  {path: 'lifestyle', component: LifestyleComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'wedding', component: WeddingComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
