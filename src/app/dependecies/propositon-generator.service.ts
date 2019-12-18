import {Injectable} from '@angular/core';
import {BehaviorSubject, interval, Observable, of, timer} from 'rxjs';
import {Proposition} from '../propositon.model';

@Injectable()
export class PropositionProcessor {
  newProposition: BehaviorSubject<Proposition> = new BehaviorSubject<Proposition>(new Proposition(0, 'nothing'));
  treasure: string[] = ['Gold', 'Silver', 'Platinum', 'Alcohol', 'Uranium'];

  constructor() {
    this.dumpStartArray();
    interval(2000)
      .subscribe(val => this.pushRandomPropostion());
    // .subscribe(val => setTimeout(() => this.pushRandomPropostion(), this.getRandomNumberTo(5000)));
  }

  private dumpStartArray() {

  }

  getNewProposition(): Observable<Proposition> {
    return this.newProposition;
  }

  sendDecision(proposition: Proposition) {

  }

  public getRandomNumberTo(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  private pushRandomPropostion(): void {
    this.newProposition.next(new Proposition(this.getRandomNumberTo(6), this.treasure[this.getRandomNumberTo(4)]));
  }
}
