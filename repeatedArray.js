function* repeatedArray (array) {
  let index = 0;

  while (true) {
    yield array[index++ % array.length];
  }
}

export default repeatedArray