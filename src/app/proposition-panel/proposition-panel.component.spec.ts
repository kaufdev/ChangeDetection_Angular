import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionPanelComponent } from './proposition-panel.component';

describe('PropositionPanelComponent', () => {
  let component: PropositionPanelComponent;
  let fixture: ComponentFixture<PropositionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
