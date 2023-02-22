import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintBudgeComponent } from './print.budge.component';

describe('PrintBudgeComponent', () => {
  let component: PrintBudgeComponent;
  let fixture: ComponentFixture<PrintBudgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintBudgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintBudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
