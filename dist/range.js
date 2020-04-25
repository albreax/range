"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = (from, to, step = 1) => {
    if (from > to)
        throw new Error("From must be larger then to!");
    if (step < 1)
        throw new Error("Step has to be larger then 0!");
    return {
        from,
        to,
        step,
        iterate: (callbackFn) => {
            [...exports.range(from, to, step)]
                .forEach((v, i) => callbackFn(v, i));
        },
        *[Symbol.iterator]() {
            for (let i = from; i < to; i += step)
                yield i;
        }
    };
};
