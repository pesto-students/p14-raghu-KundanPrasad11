function* stringToSybmol(arr) {
  for(str of arr) {
    yield Symbol(str);
  }
}

const arr =  ['hello', 'world', 'test'];
const symbols = stringToSybmol(arr);

for(const symbol of symbols) {
  console.log(symbol)
}