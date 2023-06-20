function solution(blocks) {
    let N = blocks.length;
    let maxIndex = 0;
    let minIndex = 0;
  
    for (let i = 1; i < N; i++) {
      if (blocks[i] > blocks[maxIndex]) {
        maxIndex = i;
      } else if (blocks[i] < blocks[minIndex]) {
        minIndex = i;
      }
    }
  
    if (minIndex === maxIndex) {
      let leftDistance = maxIndex;
      let rightDistance = N - 1 - maxIndex;
      return Math.max(leftDistance, rightDistance);
    }
  
    let maxDistance = Math.max(maxIndex - minIndex, minIndex, N - 1 - maxIndex);
    return maxDistance;
  }
  
  let blocks = [1, 5, 5, 2, 6];
  console.log(solution(blocks)); 
  