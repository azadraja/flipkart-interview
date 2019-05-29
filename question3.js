const comp = function(a,b) {
    if(!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length || a.length !== b.length)
      return;
    
    let sorted_a = a.sort((x,y) => a-b);
    let sorted_b = b.sort((x,y) => a-b);
    console.log(sorted_a, sorted_b);
    
    return sorted_a.every((e,index) => sorted_b[index] === Math.pow(e,2));
  }

module.exports = { comp };