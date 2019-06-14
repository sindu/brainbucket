import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupViewComponent } from './new-group-view.component';

describe('NewGroupViewComponent', () => {
  let component: NewGroupViewComponent;
  let fixture: ComponentFixture<NewGroupViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGroupViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGroupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
