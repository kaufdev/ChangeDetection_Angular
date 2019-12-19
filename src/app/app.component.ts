import {Component} from '@angular/core';
import {PropositionProcessor} from './dependecies/propositon-generator.service';
import {Proposition} from './propositon.model';
import lodash from 'lodash';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  propositions: Proposition[] = [];

  constructor(private propositionProcessor: PropositionProcessor) {
    this.propositionProcessor.getNewProposition()
      .subscribe((proposition) => {
        this.propositions.unshift(proposition);
        this.propositions = lodash.cloneDeep(this.propositions);
      });
  }
}

