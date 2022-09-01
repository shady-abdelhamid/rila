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


@NgModule({
  declarations: [
    GatewayListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GatewaysRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
  ],
  providers: [ GatewayService]
})
export class GatewaysModule { }
