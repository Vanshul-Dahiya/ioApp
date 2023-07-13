import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PendingDashboardPage } from './pending-dashboard.page';

describe('PendingDashboardPage', () => {
  let component: PendingDashboardPage;
  let fixture: ComponentFixture<PendingDashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PendingDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
