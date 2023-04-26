/**
 * Capitalizes input string.
 *
 * Converts the first Unicode code point of `input` string to upper case.
 *
 * @param input - Input string to capitalize.
 *
 * @returns Capitalized input string.
 */
export function capitalize(input: string): string {
  if (!input) {
    return input;
  }

  const letter = String.fromCodePoint(input.codePointAt(0)!);
  const ucLetter = letter.toUpperCase();

  return letter === ucLetter ? input : ucLetter + input.slice(letter.length);
}

/**
 * De-capitalizes input string.
 *
 * Converts the first Unicode code point of `input` string to lower case.
 *
 * @param input - Input string to capitalize.
 *
 * @returns Capitalized input string.
 */
export function decapitalize(input: string): string {
  if (!input) {
    return input;
  }

  const letter = String.fromCodePoint(input.codePointAt(0)!);
  const lcLetter = letter.toLowerCase();

  return letter === lcLetter ? input : lcLetter + input.slice(letter.length);
}
