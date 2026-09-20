class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] > nums[j]) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                }
            }
        }
        return nums;
    }
}
