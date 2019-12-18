import {Component} from '@angular/core';
import {PropositionProcessor} from './dependecies/propositon-generator.service';
import {Proposition} from './propositon.model';
import {PropositionStatus} from './proposition.status';
import {computeWorld} from './dependecies/computer.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  propositions: Proposition[] = [];

  constructor(private propositionProcessor: PropositionProcessor) {
    this.propositionProcessor.getNewProposition()
      .subscribe((proposition) => this.propositions.unshift(proposition));
  }

  calculatePrice(number: number): number {
    computeWorld();
    return number;
  }

  accept(proposition: Proposition): void {
    proposition.status = PropositionStatus.ACCEPTED;
    this.propositionProcessor.sendDecision(proposition);
  }

  reject(proposition: Proposition): void {
    proposition.status = PropositionStatus.REJECTED;
    this.propositionProcessor.sendDecision(proposition);
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
