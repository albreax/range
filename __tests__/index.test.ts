import {range} from "../src/range";

test("throw error if from is larger then to", () => {
    expect(() => range(2, 1)).toThrowError("From must be larger then to!");
})

test("throw error if step is less then 1", () => {
    expect(() => range(0, 2, 0)).toThrowError("Step has to be larger then 0!");
})

const cases = [
    [2, 2, 1, []],
    [0, 10, 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
    [0, 10, 2, [0, 2, 4, 6, 8]],
    [3, 11, 2, [3, 5, 7, 9]],
    [3, 21, 3, [3, 6, 9, 12, 15, 18]],
    [-3, 11, 2, [-3, -1, 1, 3, 5, 7, 9]],
];

const callbackFn = jest.fn()

beforeEach(() => jest.resetAllMocks());

test.each(cases)("create range for from %i to %i with step %i correctly", 
    (from: number, to: number, step: number, expected: number[]) => {
        const r = range(from, to, step)
        expect(r.from).toBe(from);
        expect(r.to).toBe(to);
        expect(r.step).toBe(step);
        expect([...r]).toEqual(expected);

        r.iterate(callbackFn);
        expect(callbackFn.mock.calls).toEqual(expected.map((v, i) => [v, i]));
    }
);