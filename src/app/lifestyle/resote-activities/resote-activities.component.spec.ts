import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResoteActivitiesComponent } from './resote-activities.component';

describe('ResoteActivitiesComponent', () => {
  let component: ResoteActivitiesComponent;
  let fixture: ComponentFixture<ResoteActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResoteActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResoteActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
