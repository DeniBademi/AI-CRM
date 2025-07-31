import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsWorkbooksComponent } from './leads-workbooks.component';

describe('LeadsWorkbooksComponent', () => {
  let component: LeadsWorkbooksComponent;
  let fixture: ComponentFixture<LeadsWorkbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadsWorkbooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadsWorkbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
