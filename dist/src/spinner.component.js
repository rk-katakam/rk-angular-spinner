"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spinner_service_1 = require("./spinner.service");
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(cdr, _spinnerService) {
        this.cdr = cdr;
        this._spinnerService = _spinnerService;
        this.showLoader = false;
    }
    SpinnerComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    SpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Show or Hide Loader
        this._spinnerService.spinnerEmitter.subscribe(function (show) {
            setTimeout(function () { return _this.showLoader = show || false; }, 0);
        }, function (err) { console.error('SpinnerEmitter-', err); });
    };
    __decorate([
        core_1.Input('text'),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "textLabel", void 0);
    SpinnerComponent = __decorate([
        core_1.Component({
            selector: 'app-rk-spinner',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: ["@-moz-keyframes rotate-spinner {\n        0% {\n          transform: rotate(0deg);\n          -ms-transform: rotate(0deg);\n          -webkit-transform: rotate(0deg);\n          -o-transform: rotate(0deg);\n          -moz-transform: rotate(0deg);\n        }\n      \n        100% {\n          transform: rotate(360deg);\n          -ms-transform: rotate(360deg);\n          -webkit-transform: rotate(360deg);\n          -o-transform: rotate(360deg);\n          -moz-transform: rotate(360deg);\n        }\n      }\n      @-o-keyframes rotate-spinner {\n        0% {\n          transform: rotate(0deg);\n          -ms-transform: rotate(0deg);\n          -webkit-transform: rotate(0deg);\n          -o-transform: rotate(0deg);\n          -moz-transform: rotate(0deg);\n        }\n      \n        100% {\n          transform: rotate(360deg);\n          -ms-transform: rotate(360deg);\n          -webkit-transform: rotate(360deg);\n          -o-transform: rotate(360deg);\n          -moz-transform: rotate(360deg);\n        }\n      }\n      @-webkit-keyframes rotate-spinner {\n        0% {\n          transform: rotate(0deg);\n          -ms-transform: rotate(0deg);\n          -webkit-transform: rotate(0deg);\n          -o-transform: rotate(0deg);\n          -moz-transform: rotate(0deg);\n        }\n      \n        100% {\n          transform: rotate(360deg);\n          -ms-transform: rotate(360deg);\n          -webkit-transform: rotate(360deg);\n          -o-transform: rotate(360deg);\n          -moz-transform: rotate(360deg);\n        }\n      }\n      @keyframes rotate-spinner {\n        0% {\n          transform: rotate(0deg);\n          -ms-transform: rotate(0deg);\n          -webkit-transform: rotate(0deg);\n          -o-transform: rotate(0deg);\n          -moz-transform: rotate(0deg);\n        }\n      \n        100% {\n          transform: rotate(360deg);\n          -ms-transform: rotate(360deg);\n          -webkit-transform: rotate(360deg);\n          -o-transform: rotate(360deg);\n          -moz-transform: rotate(360deg);\n        }\n      }\n      @-moz-keyframes spinner-text-opacity {\n        0%,\n        20% {\n          opacity: 0;\n        }\n      \n        50% {\n          opacity: 1;\n        }\n      \n        100% {\n          opacity: 0;\n        }\n      }\n      @-o-keyframes spinner-text-opacity {\n        0%,\n        20% {\n          opacity: 0;\n        }\n      \n        50% {\n          opacity: 1;\n        }\n      \n        100% {\n          opacity: 0;\n        }\n      }\n      @-webkit-keyframes spinner-text-opacity {\n        0%,\n        20% {\n          opacity: 0;\n        }\n      \n        50% {\n          opacity: 1;\n        }\n      \n        100% {\n          opacity: 0;\n        }\n      }\n      @keyframes spinner-text-opacity {\n        0%,\n        20% {\n          opacity: 0;\n        }\n      \n        50% {\n          opacity: 1;\n        }\n      \n        100% {\n          opacity: 0;\n        }\n      }\n      \n      #rk-angular-spinner .spinner {\n          height: 110px;\n          position: relative;\n          width: 110px;\n          border-radius: 100%;\n        }\n      #rk-angular-spinner .spinner-container {\n        height: 115px;\n        position: relative;\n        width: 115px;\n        border-radius: 100%;\n      }\n      \n      #rk-angular-spinner .spinner-container {\n        margin: 40px auto;\n      }\n      \n      #rk-angular-spinner .spinner {\n        border: 2px solid transparent;\n        border-color: transparent #00ACDD transparent #00ACDD;\n        -moz-animation: rotate-spinner 1.5s linear 0s infinite normal;\n        -moz-transform-origin: 50% 50%;\n        -o-animation: rotate-spinner 1.5s linear 0s infinite normal;\n        -o-transform-origin: 50% 50%;\n        -webkit-animation: rotate-spinner 1.5s linear 0s infinite normal;\n        -webkit-transform-origin: 50% 50%;\n        animation: rotate-spinner 1.5s linear 0s infinite normal;\n        transform-origin: 50% 50%;\n      }\n      \n      #rk-angular-spinner .spinner-container:hover .spinner {\n        border-color: transparent #E45635;\n      }\n      \n      #rk-angular-spinner .spinner-container .spinner,\n      #rk-angular-spinner .spinner-container:hover .spinner {\n        -webkit-transition: all .5s ease-in-out;\n        -moz-transition: all .5s ease-in-out;\n        -ms-transition: all .5s ease-in-out;\n        -o-transition: all .5s ease-in-out;\n        transition: all .5s ease-in-out;\n      }\n      \n      #spinner-text {\n        -moz-animation: spinner-text-opacity 2s linear 0s infinite normal;\n        -o-animation: spinner-text-opacity 2s linear 0s infinite normal;\n        -webkit-animation: spinner-text-opacity 2s linear 0s infinite normal;\n        animation: spinner-text-opacity 2s linear 0s infinite normal;\n        color: #00ACDD;\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        margin-top: 45px;\n        opacity: 0;\n        position: absolute;\n        text-align: center;\n        top: 0;\n        width: 105px;\n      }\n      \n      #rk-angular-spinner .overlay {\n        position: absolute;\n        left: 0;\n        right: 0;\n        background-color: #000;\n        overflow: hidden;\n        opacity: .7;\n        width: 100%;\n        height: 100%;\n        transition: .5s;\n        z-index: 99999;\n        top: 0;\n      }\n      \n      #rk-angular-spinner .overlay-body {\n        white-space: nowrap;\n        position: fixed;\n        overflow: hidden;\n        top: 50%;\n        left: 50%;\n        opacity: 1 !important;\n        transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n        z-index: 99999;\n      }\n      "],
            template: "\n    <div id=\"rk-angular-spinner\" *ngIf=\"showLoader\">\n        <div class=\"overlay\">\n        </div>\n        <div class=\"overlay-body\">\n            <div class=\"spinner-container\">\n                <div class=\"spinner\"></div>\n                <div id=\"spinner-text\"> {{textLabel || 'Loading..'}} </div>\n            </div>\n        </div>\n    </div>"
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, spinner_service_1.SpinnerService])
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;
