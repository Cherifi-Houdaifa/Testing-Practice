import { reverseString } from "./index";

test("Reverse String Function Test", () => {
    expect(reverseString("hello")).toMatch("olleh");
});
