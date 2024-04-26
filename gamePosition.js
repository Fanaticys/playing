const compose = (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)), (arg) => arg);

const getNext = (move) => (position) => {
  const [column, row] = position;
  if (move === 'D') return [column + 1, row];
  if (move === 'L') return [column, row - 1];
  if (move === 'R') return [column, row + 1];
  if (move === 'U') return [column - 1, row];
}

const validateNextPosition = (width, height, current) => (position) => {
  if (position[1] > width) return current;
  if (position[0] > height) return current;

  return position;
}

const checkForPortal = (portalA, portalB) => (position) => {
  if (portalA[0] === position[0] && portalA[1] === position[1]) {
    return portalB;
  }

  return position;
}
  
function getPosition(width, height, position, portalA, portalB, moves) {
  return moves.split('').reduce((current, move) => {
    return compose(
      validateNextPosition(width, height, current),
      checkForPortal(portalA, portalB),
      getNext(move),
    )(current)
  }, position);
}

console.log(getPosition(10, 10, [0, 0], [1, 1], [2, 2], 'RR')) // [0, 2]
console.log(getPosition(10, 10, [0, 0], [1, 1], [2, 2], 'DD')) // [2, 0]
console.log(getPosition(10, 10, [0, 0], [1, 1], [2, 2], 'DR')) // [2, 2]
console.log(getPosition(10, 10, [0, 0], [9, 9], [9, 9], 'DRDRDR')) // [3, 3]
console.log(getPosition(10, 10, [3, 2], [2, 2], [8, 8], 'U')) // [8, 8]