import {
  Directive,
  HostListener,
  ElementRef,
  Input,
  Output,
  OnInit,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[addDotOnEnter]',
})
export class AddDotOnEnterDirective implements OnInit {
  @Input() stringArray: string[];
  @Output() stringArrayChange = new EventEmitter();
  @HostListener('keydown.enter', ['$event']) onEnter(event: KeyboardEvent) {
    this.rawValue = this.rawValue += '\n• ';
    event.preventDefault();
  }
  @HostListener('change', ['$event']) change(event) {
    this.stringArrayChange.emit(this.rawValue.split('\n• '));
  }

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    let temp: string = '•';
    this.stringArray.forEach((item) => {
      if (temp) temp += '\r\n';
      temp += '• ' + item;
    });

    this.rawValue = temp;
  }

  get rawValue(): string {
    return this.elementRef.nativeElement.value;
  }
  set rawValue(value: string) {
    this.elementRef.nativeElement.value = value;
  }
}
