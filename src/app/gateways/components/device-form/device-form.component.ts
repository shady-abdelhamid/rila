import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'rila-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.scss'],
})
export class DeviceFormArrayComponent implements OnInit {
  canBeRemoved: boolean = false;
  
  @Input() isEdit: boolean = false;
  @Input() form!: FormGroup;
  @Input() index!: number;
  @Output() submitForm = new EventEmitter();
  @Output() removeForm = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {}

  onAddClick() {
    this.canBeRemoved = true;
    this.submitForm.emit({ value: this.form.value, index: this.index });
  }

  onRemoveClick() {
    this.removeForm.emit(this.index);
  }
}
