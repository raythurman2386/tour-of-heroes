import { TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

describe('HeroDetailComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [HeroDetailComponent],
      providers: [
        HeroService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (param: string) => '1', // Example: If 'id' is 1
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(HeroDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
