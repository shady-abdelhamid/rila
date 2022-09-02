import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatewaysRoutingModule } from './gateways-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { GatewayListComponent } from './pages/gateway-list/gateway-list.component';
import { MatIconModule } from '@angular/material/icon';
import { GatewayService } from './services/gateway.service';
import { HttpClientModule } from '@angular/common/http';
import { AddGatewayDialogComponent } from './components/add-gateway-dialog/add-gateway-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    GatewayListComponent,
    AddGatewayDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GatewaysRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [ GatewayService]
})
export class GatewaysModule { }
