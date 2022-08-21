import { analyzeArray } from "./index";

test("Analyze Array Function Test", () => {
    expect(analyzeArray([2, 4, 5, 10])).toEqual({
        average: 5.25,
        min: 2,
        max: 10,
        length: 4,
    });

    expect(analyzeArray([9, 14, 18, 12, 1, 20, 4, 6])).toEqual({
        average: 10.5,
        min: 1,
        max: 20,
        length: 8,
    });
});
