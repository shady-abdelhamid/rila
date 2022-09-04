import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceFormArrayComponent } from './device-form.component';

describe('DeviceFormArrayComponent', () => {
  let component: DeviceFormArrayComponent;
  let fixture: ComponentFixture<DeviceFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceFormArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
