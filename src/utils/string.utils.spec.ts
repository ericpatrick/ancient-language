import { StringUtils } from "./string.utils";

describe("String Utils Test", () => {
  it("should check if a string is captalized", () => {
    let captalized = "Text";
    let notCaptalized = "text";

    expect(StringUtils.isCapitalized(captalized)).toBe(true);
    expect(StringUtils.isCapitalized(notCaptalized)).toBe(false);
  });

  it("should transform a string to captalized string", () => {
    const text = "some text";

    expect(StringUtils.captalize(text)).toBe("Some text");
  });

  it("should check if a string have some consonant", () => {
    const withConsonant = "Maybe";
    const withoutConsonant = "ya";

    expect(StringUtils.hasSomeConsonant(withConsonant)).toBe(true);
    expect(StringUtils.hasSomeConsonant(withoutConsonant)).toBe(false);
  });

  it("should check if a character is a vowel", () => {
    const vowel = "o";
    const consonant = "r";
    const word = "sure";

    expect(StringUtils.isVowel(vowel)).toBe(true);
    expect(StringUtils.isVowel(consonant)).toBe(false);
    expect(StringUtils.isVowel(word)).toBe(false);
  });
});
