import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test3aComponent } from './test3a.component';

describe('Test3aComponent', () => {
  let component: Test3aComponent;
  let fixture: ComponentFixture<Test3aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test3aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
