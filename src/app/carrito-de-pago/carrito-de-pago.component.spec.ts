import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoDePagoComponent } from './carrito-de-pago.component';

describe('CarritoDePagoComponent', () => {
  let component: CarritoDePagoComponent;
  let fixture: ComponentFixture<CarritoDePagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarritoDePagoComponent]
    });
    fixture = TestBed.createComponent(CarritoDePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
