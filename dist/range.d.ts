interface IRange<T> extends Iterable<T> {
    readonly from: number;
    readonly to: number;
    readonly step: number;
    readonly iterate: (callbackFn: (value: T, index: number) => void) => void;
}
export declare const range: (from: number, to: number, step?: number) => IRange<number>;
export {};
