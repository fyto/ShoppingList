import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCreditoComponent } from './total-credito.component';

describe('TotalCreditoComponent', () => {
  let component: TotalCreditoComponent;
  let fixture: ComponentFixture<TotalCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
