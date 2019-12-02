import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenBookComponent } from './listen-book.component';

describe('ListenBookComponent', () => {
  let component: ListenBookComponent;
  let fixture: ComponentFixture<ListenBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
