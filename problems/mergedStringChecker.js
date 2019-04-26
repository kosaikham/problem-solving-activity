function isMerge(s, part1, part2) {
  const part1_index = part1.split("").map((el, index) => {
    return s.includes(el) && s.indexOf(el);
  });
  const part2_index = part2.split("").map((el, index) => {
    return s.includes(el) && s.indexOf(el);
  });
  if (part1_index.concat(part2_index).length < s.length) {
    return false;
  }
  part1_index.forEach((el, index) => {
    if (el > part2_index[index]) {
      return false;
    }
  });

  return true;
}

console.log(isMerge("codewars", "cod", "wars"));
