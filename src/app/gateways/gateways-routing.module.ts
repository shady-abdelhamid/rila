import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewayListComponent } from './pages/gateway-list/gateway-list.component';

const routes: Routes = [{ path: '', component: GatewayListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewaysRoutingModule { }
