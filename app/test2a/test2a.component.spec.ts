import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2aComponent } from './test2a.component';

describe('Test2aComponent', () => {
  let component: Test2aComponent;
  let fixture: ComponentFixture<Test2aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test2aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
