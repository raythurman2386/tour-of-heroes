import { TestBed } from '@angular/core/testing';
import { HeroSearchComponent } from './hero-search.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from '../hero.service';

describe('HeroSearchComponent', () => {
  it('should create the component', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [HeroSearchComponent],
      providers: [HeroService],
    });

    const fixture = TestBed.createComponent(HeroSearchComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  })
});
