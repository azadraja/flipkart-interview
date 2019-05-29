const sumofarray = function(arr) {
    let sum = arr.reduce((acc, curr) => {
       if(typeof curr === 'string'){
         return acc + parseInt(curr);
       } else {
         return acc + curr;
       }
    },0);
    return sum;
  };

module.exports = { sumofarray };
