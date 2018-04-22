import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPropsComponent } from './user-props.component';

describe('UserPropsComponent', () => {
  let component: UserPropsComponent;
  let fixture: ComponentFixture<UserPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
