import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestonWeddingComponent } from './weston-wedding.component';

describe('WestonWeddingComponent', () => {
  let component: WestonWeddingComponent;
  let fixture: ComponentFixture<WestonWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestonWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestonWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
