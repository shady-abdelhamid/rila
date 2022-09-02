import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GatewayListDataSource } from '../../pages/gateway-list/gateway-datasource';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'rila-add-gateway-dialog',
  templateUrl: './add-gateway-dialog.component.html',
  styleUrls: ['./add-gateway-dialog.component.scss'],
})
export class AddGatewayDialogComponent {
  form = this.fb.group({
    company: null,
    serialNo: [null, Validators.required],
    name: [null, Validators.required],
    ipv4Address: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(
    private fb: FormBuilder,
    private gatewayService: GatewayService,
    private dialogRef: MatDialogRef<AddGatewayDialogComponent>,

  ) {}

  addGateway() {
    this.gatewayService.add(this.form.value).subscribe((res) => {
      this.dialogRef.close({
        buttonAction: 'submit',
        data: res,
      });
    });
  }
}
