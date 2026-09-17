class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        let array = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    array.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    // skip left dupicates
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    // skip right duplicates
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        // console.log("Array", array);
        return array;
    }
}
