import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GroupService } from './services/group.service';
import { map, switchMap, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LockedGuard implements CanActivate {

  constructor(
    private groupService: GroupService,
    private router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const groupId = state.url.slice(1, state.url.length);
    return this.groupService.getGroup(groupId).pipe(map(group => !group.locked), tap(isLocked => {
      if (!isLocked) {
        this.router.navigate([groupId, 'vote']);
      }
    }));
  }

}
