import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'aboutus',      component: AboutUsPageComponent },
  { path: 'contactus', component: ContactUsPageComponent },
  { path: 'teampage', component: TeamPageComponent },
  { path: '**', component: HomePageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    TeamPageComponent,
    AboutUsPageComponent,
    ContactUsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
