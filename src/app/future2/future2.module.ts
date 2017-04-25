import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloFuture2Component } from './hello-future2/hello-future2.component';
import { GoodbyeFuture2Component } from './goodbye-future2/goodbye-future2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HelloFuture2Component],
  declarations: [HelloFuture2Component, GoodbyeFuture2Component]
})
export class Future2Module { }
