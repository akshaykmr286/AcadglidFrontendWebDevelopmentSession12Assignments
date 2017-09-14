import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerDetailAss1Component } from './cricketer-detail-ass1.component';

describe('CricketerDetailAss1Component', () => {
  let component: CricketerDetailAss1Component;
  let fixture: ComponentFixture<CricketerDetailAss1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketerDetailAss1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketerDetailAss1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
