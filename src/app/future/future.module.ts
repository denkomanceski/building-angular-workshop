import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from './test/test.component';
import {HelloComponent} from './hello/hello.component';
import {GoodbyeComponent} from './goodbye/goodbye.component';
import {Future2Module} from '../future2/future2.module';


@NgModule({
    imports: [
        CommonModule,
        Future2Module
    ],
    declarations: [
        TestComponent,
        HelloComponent,
        GoodbyeComponent
    ],
    exports: [
        TestComponent
    ]
})
export class FutureModule {
}
