import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2bComponent } from './test2b.component';

describe('Test2bComponent', () => {
  let component: Test2bComponent;
  let fixture: ComponentFixture<Test2bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test2bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
