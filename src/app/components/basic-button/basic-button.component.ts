import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.css']
})
export class BasicButtonComponent {
  @Output() click = new EventEmitter();
  @Input() cta: string = 'BOOK A TABLE';

  handleClick() {
    this.click.emit();
  }

}
