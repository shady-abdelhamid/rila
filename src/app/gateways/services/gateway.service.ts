import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gateway } from '../models/gateway.class';
import { Observable, of } from 'rxjs';
import { Status } from '../types';
import { GATEWAY } from 'src/app/service-config';

@Injectable()
export class GatewayService {
  gateways: any;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Gateway>> {
    return this.http.get<Array<Gateway>>(GATEWAY.LIST);
  }

  getDetails(serial: string): Observable<Gateway> {
    return this.http.get<Gateway>(GATEWAY.DETAILS(serial));
  }

  add(payload: Gateway): Observable<any> {
    return this.http.post<Gateway>(GATEWAY.CREATE, payload);
  }

  edit(payload: Gateway) {
    return this.http.patch<Gateway>(GATEWAY.UPDATE(payload.serial), payload);
  }
}
