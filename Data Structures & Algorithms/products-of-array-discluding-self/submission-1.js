class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let total = 1;
        let no_zeroes = 0;
        let ans = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                total *= nums[i];
            } else {
                no_zeroes += 1;
            }
        }
        // console.log(total);
        for (let j = 0; j < nums.length; j++) {
            if (no_zeroes >= 2) {
                ans.push(0);
            } else {
                if (no_zeroes === 1) {
                    if (nums[j] === 0) {
                        ans.push(total);
                    } else {
                        ans.push(0);
                    }
                } else if (no_zeroes == 0) {
                    ans.push(total / nums[j]);
                }
            }
        }
        return ans;
    }
}
