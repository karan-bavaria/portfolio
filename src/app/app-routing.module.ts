import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    ],
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
