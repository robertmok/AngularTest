import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1aComponent } from '../test1a/test1a.component';
import { Test1bComponent } from '../test1b/test1b.component';
import { routing } from './test1.routing';

@NgModule({
  imports: [
    CommonModule,
    routing // lazy loading
  ],
  declarations: [
    Test1aComponent,
    Test1bComponent
  ],
  exports: [
    Test1aComponent,
    Test1bComponent
  ]
})
export class Test1Module { }
