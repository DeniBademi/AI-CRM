import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksWorkflowsComponent } from './tasks-workflows.component';

describe('TasksWorkflowsComponent', () => {
  let component: TasksWorkflowsComponent;
  let fixture: ComponentFixture<TasksWorkflowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksWorkflowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksWorkflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
