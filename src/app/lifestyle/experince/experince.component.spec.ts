import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperinceComponent } from './experince.component';

describe('ExperinceComponent', () => {
  let component: ExperinceComponent;
  let fixture: ComponentFixture<ExperinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
