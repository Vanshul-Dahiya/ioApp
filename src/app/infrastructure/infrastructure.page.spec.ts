import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { InfrastructurePage } from './infrastructure.page';

describe('InfrastructurePage', () => {
  let component: InfrastructurePage;
  let fixture: ComponentFixture<InfrastructurePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfrastructurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
