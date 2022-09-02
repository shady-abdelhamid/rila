import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gateway } from '../models/gateway.class';
import { Observable, of } from 'rxjs';
import { Status } from '../types';

@Injectable()
export class GatewayService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Gateway>> {
    return of([
      new Gateway({
        serialNo: 'g1',
        name: 'alpha',
        ipv4Address: '',
        devices: [
          {
            uId: 'd1',
            vendor: 'intel',
            updatedAt: new Date(),
            status: Status.online,
          },
          {
            uId: 'd2',
            vendor: 'apple',
            updatedAt: new Date(),
            status: Status.online,
          },
        ],
      }),
      new Gateway({
        serialNo: 'g2',
        name: 'bravo',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g3',
        name: 'charlie',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g4',
        name: 'delta',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g5',
        name: 'eccho',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g6',
        name: 'foxtrot',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g7',
        name: 'golf',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g8',
        name: 'hotel',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g9',
        name: 'india',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g10',
        name: 'juliett',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g11',
        name: 'kilo',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g12',
        name: 'lima',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g13',
        name: 'mike',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g14',
        name: 'november',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g15',
        name: 'oscar',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g16',
        name: 'papa',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g17',
        name: 'quebec',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g18',
        name: 'romeo',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g19',
        name: 'sierra',
        ipv4Address: '',
        devices: [],
      }),
      new Gateway({
        serialNo: 'g20',
        name: 'tango',
        ipv4Address: '',
        devices: [],
      }),
    ]);
  }

  getDetails(serialNo: string): Observable<Gateway> {
    // return this.http.get<any>(CATEGORY.DETAILS(id));
    console.log('get Gateway details');
    return of(
      new Gateway({
        serialNo: 'g1',
        name: 'alpha',
        ipv4Address: '123.456.789',
        devices: [
          {
            uId: 'd1',
            vendor: 'intel',
            updatedAt: new Date(),
            status: Status.online,
          },
          {
            uId: 'd2',
            vendor: 'apple',
            updatedAt: new Date(),
            status: Status.offline,
          },
          {
            uId: 'd3',
            vendor: 'intel',
            updatedAt: new Date(),
            status: Status.online,
          },
          {
            uId: 'd4',
            vendor: 'apple',
            updatedAt: new Date(),
            status: Status.online,
          },
          {
            uId: 'd5',
            vendor: 'intel',
            updatedAt: new Date(),
            status: Status.online,
          },
          {
            uId: 'd6',
            vendor: 'apple',
            updatedAt: new Date(),
            status: Status.offline,
          },
          {
            uId: 'd7',
            vendor: 'intel',
            updatedAt: new Date(),
            status: Status.online,
          },
          {
            uId: 'd8',
            vendor: 'apple',
            updatedAt: new Date(),
            status: Status.offline,
          },
        ],
      })
    );
  }

  add(payload: Gateway): Observable<any> {
    // return this.http.post<Gateway>('', payload);
    console.log('add gateway');
    return of({});
  }

  edit(payload: Gateway) {
    // return this.http.put<Gateway>('', payload);
    console.log('add gateway');
  }
}
