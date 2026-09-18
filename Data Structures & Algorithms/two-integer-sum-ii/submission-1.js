class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let ans = [];
        let left = 0;
        let right = numbers.length - 1;
        while (left < right && ans.length === 0) {
            const sum = numbers[left] + numbers[right];
            if (sum === target) {
                ans.push(++left);
                ans.push(++right);
            } else if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
        return ans;
    }
}
