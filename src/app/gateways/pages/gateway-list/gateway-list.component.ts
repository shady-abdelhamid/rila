import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Gateway } from '../../models/gateway.class';
import { GatewayService } from '../../services/gateway.service';
import { GatewayListDataSource } from './gateway-datasource';
import { MatDialog } from '@angular/material/dialog';
import { GatewayDialogComponent } from '../../components/gateway-dialog/gateway-dialog.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  displayedColumns = ['view', 'serial', 'name', 'devices'];

  constructor(
    private gatewayService: GatewayService,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.dataSource = new GatewayListDataSource();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.gatewayService.getAll().subscribe((res) => {
      this.dataSource.data = res;

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(GatewayDialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe((result) => {

      if (result) {
        location.reload();

        this.snackBar.open(`New gateway has been added`, undefined, {
          duration: 3000,
        });
      }
    });
  }

  redirectToDetails(index: string) {
    this.router.navigate(['/gateways', index]);
  }
}
