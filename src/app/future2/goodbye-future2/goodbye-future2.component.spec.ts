import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodbyeFuture2Component } from './goodbye-future2.component';

describe('GoodbyeFuture2Component', () => {
  let component: GoodbyeFuture2Component;
  let fixture: ComponentFixture<GoodbyeFuture2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodbyeFuture2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodbyeFuture2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
