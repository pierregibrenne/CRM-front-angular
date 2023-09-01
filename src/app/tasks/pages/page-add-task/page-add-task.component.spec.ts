import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddTaskComponent } from './page-add-task.component';

describe('PageAddTaskComponent', () => {
  let component: PageAddTaskComponent;
  let fixture: ComponentFixture<PageAddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
