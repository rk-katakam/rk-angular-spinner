import { BehaviorSubject, Observable } from 'rxjs';
export declare class SpinnerService {
    protected _isLoaderShown: BehaviorSubject<boolean>;
    spinnerEmitter: Observable<boolean>;
    showLoader(): void;
    hideLoader(): void;
}
