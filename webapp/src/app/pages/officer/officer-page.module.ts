import { NgModule } from '@angular/core';
import { OfficerRoutingModule } from './officer-routing.module';
import { OfficerComponent } from './routes/root/officer.component';
import { UsersTableComponent } from './components/officer-users-table/users-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    OfficerRoutingModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  declarations: [OfficerComponent, UsersTableComponent],
  providers: [],
  exports: []
})
export class OfficerPageModule {}
