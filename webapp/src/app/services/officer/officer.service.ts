import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { OfficerUser, EnableUser, CompanyUser, UserWithPermissions} from '@The-Iron-Marble-Company/model';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<UserWithPermissions[]> {
    return this.http.get<UserWithPermissions[]>('/api/officer/users');
  }

  public setEnabled(id: number, enabled: boolean): Observable<unknown> {
    const payload: EnableUser = {
      userId: id,
      enabled
    };
    return this.http.post(`/api/officer/users/enable`, payload, { withCredentials: true });
  }

  public setCompany(id: number, company: boolean): Observable<unknown> {
    const payload: CompanyUser = {
      userId: id,
      company
    };
    return this.http.post(`/api/officer/users/company`, payload, { withCredentials: true });
  }

}
