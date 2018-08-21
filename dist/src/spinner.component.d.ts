import { AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';
export declare class SpinnerComponent implements AfterViewInit, OnInit {
    private cdr;
    private _spinnerService;
    textLabel: string;
    showLoader: boolean;
    constructor(cdr: ChangeDetectorRef, _spinnerService: SpinnerService);
    ngAfterViewInit(): void;
    ngOnInit(): void;
}
