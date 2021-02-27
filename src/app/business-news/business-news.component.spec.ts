import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessNewsComponent } from './business-news.component';

describe('BusinessNewsComponent', () => {
  let component: BusinessNewsComponent;
  let fixture: ComponentFixture<BusinessNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
