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
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { DeviceFormArrayComponent } from './components/device-form/device-form.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DetailsComponent } from './pages/details/details.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    GatewayListComponent,
    AddGatewayDialogComponent,
    DetailsComponent,
    DeviceListComponent,
    DeviceFormArrayComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
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
    MatListModule,
    MatChipsModule,
    ReactiveFormsModule,
  ],
  providers: [GatewayService],
})
export class GatewaysModule {}
