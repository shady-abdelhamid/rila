import { HttpStatusCode } from '@angular/common/http';
import { LIMIT, Status } from '../types';
import { Device } from './device.type';

export class Gateway {
  serialNo: string;
  name: string;
  ipv4Address: string;
  devices: Array<Device>;

  /** to check if gateway is fully occupied */
  get isFullyOccupied() {
    return this.devices.length === LIMIT;
  }

  constructor({ serialNo, name, ipv4Address, devices }: params) {
    this.serialNo = serialNo ?? undefined;
    this.name = name ?? undefined;
    this.ipv4Address = ipv4Address ?? undefined;
    this.devices = devices?.length ? [...devices] : [];
  }
}

type params = {
  serialNo: string;
  name: string;
  ipv4Address: string;
  devices: Device[];
};
