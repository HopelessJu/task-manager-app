import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBoardPageComponent } from './single-board-page.component';

describe('SingleBoardPageComponent', () => {
  let component: SingleBoardPageComponent;
  let fixture: ComponentFixture<SingleBoardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBoardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
