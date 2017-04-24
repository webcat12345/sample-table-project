System.register(['@angular/core', '@angular/common', "@angular/forms", "angular2-datatable", "@angular/http", './demo.component', './data-filter.pipe'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, angular2_datatable_1, http_1, demo_component_1, data_filter_pipe_1;
    var DemoModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (angular2_datatable_1_1) {
                angular2_datatable_1 = angular2_datatable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (demo_component_1_1) {
                demo_component_1 = demo_component_1_1;
            },
            function (data_filter_pipe_1_1) {
                data_filter_pipe_1 = data_filter_pipe_1_1;
            }],
        execute: function() {
            DemoModule = (function () {
                function DemoModule() {
                }
                DemoModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            angular2_datatable_1.DataTableModule,
                            forms_1.FormsModule,
                            http_1.HttpModule
                        ],
                        declarations: [demo_component_1.DemoComponent, data_filter_pipe_1.DataFilterPipe],
                        exports: [demo_component_1.DemoComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DemoModule);
                return DemoModule;
            }());
            exports_1("DemoModule", DemoModule);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=demo.module.js.map