import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { HEROES } from './mock-heroes';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";


describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent, HeroDetailComponent ],
      imports: [FormsModule]
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

  it(`should have as name "Dr Nice"`, () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const heroComponent = fixture.debugElement.componentInstance;
    expect(heroComponent.heroes[0].name).toEqual('Dr Nice');
    expect(heroComponent.heroes[0].id).toEqual(11);
    expect(heroComponent.selectedHero).not.toBeTruthy();
  });

  it('should accept a onSelect() method', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const heroComponent = fixture.debugElement.componentInstance;
    heroComponent.onSelect(HEROES[0]);
    expect(heroComponent.selectedHero).toEqual(HEROES[0]);
  })

});
