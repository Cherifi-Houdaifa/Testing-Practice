import { Calculator } from "./index";

test("Calculator Object Test", () => {
    const calc = new Calculator();

    expect(calc.add(20, 30)).toBe(50);
    
    expect(calc.subtract(10, 15)).toBe(-5);
    
    expect(calc.multiply(10, 23)).toBe(230);

    expect(calc.divide(1, 3)).toBeCloseTo(0.33);
})