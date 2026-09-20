class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let ans = [];
        k = k % nums.length;
        const start = (nums.length - k) % nums.length;
        for (let i = 0; i < nums.length; i++) {
            const index = (i + start) % nums.length;
            ans.push(nums[index]);
        }
        ans.forEach((val, index) => {
            nums[index] = val;
            // console.log(val,index)
        });
        console.log(ans);
    }
}
