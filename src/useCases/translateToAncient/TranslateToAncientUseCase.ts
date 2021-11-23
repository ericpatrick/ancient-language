import { StringUtils } from "../../utils/string.utils";

export class TranslateToAncientUseCase {
  private canTranslate(value: string): boolean {
    const hasLetters = new RegExp(/[A-Za-z]/).test(value);

    return hasLetters;
  }

  private extractPonctuation(value: string): [string, string] {
    const regex = new RegExp(/[\w]$/);
    const hasMatch = regex.test(value);
    let pontuaction = "";

    if (!hasMatch) {
      let valueClone = value;
      pontuaction = valueClone[valueClone.length - 1];
      valueClone = valueClone.substring(0, valueClone.length - 1);

      return [pontuaction, valueClone];
    } else {
      return ["", value];
    }
  }

  private translateWordToAncient(
    value: string,
    isCapitalized: boolean
  ): string {
    let ancientWord = "";

    if (StringUtils.hasSomeConsonant(value)) {
      let prefixIndex = value.length;
      for (let i = 0; i < value.length; i++) {
        if (StringUtils.isVowel(value[i])) {
          prefixIndex = i;
          break;
        }
      }
      const prefix = value.substring(0, prefixIndex);
      const sten = value.substring(prefixIndex);
      ancientWord = `${sten}${prefix}ay`;
      if (isCapitalized) ancientWord = StringUtils.captalize(ancientWord);
    } else {
      ancientWord = `I${value}`;
    }

    return ancientWord;
  }

  public execute(englishText: string): string {
    const englishWords = englishText.split(" ");
    const resultArr = [];

    for (let engWord of englishWords) {
      if (this.canTranslate(engWord)) {
        const isCapitalized = StringUtils.isCapitalized(engWord);
        engWord = engWord.toLowerCase();

        let pontuaction = "";
        [pontuaction, engWord] = this.extractPonctuation(engWord);

        let ancientWord = this.translateWordToAncient(engWord, isCapitalized);

        if (pontuaction) ancientWord += pontuaction;

        resultArr.push(ancientWord);
      } else resultArr.push(engWord);
    }

    return resultArr.join(" ");
  }
}
