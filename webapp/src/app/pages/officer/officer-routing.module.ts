import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficerComponent } from './routes/root/officer.component';
import { LoginGuard } from '../../guards/login.guard';
import { OfficerGuard } from '../../guards/officer.guard';

const routes: Routes = [
  {
    path: '',
    component: OfficerComponent,
    canActivate: [LoginGuard, OfficerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficerRoutingModule {}
