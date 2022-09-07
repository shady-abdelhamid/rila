import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { GatewayDialogComponent } from '../../components/gateway-dialog/gateway-dialog.component';
import { Gateway } from '../../models/gateway.class';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'rila-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: string | undefined;
  details: Gateway | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gatewayService: GatewayService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }: any) => {
      if (id) {
        this.id = id;
        this.getDetails(id);
      }
    });
  }

  async getDetails(id: string) {
    this.details = await lastValueFrom(this.gatewayService.getDetails(id));
  }

  openDialog() {
    const dialogRef = this.dialog.open(GatewayDialogComponent, {
      width: '800px',
      data: {
        gateway: this.details,
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // location.reload();
        this.snackBar.open(`gateway has been updated successfuly`, undefined, {
          duration: 3000,
        });
      }
    });
  }
}
