var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("@framework/interfaces/request");
const inversify_1 = require("inversify");
const util_1 = require("util");
let Request = class Request extends request_1.default {
    setRequest(req) {
        this.req = req;
    }
    get method() {
        return this.req.method.toLowerCase();
    }
    getHeader(name) {
        return this.req.get(name);
    }
    get params() {
        return this.req.params;
    }
    isContentType(type) {
        const contentType = this.req.is(type);
        return !util_1.isUndefined(contentType) && contentType !== false;
    }
    get url() {
        return this.req.url;
    }
    get baseUrl() {
        return this.req.baseUrl;
    }
    get cleanUrl() {
        return this.req.url.split('?')[0];
    }
    getQueryString(override) {
        let queryString = '?';
        const { query } = this.req;
        Object.assign(query, override);
        Object.keys(query).forEach((key) => {
            const val = encodeURIComponent(query[key]);
            if (queryString.length > 1) {
                queryString += `&${key}=${val}`;
            }
            else {
                queryString += `${key}=${val}`;
            }
        });
        return queryString.length > 1 ? queryString : '';
    }
    get request() {
        return this.req;
    }
    /* eslint-disable */
    get(key) {
        if (!util_1.isUndefined(this.req[key])) {
            return this.req[key];
        }
        throw new Error(`key '${key}' is undefined.`);
    }
    set(key, value) {
        this.req[key] = value;
        return this;
    }
};
Request = __decorate([
    inversify_1.injectable()
], Request);
exports.default = Request;
//# sourceMappingURL=request.js.map