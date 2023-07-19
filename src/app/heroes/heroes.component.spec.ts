import { TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from '../hero.service';

describe('HeroesComponent', () => {
  it('should create the component', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [HeroesComponent],
      providers: [HeroService],
    });
    const fixture = TestBed.createComponent(HeroesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
