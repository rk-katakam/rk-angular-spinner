import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
    protected _isLoaderShown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public spinnerEmitter: Observable<boolean> = this._isLoaderShown.asObservable();

    public showLoader() {
        this._isLoaderShown.next(true);
    }
    public hideLoader() {
        this._isLoaderShown.next(false);
    }
}