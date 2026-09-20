class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let ans = [];
        let array = [];
        for (let i = 0; i < nums.length; i++) {
            if (!array.includes(nums[i])) {
                ans.push(nums[i]);
                array.push(nums[i]);
            }
        }
        console.log(ans);
        for(let i = 0;i<ans.length;i++){
            nums[i]=ans[i]
        }
        return ans.length;
    }
}
