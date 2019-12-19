import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {computeWorld} from '../dependecies/computer.service';
import {Proposition} from '../propositon.model';
import {PropositionStatus} from '../proposition.status';

@Component({
  selector: 'app-proposition-panel',
  templateUrl: './proposition-panel.component.html',
  styleUrls: ['./proposition-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropositionPanelComponent {

  @Input()
  propositions: Proposition[];

  @Output()
  decide = new EventEmitter<Proposition>();

  calculatePrice(number: number): number {
    console.log('calculate')
    computeWorld();
    return number;
  }

  accept(proposition: Proposition): void {
    proposition.status = PropositionStatus.ACCEPTED;
    this.decide.emit(proposition);
  }

  reject(proposition: Proposition): void {
    proposition.status = PropositionStatus.REJECTED;
    this.decide.emit(proposition);
  }

  getClass(proposition: Proposition): string {
    switch (proposition.status) {
      case PropositionStatus.ACCEPTED:
        return 'alert-success';
      case PropositionStatus.REJECTED:
        return 'alert-danger';
      default:
        return 'alert-info';
    }
  }
}
