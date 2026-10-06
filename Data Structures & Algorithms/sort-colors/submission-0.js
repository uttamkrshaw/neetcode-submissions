class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = i; j < nums.length; j++) {
                if (nums[i] > nums[j]) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                }
            }
        }
    }
}
