import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2cComponent } from './test2c.component';

describe('Test2cComponent', () => {
  let component: Test2cComponent;
  let fixture: ComponentFixture<Test2cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test2cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
