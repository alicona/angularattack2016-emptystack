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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var ApiService = (function () {
    function ApiService(jsonp) {
        this.jsonp = jsonp;
    }
    ApiService.prototype.getData = function (shop, query, page) {
        switch (shop) {
            case "walmart":
                return this.getWalmartData(query, page);
            case "ebay":
                return this.getEbayData(query, page);
            default:
                break;
        }
    };
    ApiService.prototype.getWalmartData = function (query, page) {
        var walmart = 'http://api.walmartlabs.com/v1/search';
        var params = new http_1.URLSearchParams();
        params.set('apiKey', 'kqumn8wgq6xp95kr6hy2q44q');
        params.set('query', query);
        params.set('numItems', '5');
        params.set('start', page.toString());
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        // TODO: Add error handling
        console.log(params);
        return this.jsonp
            .get(walmart, { search: params })
            .map(function (request) { return request.json(); });
    };
    ApiService.prototype.getEbayData = function (query, page) {
        var walmart = 'http://svcs.ebay.com/services/search/FindingService/v1';
        var params = new http_1.URLSearchParams();
        params.set('OPERATION-NAME', 'findItemsByKeywords');
        params.set('SERVICE-VERSION', '1.0.0');
        params.set('SECURITY-APPNAME', 'AlainLic-emptysta-PRD-02f839347-58647d3e');
        params.set('GLOBAL-ID', 'EBAY-US');
        params.set('RESPONSE-DATA-FORMAT', 'JSON');
        params.set('keywords', query);
        params.set('paginationInput.entriesPerPage', '5');
        //params.set('start', page.toString());
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        // TODO: Add error handling
        console.log(params);
        return this.jsonp
            .get(walmart, { search: params })
            .map(function (request) { return request.json(); });
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map