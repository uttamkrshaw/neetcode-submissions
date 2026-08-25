class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const values = new Set(nums);
        return values.size !== nums.length;
    }
}
