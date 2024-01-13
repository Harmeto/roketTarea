import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolSelectorComponent } from './arbol-selector.component';

describe('ArbolSelectorComponent', () => {
  let component: ArbolSelectorComponent;
  let fixture: ComponentFixture<ArbolSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbolSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArbolSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
