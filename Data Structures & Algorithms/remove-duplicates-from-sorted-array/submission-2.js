class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let uniquePoint = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                nums[uniquePoint] = nums[i];
                uniquePoint++;
            }
        }
        return uniquePoint;
    }
}
