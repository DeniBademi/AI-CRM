import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineTuneAiComponent } from './fine-tune-ai.component';

describe('FineTuneAiComponent', () => {
  let component: FineTuneAiComponent;
  let fixture: ComponentFixture<FineTuneAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FineTuneAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FineTuneAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
