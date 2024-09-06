import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  AfterViewInit,
  OnDestroy,
  Input,
} from '@angular/core';

@Directive({
  selector: '[ngIntersectView]',
})
export class NgIntersectViewDirective implements AfterViewInit, OnDestroy {
  @Output() isVisible = new EventEmitter<boolean>();
  @Input() threshold:number = 0.1;

  private observer!: IntersectionObserver;

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        // Emetti un evento quando l'elemento è visibile (o non visibile)
        this.isVisible.emit(entry.isIntersecting);
      },
      {
        threshold: this.threshold, // Definisci il valore di visibilità richiesto (ad es. 10% visibile)
      }
    );

    // Osserva l'elemento
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    // Smetti di osservare l'elemento quando il componente viene distrutto
    this.observer.disconnect();
  }
}
