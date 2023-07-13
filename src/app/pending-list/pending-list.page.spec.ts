import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PendingListPage } from './pending-list.page';

describe('PendingListPage', () => {
  let component: PendingListPage;
  let fixture: ComponentFixture<PendingListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PendingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
