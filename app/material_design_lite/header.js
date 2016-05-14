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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var materialDesignLite_1 = require('./materialDesignLite');
var items_component_1 = require('app/items/items.component');
var search_history_component_1 = require('app/search_history/search_history.component');
var Header = (function () {
    function Header() {
    }
    Header = __decorate([
        core_1.Component({
            selector: 'header',
            directives: [materialDesignLite_1.MDL, router_deprecated_1.ROUTER_DIRECTIVES],
            templateUrl: 'app/material_design_lite/views/header.tmpl.html',
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS
            ],
            styleUrls: ['app/material_design_lite/styles/header_style.css']
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/items',
                name: 'Items',
                component: items_component_1.ItemsComponent,
                useAsDefault: true
            },
            // },
            {
                path: '/search',
                name: 'Search',
                component: search_history_component_1.SearchHistoryComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], Header);
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=header.js.map