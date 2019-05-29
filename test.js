const assert = require('assert');
const sumofarray = require('./question1.js');
const removeHashFromUrl = require('./question2.js');
const comp = require('./question3.js');
const findMaxSubArray = require('./question4.js');

const assertionobj = { maxsumarray: [ 4, -1, 2, 1 ], final_max_sum_subArray: 6 };

it('should return true', () => {
  assert.equal(true, true)
})

it('correctly calculates the sum of all numbers in array', () => {
  assert.equal(sumofarray.sumofarray(['5','0',9,3,2,1,'9',6,7]), 42)
})

it('correctly returns string after removing #', () => {
  assert.equal(removeHashFromUrl.removeHashFromUrl('abcd#abc#abc'), 'abcd')
})

it('correctly returns true when arrays are equal', () => {
  assert.equal(comp.comp([1,2,3],[1,4,9]), true)
})

it('correctly returns false when arrays are not equal', () => {
  assert.equal(comp.comp([1,2,3],[1,5,9]), false)
})

it('correctly finds max sum', () => {
  assert.deepEqual(findMaxSubArray.findMaxSubArray([-2,1,-3,4,-1,2,1,-5,4]), assertionobj)
})

