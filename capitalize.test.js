import { capitalize } from "./index";

test("Capitalize Function Test", () => {
    expect(capitalize("hello")).toMatch("Hello");
});
