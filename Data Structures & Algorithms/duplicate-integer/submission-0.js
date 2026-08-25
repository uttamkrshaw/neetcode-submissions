class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let array = [];
        for (let i = 0; i < nums.length; i++) {
            if (!array.includes(nums[i])) {
                array.push(nums[i]);
            } else {
            return true;
            }
        }
        return false;
    }
}
