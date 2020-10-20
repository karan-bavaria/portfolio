import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { OfferComponent } from './components/about/offer/offer.component';
import { EducationComponent } from './components/about/education/education.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AboutComponent, WorkComponent, FooterComponent, OfferComponent, EducationComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
