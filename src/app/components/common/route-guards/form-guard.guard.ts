import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data/data.service';

@Injectable({
  providedIn: 'root',
})
export class FormsGuard implements CanActivate {
  constructor(private dataService: DataService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
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
