interface IRange<T> extends Iterable<T>{
    readonly from: number;
    readonly to: number;
    readonly step: number;
    readonly iterate: (callbackFn: (value: T, index: number) => void) => void;
}

export const range: (from: number, to: number, step?: number) => IRange<number> = (from, to, step = 1) => {
    if(from > to) throw new Error("From must be larger then to!");
    if(step < 1) throw new Error("Step has to be larger then 0!");
    return {
        from,
        to,
        step,
        iterate: (callbackFn: (value: number, index: number) => void) => {
            [...range(from, to, step)]
            .forEach((v, i) => callbackFn(v, i))
        }, 
        *[Symbol.iterator] () {
            for (let i = from; i < to; i+=step) yield i;
        }
    }
};