class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let ans = [];
        const num = new Map();
        for (let i = 0; i < nums.length; i++) {
            const isPresent = num.has(nums[i]);
            if (isPresent) {
                num.set(nums[i], num.get(nums[i]) + 1);
            } else {
                num.set(nums[i], 1);
            }
        }
        const sortedMap = new Map([...num.entries()].sort((a, b) => b[1] - a[1]));
        let length = 0;
        while (length < k) {
            for (const [key, value] of sortedMap) {
                if (length < k) {
                    ans.push(key);
                    length++;
                }
            }
        }
        return ans;
    }
}
