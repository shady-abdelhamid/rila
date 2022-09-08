import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Device } from '../../models/device.type';
import { Gateway } from '../../models/gateway.class';
import { GatewayService } from '../../services/gateway.service';
import { LIMIT } from '../../types';

@Component({
  selector: 'rila-gateway-dialog',
  templateUrl: './gateway-dialog.component.html',
  styleUrls: ['./gateway-dialog.component.scss'],
})
export class GatewayDialogComponent implements OnInit {
  form!: FormGroup;

  hasUnitNumber = false;
  hideBtn: boolean = false;
  gateway!: Gateway;

  get devices() {
    return this.form.controls['devices'] as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private gatewayService: GatewayService,
    private dialogRef: MatDialogRef<GatewayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.gateway = this.data?.gateway as Gateway;

    this.form = this.fb.group({
      name: [this.gateway?.name || null, Validators.required],
      ipv4: [this.gateway?.ipv4 || null, Validators.required],
      devices: this.fb.array(
        [],
        [Validators.required, Validators.maxLength(LIMIT)]
      ),
    });

    if (this.gateway) {
      const serialControl = new FormControl(this.gateway.serial);
      serialControl.disable();
      this.form.addControl('serial', serialControl);

      this.gateway.devices.forEach((device) => {
        this.prepDevice(device);
      });
    }
  }

  onClick() {
    !this.isEdit() ? this.addGateway() : this.editGateway();
  }

  addGateway() {
    this.gatewayService.add(this.form.value).subscribe((res) => {
      this.dialogRef.close({
        buttonAction: 'submit',
        data: res,
      });
    });
  }

  editGateway() {
    console.log(this.form.value);
    this.gatewayService.edit(this.form.value).subscribe((res) => {
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
    if (this.gateway?.isFullyOccupied) return;
    this.prepDevice();
  }

  /**
   * prepare next device placeholder form
   */
  private prepDevice(device?: Device) {
    const formGroup = this.fb.group({
      vendor: [device?.vendor || null, Validators.required],
      status: [device?.status || null, Validators.required],
    });
    if (this.isEdit()) {
      const uidControl = new FormControl(device?.uid || '');
      uidControl.disable();
      formGroup.addControl('uid', uidControl);
    }
    this.devices.push(formGroup);
  }

  onSubmitDevice({ value, index }: { value: Device; index: number }) {
    this.devices.at(index).patchValue(value);
    this.prepDevice();
  }

  onRemoveDevice(index: number) {
    this.devices.removeAt(index);
  }

  isEdit() {
    return !!this.data?.gateway;
  }
}
