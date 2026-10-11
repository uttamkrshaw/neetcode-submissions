class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        function findNumber(array, left, right, target) {
            if (left <= right) {
                let mid = left + Math.floor((right - left) / 2);
                if (array[mid] == target) {
                    return mid;
                }
                if (array[mid] < target) {
                  return  findNumber(array, mid + 1, right, target);
                }
                if (array[mid] > target) {
                  return  findNumber(array, left, mid - 1, target);
                }
            }
            return -1;
        }
        return findNumber(nums, left, right, target);
    }
}
