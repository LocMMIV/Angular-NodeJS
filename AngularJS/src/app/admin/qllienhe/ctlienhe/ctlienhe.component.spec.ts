import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtlienheComponent } from './ctlienhe.component';

describe('CtlienheComponent', () => {
  let component: CtlienheComponent;
  let fixture: ComponentFixture<CtlienheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CtlienheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtlienheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
