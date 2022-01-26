import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Permission, User, UserWithPermissions } from '@The-Iron-Marble-Company/model';
import { OfficerService } from '../../../../services/officer/officer.service';
import { UserService } from '../../../../services/user/user.service';
import { SnackbarService } from '../../../../services/snackbar/snackbar.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'characterName', 'discordUsername', 'enabled', 'company'];

  displayedData: UserWithPermissions[] = [];
  data: UserWithPermissions[] = [];

  constructor(
    private officerService: OfficerService,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.officerService.findAll().subscribe((data) => {
      this.data = data;
      this.displayedData = data;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.displayedData = this.data.filter((user) => user.characterName.toLowerCase().startsWith(filterValue));
  }

  getUserId(): Observable<number> {
    return this.userService.getUser$().pipe(map((user) => user.id));
  }

  async enable(change: MatSlideToggleChange, user: User): Promise<void> {
    await this.userService
      .getUser$()
      .pipe(
        map((currentUser) => {
          //dont disable yourself ;)
          if (currentUser.id === user.id) {
            return;
          }
          this.officerService
            .setEnabled(user.id, change.checked)
            .subscribe(() => this.snackbarService.open(`User Activated: ${change.checked}`));
        })
      )
      .toPromise();
  }

  async company(change: MatSlideToggleChange, user: User): Promise<void> {
    await this.userService
      .getUser$()
      .pipe(
        map((currentUser) => {
          //dont disable yourself ;)
          if (currentUser.id === user.id) {
            return;
          }
          this.officerService
            .setCompany(user.id, change.checked)
            .subscribe(() => this.snackbarService.open(`Company Member: ${change.checked}`));
        })
      )
      .toPromise();
  }

  isEnabled(user: UserWithPermissions): boolean {
    return !!user?.permissions?.includes(Permission.ENABLED);
  }

  isCompany(user: UserWithPermissions): boolean {
    return !!user?.permissions?.includes(Permission.COMPANY);
  }
}
