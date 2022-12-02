import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperTopArticleComponent } from './swiper-top-article.component';

describe('SwiperTopArticleComponent', () => {
  let component: SwiperTopArticleComponent;
  let fixture: ComponentFixture<SwiperTopArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperTopArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperTopArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
