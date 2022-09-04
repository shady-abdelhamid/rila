import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Device } from '../../models/device.type';
import { GatewayListDataSource } from '../../pages/gateway-list/gateway-datasource';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'rila-add-gateway-dialog',
  templateUrl: './add-gateway-dialog.component.html',
  styleUrls: ['./add-gateway-dialog.component.scss'],
})
export class AddGatewayDialogComponent {
  form = this.fb.group({
    serialNo: [null, Validators.required],
    name: [null, Validators.required],
    ipv4Address: [null, Validators.required],
    devices: this.fb.array([], Validators.required),

  });

  hasUnitNumber = false;
  hideBtn: boolean = false;

  get devices() {
    return this.form.controls['devices'] as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private gatewayService: GatewayService,
    private dialogRef: MatDialogRef<AddGatewayDialogComponent>
  ) {}

  addGateway() {
    this.gatewayService.add(this.form.value).subscribe((res) => {
      this.dialogRef.close({
        buttonAction: 'submit',
        data: res,
      });
    });
  }

  parseForm(form: AbstractControl) {
    return form as FormGroup;
  }

  onAddDeviceClick() {
    this.prepDevice();
  }

  /**
   * prepare next device placeholder form
   */
  private prepDevice() {
    this.devices.push(
      this.fb.group({
        uid: [null, Validators.required],
        vendor: [null, Validators.required],
        status: [null, Validators.required],
      })
    );
  }

  onSubmitDevice({ value, index }: { value: Device; index: number }) {
    this.devices.at(index).patchValue(value);
    this.prepDevice();
  }

  onRemoveDevice(index: number) {
    this.devices.removeAt(index);
  }
}
