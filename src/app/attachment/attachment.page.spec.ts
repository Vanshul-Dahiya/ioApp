import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AttachmentPage } from './attachment.page';

describe('AttachmentPage', () => {
  let component: AttachmentPage;
  let fixture: ComponentFixture<AttachmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AttachmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
