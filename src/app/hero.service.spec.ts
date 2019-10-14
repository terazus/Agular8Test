import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });

  it('should return value from getHeroes()',
    (done: DoneFn) => {
      const service: HeroService = TestBed.get(HeroService);
      service.getHeroes().subscribe(value => {
        expect(value[0]).toEqual({id: 11, name: "Dr Nice"});
        done();
      });
    });

});
