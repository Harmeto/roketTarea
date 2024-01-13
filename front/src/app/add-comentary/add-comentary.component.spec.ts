import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComentaryComponent } from './add-comentary.component';

describe('AddComentaryComponent', () => {
  let component: AddComentaryComponent;
  let fixture: ComponentFixture<AddComentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddComentaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddComentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
