const list = (lastJoin, ...items) => {
  const commaSeparated = items.slice(0, -1).join(", ");
  const lastItem = items.pop();
  return `${commaSeparated} ${lastJoin} ${lastItem}`;
}

const l = list("and", "red", "green", "Yellow", "Brown", "blue");
//red, green, Yellow, Brown and blue

// console.log(l)

const partial = (fn, firstArg) => {

  return (...lastArgs) => {

    return fn(firstArg, ...lastArgs);
  }
}

const listAnd = partial(list, "and");

const m = listAnd("red", "green", "blue", "yellow");

console.log('partial', m)

const listAndString = partial(list, "and")("red", "green", "blue", "yellow");
console.log('HOF', listAndString);






