import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudeComponent } from './crude.component';

describe('CrudeComponent', () => {
  let component: CrudeComponent;
  let fixture: ComponentFixture<CrudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
