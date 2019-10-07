import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test3bComponent } from './test3b.component';

describe('Test3bComponent', () => {
  let component: Test3bComponent;
  let fixture: ComponentFixture<Test3bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test3bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test3bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
