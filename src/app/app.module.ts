import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { InformationCardComponent } from './components/portfolio/work/information-card/information-card.component';
import { WorkTimelineComponent } from './components/portfolio/work/work-timeline/work-timeline.component';
import { WorkComponent } from './components/portfolio/work/work.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalInfoFormComponent } from './components/forms/personal-info-form/personal-info-form.component';
import { EducationPopupComponent } from './components/forms/personal-info-form/education-popup/education-popup.component';
import { IntroFormComponent } from './components/forms/intro-form/intro-form.component';
import { FloatingButtonComponent } from './components/common/components/floating-button/floating-button.component';
import { Autosize } from './components/common/directives/auto-resize.directive';
import { WorkFormComponent } from './components/forms/work-form/work-form.component';
import { JobPopupComponent } from './components/forms/work-form/job-popup/job-popup.component';
import { AddDotOnEnterDirective } from './components/common/directives/add-dot-on-enter.directive';
import { IconsPopupComponent } from './components/forms/work-form/icons-popup/icons-popup.component';
import { CardsPopupComponent } from './components/forms/work-form/cards-popup/cards-popup.component';
import { EditPortfolioComponent } from './components/edit-portfolio/edit-portfolio.component';

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
    InformationCardComponent,
    WorkTimelineComponent,
    ExperienceComponent,
    PortfolioComponent,
    HomeComponent,
    FloatingButtonComponent,
    FormsComponent,
    PersonalInfoFormComponent,
    EducationPopupComponent,
    IntroFormComponent,
    Autosize,
    WorkFormComponent,
    JobPopupComponent,
    AddDotOnEnterDirective,
    IconsPopupComponent,
    CardsPopupComponent,
    EditPortfolioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
