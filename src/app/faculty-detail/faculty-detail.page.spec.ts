import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacultyDetailPage } from './faculty-detail.page';

describe('FacultyDetailPage', () => {
  let component: FacultyDetailPage;
  let fixture: ComponentFixture<FacultyDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FacultyDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
