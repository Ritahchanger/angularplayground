import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowernavbarComponent } from './lowernavbar.component';

describe('LowernavbarComponent', () => {
  let component: LowernavbarComponent;
  let fixture: ComponentFixture<LowernavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowernavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
