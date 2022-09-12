const mergeSortedInterval = (sequences) => {
  let next = 1;
  let nextValue = sequences[next];
  let currentValue = sequences[0];
  const result = [];
  
  while (next < sequences.length) {
    const [currentStart, currentEnd] = currentValue;
    const [nextStart, nextEnd] = nextValue;

    if (currentEnd >= nextStart) {
      currentValue = [currentStart, nextEnd];
    } else {
      result.push(currentValue);
      currentValue = nextValue;
    }
    next++;
    nextValue = sequences[next];
  }

  result.push(currentValue);
  return result;
};

const mergeInterval = (sequences) => {
  const mergedPositions = [];

  sequences.forEach((sequence) => {
    const [start, end] = sequence;
    for (i = start; i <= end; i++) {
      if ((i === start || i === end) && mergedPositions[i] !== 0) { 
        if (mergedPositions[i] && i === start) {
          mergedPositions[i] = 0;
        } else {
          mergedPositions[i] = 1;
        }
        
      } else {
        console.log({ current: mergedPositions[i], i})
        mergedPositions[i] = 0;
      }
    }
  });

  const mergedSequences = [];
  let sequence = [];

  mergedPositions.forEach((position, i) => {
    if (position === 1) {
      const sequenceIndex = sequence[0] ? 1 : 0;
      sequence[sequenceIndex] = i;
      
      if (sequence.length === 2) {
        mergedSequences.push(sequence);
        sequence = [];
      }
    }
    
  });

  if (sequence.length === 2) {
    mergedSequences.push(sequence);
  }

  return mergedSequences;
};

const resultA = mergeInterval([[1, 3], [2, 6], [8, 10], [15, 18]]); // [[1, 6], [8, 10], [15, 18]]
const resultB = mergeInterval([[1, 4], [4, 5]]); // [[1, 5]]
const resultD = mergeInterval([[1, 2], [3, 9], [8, 10], [15, 18]]); // [[1, 2], [3, 10], [15, 18]]
const resultE = mergeInterval([[1, 2], [3, 9], [8, 10]]); // [[1, 2], [3, 10]]
const resultF = mergeInterval([[1, 2], [3, 9], [8, 10], [15, 18], [16, 100]]); // [[1, 2], [3, 10], [15, 100]]
console.log({ resultA, resultB, resultD, resultE, resultF });