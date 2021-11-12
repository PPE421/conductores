import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConduccionComponent } from './conduccion.component';

describe('ConduccionComponent', () => {
  let component: ConduccionComponent;
  let fixture: ComponentFixture<ConduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
