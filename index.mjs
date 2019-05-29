import { sumofarray } from './question1.mjs';
import { removeHashFromUrl } from './question2.mjs';
import { comp } from './question3.mjs';
import { findMaxSubArray } from './question4.mjs';

let a=[2,3,4,5];
let b= [4,9,16,25];
let array = [-2,1,-3,4,-1,2,1,-5,4];
console.log('////////////////////////');
console.log('Question1 \n input given  is ',[9,3,'7','3', '0'],'\n Output is ',sumofarray([9,3,'7','3', '0']));
console.log('////////////////////////');
console.log('\n\n');
console.log('////////////////////////');
console.log('Question2 \n input given  is www.flipkart.com#about \n Output is ',removeHashFromUrl('www.flipkart.com#about'));
console.log('////////////////////////');
console.log('\n\n');
console.log('////////////////////////');
console.log('Question3 \n input given  is',[2,3,4,5],[4,9,16,25] ,'\n Output is ',comp(a,b));
console.log('////////////////////////');
console.log('\n\n');
console.log('////////////////////////');
console.log('Question4 \n input given  is',[-2,1,-3,4,-1,2,1,-5,4] ,'\n Output is ',findMaxSubArray(array));
console.log('////////////////////////');
console.log('\n\n');
console.log('////////////////////////');
console.log('Question5 \n Open question5.html to see output');
console.log('////////////////////////');

