import { Component, Input, AfterViewInit } from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.css']
})
export class BasicCardComponent {
  @Input() icon!:IconName;
  @Input() title!:string;
  @Input() description!:string;
  @Input() delay!:number;

  isVisible:boolean = false;
  
  onVisibilityChange(val:boolean){
    if(this.isVisible) return;
    this.isVisible = val;
  }
}
