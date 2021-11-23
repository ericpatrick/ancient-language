import { translateToAncientUseCase } from ".";

describe("TranslateToAncientUseCase Test", () => {
  it("should translate a word with consonant", () => {
    const word = "Stop";
    const result = translateToAncientUseCase.execute(word);

    expect(result).toEqual("Opstay");
  });

  it("should translate a word without consonant", () => {
    const word = "aeiy";
    const result = translateToAncientUseCase.execute(word);

    expect(result).toEqual("Iaeiy");
  });

  it("should not translate a word without letters", () => {
    const word = "523%";
    const result = translateToAncientUseCase.execute(word);

    expect(result).toEqual(word);
  });

  it("should translate a text with ponctuation", () => {
    const word = "No persons under 14 admitted";
    const result = translateToAncientUseCase.execute(word);

    expect(result).toEqual("Onay ersonspay underay 14 admitteday");
  });

  it("should not translate a text without ponctuation", () => {
    const word = "Hey buddy, get away from my car!";
    const result = translateToAncientUseCase.execute(word);

    expect(result).toEqual("Eyhay uddybay, etgay awayay omfray ymay arcay!");
  });
});
