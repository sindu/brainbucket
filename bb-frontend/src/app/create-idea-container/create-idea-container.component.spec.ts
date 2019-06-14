import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIdeaContainerComponent } from './create-idea-container.component';

describe('CreateIdeaContainerComponent', () => {
  let component: CreateIdeaContainerComponent;
  let fixture: ComponentFixture<CreateIdeaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIdeaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIdeaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
