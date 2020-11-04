import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Card } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-cards-popup',
  templateUrl: './cards-popup.component.html',
  styleUrls: ['./cards-popup.component.scss'],
})
export class CardsPopupComponent implements OnInit {
  @Input() selectedCardIndex: number;
  @Input() selectedCard: Card;

  card: Card = {
    cardHeader: '',
    cardDetails: '',
  };

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.selectedCard.cardHeader && this.selectedCard.cardDetails) {
      this.card = { ...this.selectedCard };
    }
  }

  validateTextInput(input: NgModel): Boolean {
    return input.touched && (input.invalid || input.value.trim().length === 0);
  }
}
