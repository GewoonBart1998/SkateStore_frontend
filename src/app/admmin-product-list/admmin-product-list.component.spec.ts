import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmminProductListComponent } from './admmin-product-list.component';

describe('AdmminProductListComponent', () => {
  let component: AdmminProductListComponent;
  let fixture: ComponentFixture<AdmminProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmminProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmminProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
