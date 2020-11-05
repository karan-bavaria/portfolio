import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsGuard } from './components/common/route-guards/form-guard.guard';
import { EditPortfolioComponent } from './components/edit-portfolio/edit-portfolio.component';
import { FormsComponent } from './components/forms/forms.component';
import { IntroFormComponent } from './components/forms/intro-form/intro-form.component';
import { PersonalInfoFormComponent } from './components/forms/personal-info-form/personal-info-form.component';
import { WorkFormComponent } from './components/forms/work-form/work-form.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/portfolio/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WorkComponent } from './components/portfolio/work/work.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
    children: [
      {
        path: '',
        component: PersonalInfoFormComponent,
        outlet: 'forms',
        canActivate: [FormsGuard],
        data: { animation: 'PersonalInfo' },
      },
      {
        path: 'intro',
        component: IntroFormComponent,
        outlet: 'forms',
        canActivate: [FormsGuard],
        data: { animation: 'Intro' },
      },
      {
        path: 'workinfo',
        component: WorkFormComponent,
        outlet: 'forms',
        canActivate: [FormsGuard],
        data: { animation: 'WorkInfo' },
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      {
        path: '',
        component: AboutComponent,
        outlet: 'portfolio',
      },
      {
        path: 'about',
        component: AboutComponent,
        outlet: 'portfolio',
      },
      {
        path: 'work',
        component: WorkComponent,
        outlet: 'portfolio',
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: 'edit-portfolio',
    component: EditPortfolioComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
