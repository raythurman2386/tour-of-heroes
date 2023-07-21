import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { Hero } from './Hero';


describe('HeroService', () => {
  let heroService: HeroService;
  let httpTestingController: HttpTestingController;
  let messageService: MessageService

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

  it('should return a hero when a valid ID is provided', fakeAsync(() => {
    const mockHero: Hero = { id: 1, name: 'Test Hero' };

    heroService.getHero(1).subscribe((hero) => {
      expect(hero).toEqual(mockHero);
    });

    const req = httpTestingController.expectOne('api/heroes/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockHero);

    tick();
  }));

  it('should log a message when a hero is fetched', fakeAsync(() => {
    const mockHero: Hero = { id: 1, name: 'Test Hero' };

    heroService.getHero(1).subscribe();

    const req = httpTestingController.expectOne('api/heroes/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockHero);

    tick();
  }));

  it('should update a hero', fakeAsync(() => {
    const mockHero: Hero = { id: 1, name: 'Test Hero' };

    heroService.updateHero(mockHero).subscribe();

    const req = httpTestingController.expectOne('api/heroes');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toBe(mockHero);
    req.flush({});

    tick();
  }));

  it('should add a hero', fakeAsync(() => {
    const mockHero: Hero = { id: 1, name: 'Test Hero' };

    heroService.addHero(mockHero).subscribe((newHero) => {
      expect(newHero).toEqual(mockHero);
    });

    const req = httpTestingController.expectOne('api/heroes');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(mockHero);
    req.flush(mockHero);

    tick();
  }));

});
