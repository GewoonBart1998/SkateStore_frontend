import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmminProductComponent } from './admmin-product.component';

describe('AdmminProductComponent', () => {
  let component: AdmminProductComponent;
  let fixture: ComponentFixture<AdmminProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmminProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmminProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
