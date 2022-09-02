import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from '../../models/device.type';

@Component({
  selector: 'rila-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  @Input() deviceList: Array<Device> | undefined;
  displayedColumns: string[] = ['uid', 'vendor', 'updated-at', 'status'];
  dataSource = new MatTableDataSource<Device>();

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.deviceList);
  }
}
