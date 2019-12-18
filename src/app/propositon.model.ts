import {PropositionStatus} from './proposition.status';

export class Proposition {
  price: number;
  type: string;
  status: PropositionStatus;

  constructor(price: number, type: string) {
    this.price = price;
    this.type = type;
  }
}
