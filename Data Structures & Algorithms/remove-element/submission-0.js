class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let ans = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) ans.push(nums[i]);
        }



        for (let i = 0; i < ans.length; i++) {
                nums[i] = ans[i];
        }
        return ans.length;
    }
}
