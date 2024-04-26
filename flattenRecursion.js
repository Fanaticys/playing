const flattenRecursion = (array) => {
  return array.reduce((acc, element) => {
    if (Array.isArray(element)) {
      return acc.concat(flattenRecursion(element));
    }

    acc.push(element);
    return acc;
  }, [])
}

export default flattenRecursion;