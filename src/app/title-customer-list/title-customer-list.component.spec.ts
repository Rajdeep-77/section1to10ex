import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCustomerListComponent } from './title-customer-list.component';

describe('TitleCustomerListComponent', () => {
  let component: TitleCustomerListComponent;
  let fixture: ComponentFixture<TitleCustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCustomerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
