import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import path from 'path';
import { Component } from '@angular/core';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyCartComponent } from './my-cart/my-cart.component';
export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'registration', component: RegistrationComponent},
    {path : 'about-us', component: AboutUsComponent},
    {path : 'contact-us', component: ContactUsComponent},
    {path: 'my-cart', component: MyCartComponent}
];
