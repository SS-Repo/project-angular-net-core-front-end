var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var FormDebugComponent = /** @class */ (function () {
    function FormDebugComponent() {
    }
    FormDebugComponent.prototype.ngOnInit = function () {
    };
    FormDebugComponent.prototype.funcao = function () {
        console.log(this.form);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormDebugComponent.prototype, "form", void 0);
    FormDebugComponent = __decorate([
        Component({
            selector: 'app-form-debug',
            templateUrl: './form-debug.component.html',
            styleUrls: ['./form-debug.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FormDebugComponent);
    return FormDebugComponent;
}());
export { FormDebugComponent };
//# sourceMappingURL=form-debug.component.js.map