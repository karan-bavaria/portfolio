import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data/data.service';

@Injectable({
  providedIn: 'root',
})
export class FormsGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // if user tries to access portfolio or edit-portfolio directly without entering details then
    // redirect them to home screen
    if (
      next.routeConfig.path === 'portfolio' ||
      next.routeConfig.path === 'edit-portfolio'
    ) {
      if (
        !this.dataService.isPersonalDataSaved ||
        !this.dataService.isIntroSaved
      ) {
        if (!this.dataService.isWorkInfoSaved) {
          return this.dataService.skipWorkForm;
        }

        this.router.navigate(['/home']);
        return false;
      }
    }

    if (next.routeConfig.path === '' && this.dataService.isPersonalDataSaved) {
      return false;
    }

    if (next.routeConfig.path === 'intro' && this.dataService.isIntroSaved) {
      return false;
    }

    if (
      next.routeConfig.path === 'workinfo' &&
      this.dataService.isWorkInfoSaved
    ) {
      return false;
    }
    return true;
  }
}
