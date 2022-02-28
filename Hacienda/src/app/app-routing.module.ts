import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { CommoditiesComponent } from './commodities/commodities.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { JoinUSComponent } from './join-us/join-us.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SliderComponent } from './slider/slider.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  {path: '' , component: LandingComponent},
  {path: 'landing' , component: LandingComponent},
  {path: 'join-us' , component: JoinUSComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'registeration', component: RegisterationComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'commodities', component: CommoditiesComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'blog-post-list', component: BlogPostListComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'service-page', component: ServicePageComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'slider', component: SliderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
