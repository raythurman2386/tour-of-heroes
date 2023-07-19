import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { Hero } from './Hero';


describe('HeroService', () => {
  let heroService: HeroService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService, MessageService]
    });
    heroService = TestBed.inject(HeroService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(heroService).toBeTruthy();
  });

  it('should return an array of heroes', () => {
    const mockHeroes: Hero[] = [{ id: 1, name: 'Hero1' }, { id: 1, name: 'Hero2' }]

    heroService.getHeroes().subscribe((heroes) => {
      expect(heroes).toEqual(mockHeroes)
    });

    const req = httpTestingController.expectOne('api/heroes');
    expect(req.request.method).toEqual('GET');

    req.flush(mockHeroes)
  });

});
