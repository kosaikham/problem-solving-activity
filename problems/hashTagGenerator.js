/**
 * The marketing team is spending way too much time typing in hashtags.
 * Let's help them with out own Hashtag Generator!
 *
 * Here's the deal:
 *
 * It must start with a hashtag (#).
 * All words must have their first letter capitalized.
 * If the final result is longer than 140 chars it must return false.
 * If the input or the result is an empty string it must return false.
 * Examples
 * " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
 * "    Hello     World   "                  =>  "#HelloWorld"
 * ""                                        =>  false
 */

function generateHashtag(str) {
  if (!str.trim()) {
    return false;
  }
  let transformedStr =
    "#" +
    str
      .split(" ")
      .filter(word => word !== "")
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join("")[0]
      .toUpperCase() +
    str
      .split(" ")
      .filter(word => word !== "")
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join("")
      .slice(1);
  if (transformedStr.length > 140) {
    return false;
  }
  return transformedStr;
}

generateHashtag("             ");
