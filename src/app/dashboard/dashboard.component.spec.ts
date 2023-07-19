import { TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from '../hero.service';
import { HeroSearchComponent } from '../hero-search/hero-search.component';


describe('DashboardComponent', () => {
  // Correctly placed it block inside describe
  it('should create the component', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [DashboardComponent, HeroSearchComponent],
      providers: [HeroService],
    });
    const fixture = TestBed.createComponent(DashboardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
