/* 
DATA
const o = {
  a1: true,
  a2: {
    b1: {
      c1: true,
      c2: true,
    },
    b2: true,
  }
};

RESULT
[
  'a1',
  'a2.b1.c1',
  'a2.b1.c2',
  'a2.b2',
]
*/

const getObjectPaths = (o, prevKey = '') => {
  return Object.keys(o)
    .map((key) => {
      const value = o[key];
      const nextKey = prevKey ? `${prevKey}.${key}` : key;
      if (typeof value === 'object') return g3(value, nextKey);
      return nextKey;
    })
    .flat(Infinity);
}


export default getObjectPaths;