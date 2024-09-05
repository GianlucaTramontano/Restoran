import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images-composition',
  templateUrl: './images-composition.component.html',
  styleUrls: ['./images-composition.component.css']
})
export class ImagesCompositionComponent {
isVisible:boolean = false;
@Input() images!:string[];

onVisibilityChange(val: boolean) {
  if (this.isVisible) return;
  this.isVisible = val;
}
}
