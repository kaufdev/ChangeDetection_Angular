import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PropositionProcessor} from './dependecies/propositon-generator.service';
import {Proposition} from './propositon.model';
import {PropositionStatus} from './proposition.status';
import {computeWorld} from './dependecies/computer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  propositions: Proposition[] = [];

  constructor(private propositionProcessor: PropositionProcessor) {
    this.propositionProcessor.getNewProposition()
      .subscribe((proposition) => this.propositions.unshift(proposition));
  }
}
