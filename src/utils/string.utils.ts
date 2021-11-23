export namespace StringUtils {
  export const isCapitalized = (value: string): boolean => {
    return /[A-Z]/.test(value[0]);
  };

  export const captalize = (value: string): string => {
    return value[0].charAt(0).toUpperCase() + value.slice(1);
  };

  export const hasSomeConsonant = (value: string): boolean => {
    return !/^[aeiouy]+$/.test(value);
  };

  export const isVowel = (value: string): boolean => {
    if (value.length === 1) return /[aeiouy]/.test(value);

    return false;
  };
}
