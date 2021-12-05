/**
 * https://www.freecodecamp.org/news/javascript-tolowercase-how-to-convert-a-string-to-lowercase-and-uppercase-in-js/
 */
export class CaseChange {
  convertLower(str: string): string {
    const a = str.toLowerCase();
    return a;
  }
  convertUpper(str: string): string {
    const a = str.toUpperCase();
    return a;
  }
  convertFirst(str: string): string {
    const capFirstLetter = str[0].toUpperCase();
    const restOfString = str.slice(1);
    const newGreeting = capFirstLetter + restOfString;
    return newGreeting;
  }
}
