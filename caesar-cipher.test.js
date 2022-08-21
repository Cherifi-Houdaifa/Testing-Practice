import { caesarCipher } from "./index";

test("Caesar Cipher Function Test", () => {
    expect(caesarCipher("Hello!", 6)).toMatch("Nkrru!");

    expect(caesarCipher("<Ewztl!>", -8)).toMatch("<World!>");
})