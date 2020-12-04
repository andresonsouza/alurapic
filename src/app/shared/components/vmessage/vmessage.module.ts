import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VMessageComponent } from './vmessage.component';

@NgModule({
  declarations: [VMessageComponent, CommonModule],
  exports: [VMessageComponent]
})
export class VMessageModule {
}
