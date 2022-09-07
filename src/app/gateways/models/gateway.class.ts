import { HttpStatusCode } from '@angular/common/http';
import { LIMIT, Status } from '../types';
import { Device } from './device.type';

export class Gateway {
  serial: string;
  name: string;
  ipv4: string;
  devices: Array<Device>;

  /** to check if gateway is fully occupied */
  get isFullyOccupied() {
    return this.devices.length === LIMIT;
  }

  constructor({ serial, name, ipv4, devices }: params) {
    this.serial = serial ?? undefined;
    this.name = name ?? undefined;
    this.ipv4 = ipv4 ?? undefined;
    this.devices = devices?.length ? [...devices] : [];
  }
}

type params = {
  serial: string;
  name: string;
  ipv4: string;
  devices: Device[];
};
