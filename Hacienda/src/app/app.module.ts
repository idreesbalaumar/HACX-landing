import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JoinUSComponent } from './join-us/join-us.component';
import { LandingComponent } from './landing/landing.component';
import { PricingComponent } from './pricing/pricing.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommoditiesComponent } from './commodities/commodities.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SliderComponent } from './slider/slider.component';
import { NavLiveDataComponent } from './nav-live-data/nav-live-data.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JoinUSComponent,
    LandingComponent,
    PricingComponent,
    RegisterationComponent,
    AboutUsComponent,
    CommoditiesComponent,
    TestimonialsComponent,
    BlogPostListComponent,
    ContactUsComponent,
    ServicePageComponent,
    ShoppingCartComponent,
    SliderComponent,
    NavLiveDataComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
