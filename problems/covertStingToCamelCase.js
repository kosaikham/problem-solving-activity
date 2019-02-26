/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
 *
 * Examples
 * toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
 *
 * toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
 */

function toCamelCase(str) {
  let myString = "";
  if (str.includes("-")) {
    myString = str.split("-");
  } else {
    myString = str.split("_");
  }
  return myString
    .map((word, i) => {
      if (i !== 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join("");
}

toCamelCase("The_stealth_warrior");
