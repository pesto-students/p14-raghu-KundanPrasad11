const divideArray = (arr) => {
  let evenNums = [];
  let oddNums = [];
  arr.forEach(e => {
    if(e%2 == 0) {
      evenNums.push(e);
    } else {
      oddNums.push(e);
    }
  });
  evenNums.sort((a, b) => a - b);
  oddNums.sort((a, b) => a - b);
  console.log("evenNums", evenNums.length==0 ? "None" : evenNums);
  console.log("oddNums", oddNums.length==0 ? "None" : oddNums);
}

