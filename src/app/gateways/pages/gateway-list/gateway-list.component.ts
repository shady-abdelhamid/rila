import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Gateway } from '../../models/gateway.class';
import { GatewayService } from '../../services/gateway.service';
import { GatewayListDataSource } from './gateway-datasource';
import {MatDialog} from '@angular/material/dialog';
import { AddGatewayDialogComponent } from '../../components/add-gateway-dialog/add-gateway-dialog.component';

@Component({
  selector: 'rila-gateway-list',
  templateUrl: './gateway-list.component.html',
  styleUrls: ['./gateway-list.component.scss'],
})
export class GatewayListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Gateway>;
  dataSource: GatewayListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['view', 'name', 'devices'];

  constructor(
    private gatewayService: GatewayService,
    public dialog: MatDialog
  ) {
    this.dataSource = new GatewayListDataSource();
  }

  ngOnInit(): void {
    this.gatewayService
      .getAll()
      .subscribe((res) => (this.dataSource.data = res));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddGatewayDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
