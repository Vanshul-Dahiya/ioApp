import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelallowancePage } from './travelallowance.page';

describe('TravelallowancePage', () => {
  let component: TravelallowancePage;
  let fixture: ComponentFixture<TravelallowancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TravelallowancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
