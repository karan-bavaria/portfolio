import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/portfolio/about/about.component';
import { EducationComponent } from './components/portfolio/about/education/education.component';
import { OfferComponent } from './components/portfolio/about/offer/offer.component';
import { FooterComponent } from './components/portfolio/footer/footer.component';
import { NavbarComponent } from './components/portfolio/navbar/navbar.component';
import { ExperienceComponent } from './components/portfolio/work/experience/experience.component';
import { IconStackComponent } from './components/portfolio/work/icon-stack/icon-stack.component';
import { OtherStuffComponent } from './components/portfolio/work/other-stuff/other-stuff.component';
import { WorkTimelineComponent } from './components/portfolio/work/work-timeline/work-timeline.component';
import { WorkComponent } from './components/portfolio/work/work.component';
import { FloatingButtonComponent } from './components/common/floating-button/floating-button.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalInfoFormComponent } from './components/forms/personal-info-form/personal-info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    WorkComponent,
    FooterComponent,
    OfferComponent,
    EducationComponent,
    IconStackComponent,
    OtherStuffComponent,
    WorkTimelineComponent,
    ExperienceComponent,
    PortfolioComponent,
    HomeComponent,
    FloatingButtonComponent,
    FormsComponent,
    PersonalInfoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
