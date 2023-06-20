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
  
    let maxDistance = maxIndex - minIndex + 1;
    return maxDistance;
  }
  
  let blocks = [2, 6, 8, 5];
  console.log(solution(blocks)); 
  