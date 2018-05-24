import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousProgrammingComponent } from './asynchronous-programming.component';

describe('AsynchronousProgrammingComponent', () => {
  let component: AsynchronousProgrammingComponent;
  let fixture: ComponentFixture<AsynchronousProgrammingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsynchronousProgrammingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynchronousProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
