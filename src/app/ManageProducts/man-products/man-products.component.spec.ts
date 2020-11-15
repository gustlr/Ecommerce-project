import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManProductsComponent } from './man-products.component';

describe('ManProductsComponent', () => {
  let component: ManProductsComponent;
  let fixture: ComponentFixture<ManProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
