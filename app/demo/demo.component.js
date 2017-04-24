System.register(["@angular/core", "@angular/http", 'ng2-bootstrap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, ng2_bootstrap_1;
    var DemoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            DemoComponent = (function () {
                function DemoComponent(http) {
                    this.http = http;
                    this.filterQuery = "";
                    this.rowsOnPage = 10;
                    this.sortBy = "email";
                    this.sortOrder = "asc";
                    this.sortByWordLength = function (a) {
                        return a.city.length;
                    };
                }
                DemoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.http.get("app/demo/data.json")
                        .subscribe(function (data) {
                        setTimeout(function () {
                            _this.data = data.json();
                        }, 1000);
                    });
                };
                DemoComponent.prototype.toInt = function (num) {
                    return +num;
                };
                DemoComponent.prototype.remove = function (item) {
                    this.currentItem = item;
                    this.showChildModal();
                };
                DemoComponent.prototype.onConfirmDelete = function () {
                    var index = this.data.indexOf(this.currentItem);
                    if (index > -1) {
                        this.data.splice(index, 1);
                        this.hideChildModal();
                    }
                };
                DemoComponent.prototype.showChildModal = function () {
                    this.childModal.show();
                };
                DemoComponent.prototype.hideChildModal = function () {
                    this.childModal.hide();
                };
                __decorate([
                    core_1.ViewChild('childModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], DemoComponent.prototype, "childModal", void 0);
                DemoComponent = __decorate([
                    core_1.Component({
                        selector: 'demo',
                        templateUrl: './app/demo/demo.component.html'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], DemoComponent);
                return DemoComponent;
                var _a;
            }());
            exports_1("DemoComponent", DemoComponent);
        }
    }
});
//# sourceMappingURL=demo.component.js.map