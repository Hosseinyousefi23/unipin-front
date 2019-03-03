import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPostsComponent } from './offer-posts.component';

describe('OfferPostsComponent', () => {
  let component: OfferPostsComponent;
  let fixture: ComponentFixture<OfferPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
