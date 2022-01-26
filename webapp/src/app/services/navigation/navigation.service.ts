import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { Permission } from '@The-Iron-Marble-Company/model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export type NavigationItem = {
  label: string;
  routerLink: string;
  icon: string;
};

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private basicNavigation: NavigationItem[] = [
    {
      label: 'MY CHARACTER',
      routerLink: 'my-character',
      icon: 'account_circle'
    },
    {
      label: 'COMPANY',
      routerLink: 'company',
      icon: 'group'
    },
    {
      label: 'EXPEDITION',
      routerLink: 'expedition',
      icon: 'landscape'
    }
  ];

  private adminNavigation: NavigationItem[] = [
    {
      label: 'ADMINISTRATION',
      routerLink: 'admin',
      icon: 'admin_panel_settings'
    }
  ];

  private officerNavigation: NavigationItem[] = [
    {
      label: 'Administration',
      routerLink: 'officer',
      icon: 'officer_panel_settings'
    }
  ];

  private pluginNavigation: NavigationItem[] = [];

  constructor(private userService: UserService /* private pluginService: PluginService*/) {
    // pluginService.getPlugins().subscribe(
    //   (plugins) =>
    //     (this.pluginNavigation = plugins.map((plugin) => ({
    //       label: plugin.navigationLabel,
    //       routerLink: plugin.navigationName + '/flights-search', // TODO temp
    //       icon: plugin.navigationIcon
    //     })))
    // );
  }

  isAdmin(): Observable<boolean> {
    return this.userService.getUser$().pipe(map((user) => !!user?.permissions?.includes(Permission.ADMIN)));
  }

  isOfficer(): Observable<boolean> {
    return this.userService.getUser$().pipe(map((user) => !!user?.permissions?.includes(Permission.OFFICER)));
  }

  getNavigationItems(): Observable<NavigationItem[]> {
    const navigation = this.basicNavigation.concat(this.pluginNavigation);
    return this.isAdmin().pipe(
      map((admin) => {
        if (!admin) {
          return navigation;
        } else {
          return navigation.concat(this.adminNavigation);
        }
      })
    );
  }

  getNavigationItems(): Observable<NavigationItem[]> {
    const navigation = this.basicNavigation.concat(this.pluginNavigation);
    return this.isOfficer().pipe(
      map((officer) => {
        if (!officer) {
          return navigation;
        } else {
          return navigation.concat(this.officerNavigation);
        }
      })
    );
  }
}
