import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss'],
})
export class InformationCardComponent implements OnInit {
  @Input() card: Card;

  cardDetails: string[];

  constructor() {}

  ngOnInit(): void {
    this.cardDetails = this.card.cardDetails.split('\n');
  }
}
