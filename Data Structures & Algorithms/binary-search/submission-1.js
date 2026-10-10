class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let first = 0;
        let last = nums.length - 1;
        while (first <= last) {
            let mid = first + Math.floor((last - first) / 2);
            if (nums[mid] === target) return mid;
            if (nums[mid] > target) last = mid - 1;
            if (nums[mid] < target) first = mid + 1;
        }
        return -1;
    }
}
