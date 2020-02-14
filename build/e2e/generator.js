"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generator(prefix) {
    return function (method) {
        return prefix + "-" + method + "-" + Math.floor(Math.random() * Math.pow(2, 32)).toString(16);
    };
}
exports.default = generator;
