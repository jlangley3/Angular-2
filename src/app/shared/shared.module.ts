import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './custom.pipe';


@NgModule({
  declarations: [ CapitalizePipe ],
  exports: [ CapitalizePipe ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
