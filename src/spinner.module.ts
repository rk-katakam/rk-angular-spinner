import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerService } from './spinner.service';
import { SpinnerComponent } from './spinner.component';
const SERVICES = [
    SpinnerService,
];

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SpinnerComponent
    ],
    exports: [
        SpinnerComponent
    ],
    providers: [
        SERVICES,
    ],
})
export class SpinnerModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: SpinnerModule,
            providers: [
                SERVICES.slice(),
            ],
        };
    }
}
