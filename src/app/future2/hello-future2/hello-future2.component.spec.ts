import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFuture2Component } from './hello-future2.component';

describe('HelloFuture2Component', () => {
  let component: HelloFuture2Component;
  let fixture: ComponentFixture<HelloFuture2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloFuture2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloFuture2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
