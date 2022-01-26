import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Observable } from 'rxjs';
import { Permission } from '@The-Iron-Marble-Company/model';
import { map } from 'rxjs/operators';

@Injectable()
export class OfficerGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.userService.getUser$().pipe(
      map((user) => {
        if (!user?.permissions.includes(Permission.OFFICER)) {
          this.router.navigate(['forbidden']);
          return false;
        }
        return true;
      })
    );
  }
}
