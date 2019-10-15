import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HEROES } from './mock-heroes';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";


describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent, HeroDetailComponent ],
      imports: [FormsModule, RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept a getHeroes() method', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const heroComponent = fixture.debugElement.componentInstance;
    heroComponent.getHeroes();
    expect(heroComponent.heroes).toEqual(HEROES);
  })

});
