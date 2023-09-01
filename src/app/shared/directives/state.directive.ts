import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective {
  @Input() etat!: string;

  @HostBinding('class') divClassName!: string;
  constructor() {
    // console.log('depuis directive appstate');
  }

  ngOnChanges() {
    this.etat = this.etat.replace(/\s/g, '-');
    // console.log(this.etat);
    this.divClassName = `state-${this.etat.toLowerCase()}`;
    console.log(this.divClassName);
  }
}
