import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from '../hero.service';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { Hero } from '../Hero';
import { of } from 'rxjs';


class MockHeroService {
  getHeroes() {
    const mockHeroes: Hero[] = [
      { id: 1, name: 'Hero 1' },
      { id: 2, name: 'Hero 2' },
      { id: 3, name: 'Hero 3' },
      { id: 4, name: 'Hero 4' },
    ];
    return of(mockHeroes);
  }
}


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>
  let heroService: HeroService;

  it('should create the component', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [DashboardComponent, HeroSearchComponent],
      providers: [{ provide: heroService, useClass: MockHeroService }],
    });
    const fixture = TestBed.createComponent(DashboardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
