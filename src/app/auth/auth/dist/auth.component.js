"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthComponent = void 0;
var core_1 = require("@angular/core");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(_authService) {
        this._authService = _authService;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.onSwitchMode = function () {
        this.isLoginMode = !this.isLoginMode;
        console.log('Login mode is', this.isLoginMode);
    };
    AuthComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!form.valid) {
            return;
        }
        var email = form.value.email;
        var password = form.value.password;
        this.isLoading = true;
        if (this.isLoginMode) {
            // ...
        }
        else {
            this._authService.signup(email, password).subscribe({
                next: function (response) {
                    console.log(response);
                    _this.isLoading = false;
                },
                error: function (error) {
                    console.log(error);
                    _this.error = "An error occurred";
                    _this.isLoading = false;
                }
            });
        }
        form.reset();
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.css']
        })
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
