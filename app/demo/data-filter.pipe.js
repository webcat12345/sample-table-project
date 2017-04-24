System.register(["lodash", "@angular/core"], function(exports_1, context_1) {
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
    var _, core_1;
    var DataFilterPipe;
    return {
        setters:[
            function (_1) {
                _ = _1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DataFilterPipe = (function () {
                function DataFilterPipe() {
                }
                DataFilterPipe.prototype.transform = function (array, query) {
                    if (query) {
                        return _.filter(array, function (row) { return row.name.indexOf(query) > -1; });
                    }
                    return array;
                };
                DataFilterPipe = __decorate([
                    core_1.Pipe({
                        name: "dataFilter"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DataFilterPipe);
                return DataFilterPipe;
            }());
            exports_1("DataFilterPipe", DataFilterPipe);
        }
    }
});
//# sourceMappingURL=data-filter.pipe.js.map