/* 
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
You may assume that each input would have exactly one solution.
Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/



function twoSum(num, target) {
	var sum= [];
	for(var i = 0; i <sum.length; i++){
		for(var j = 0; j<sum.length; j++) {
			if( num + num === target) {
				sum.push(num[i]);
				sum.push(num[j]);
			}
		}
	}
	return sum;
}