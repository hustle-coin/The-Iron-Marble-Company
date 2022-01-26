import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OfficerService } from './officer.service';

@NgModule({
  providers: [OfficerService],
  imports: [HttpClientModule]
})
export class OfficerModule {}
