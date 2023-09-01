import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BtnComponent, StateDirective],
  imports: [CommonModule, RouterModule],
  exports: [StateDirective, BtnComponent],
})
export class SharedModule {}
