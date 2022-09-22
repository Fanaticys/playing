function* repeatedReversedArray (array) {
  let index = 0;
  let result = [...array];

  while (true) {
    if (index !==0 && (index % array.length) === 0) result = result.reverse();
    yield result[index++ % result.length];
  }
}

export default repeatedReversedArray;