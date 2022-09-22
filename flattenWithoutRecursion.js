const flattenWithoutRecursion = (array) => {
  const result = [...array];
  let index = 0;

  while (index < result.length) {
    const element = result[index];
    if (Array.isArray(element)) {
      result[index] = element[0];
      const newElement = element.slice(1);
      if (newElement.length) {
        result.splice(index + 1, 0, newElement);
      }
    } else {
      index = index + 1
    }
  }

  return result;
}

export default flattenWithoutRecursion;