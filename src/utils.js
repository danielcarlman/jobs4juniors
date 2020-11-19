export function repeatArray(array, amount) {
  if (amount < 0) {
    return array;
  }
  let newArray = [];
  for (let i = 0; i < amount; i++) {
    newArray = newArray.concat(array);
  }
  return newArray;
}
