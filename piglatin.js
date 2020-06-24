function toPigLatin(phrase) {
  if (phrase.length == 0) {
    return "";
  }

  let array = phrase.split(" ");

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].slice(1, array[i].length) + array[i].slice(0, 1) + "ay";
  }

  return array.join(" ");
}
console.log(toPigLatin(""));
// "hetay uickqay rownbay oxfay"
