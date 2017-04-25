import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from './test/test.component';
import {HelloComponent} from './hello/hello.component';
import {GoodbyeComponent} from './goodbye/goodbye.component';



@NgModule({
    imports: [
        CommonModule
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
