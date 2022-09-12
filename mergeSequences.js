const mergeSequences = (sequences) => {
  const mergedPositions = []; // [ <1 empty item>, 1, 0, 0, 1, 1, 0, 0, 1]

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

const resultA = mergeSequences([[1, 3], [2, 6], [8, 10], [15, 18]]); // [[1, 6], [8, 10], [15, 18]]
const resultB = mergeSequences([[1, 4], [4, 5]]); // [[1, 5]]
const resultD = mergeSequences([[1, 2], [3, 9], [8, 10], [15, 18]]); // [[1, 2], [3, 10], [15, 18]]
const resultE = mergeSequences([[1, 2], [3, 9], [8, 10]]); // [[1, 2], [3, 10]]
const resultF = mergeSequences([[1, 2], [3, 9], [8, 10], [15, 18], [16, 100]]); // [[1, 2], [3, 10], [15, 100]]
console.log({ resultA, resultB, resultD, resultE, resultF });