import { Component, Input } from '@angular/core';
import { SmallDataCard } from 'src/app/interfaces/about-section';

@Component({
  selector: 'app-small-data-card',
  templateUrl: './small-data-card.component.html',
  styleUrls: ['./small-data-card.component.css']
})
export class SmallDataCardComponent {
  @Input() smallDataCard: SmallDataCard = {
    number: 0,
    description: '',
    title: '',
  };

  isVisible:boolean = false;
  cardValue:number = 0;
  cardInterval:any;

  onVisible(val:boolean) {
    if(this.isVisible) return;
    this.isVisible = val;
    if(val) this.incrementCardValue()
  }

  incrementCardValue() {
    this.cardInterval = setInterval(() => {
      this.cardValue++;
      if(this.cardValue >= this.smallDataCard.number) {
        clearInterval(this.cardInterval);
      }
    }, 2000 / this.smallDataCard.number);
  }
}
