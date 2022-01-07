function drawChristmasTreeWithStars(height) {
    for (let index = 0; index < height; index++) {
      let spaces = ' '.repeat(height - index - 1);
      let stars = '*'.repeat(2 * index + 1);
  
      console.log(spaces + stars);
    }
  }
    
  drawChristmasTreeWithStars(8);
  
  
  function countMaxLetterInString(expression) {
    let mapOccurance = new Map();
    let max = 0;
    let letter = '';
    for(let index = 0; index < expression.length; index++) {
      if(mapOccurance.has(expression[index])) {
          mapOccurance.set(expression[index], mapOccurance.get(expression[index]) + 1);
      }else {
          mapOccurance.set(expression[index], 1);
      }
    }
    for(const [key, value] of mapOccurance) {
      if(max < value) {
        max = value;
        letter = key;
      }
    }
    console.log(letter + "->" + max);
  }
  
  let expression = 'szxzshpswsp' ;
  countMaxLetterInString(expression);
