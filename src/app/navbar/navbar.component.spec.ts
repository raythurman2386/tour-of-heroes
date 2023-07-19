import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from '../hero.service';

describe('NavbarComponent', () => {
  it('should create the component', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [NavbarComponent],
      providers: [HeroService],
    });
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
