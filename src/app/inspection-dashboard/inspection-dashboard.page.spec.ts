import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InspectionDashboardPage } from './inspection-dashboard.page';

describe('InspectionDashboardPage', () => {
  let component: InspectionDashboardPage;
  let fixture: ComponentFixture<InspectionDashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InspectionDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
