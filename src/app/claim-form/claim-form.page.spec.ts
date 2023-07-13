import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaimFormPage } from './claim-form.page';

describe('ClaimFormPage', () => {
  let component: ClaimFormPage;
  let fixture: ComponentFixture<ClaimFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClaimFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
