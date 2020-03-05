import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIndexWeightsComponent } from './create-index-weights.component';

describe('CreateIndexWeightsComponent', () => {
  let component: CreateIndexWeightsComponent;
  let fixture: ComponentFixture<CreateIndexWeightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIndexWeightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIndexWeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
