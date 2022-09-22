// const someObj = {
//   'a.b.1': 1,
//   'a.b.2': 2,
//   'b.c': 'c',
// }

const expandObject = (obj) => {
  const result = {};

  for (const objectPath in obj) {
    const parts = objectPath.split('.');

    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();
      console.log('resultBefore', {  result, target})
      target = target[part] = target[part] || {};
      console.log('target', {part, target, result})
    }

    target[parts[0]] = obj[objectPath];
    console.log('last target', {lastPart: parts[0], target, result})
  }

  return result;
}

export default expandObject;