class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let array = new Array(nums.length * 2).fill(1);
        for (let i = 0; i < nums.length*2; i++) {
            const index = i % nums.length;
            array[i] = nums[index];
        }
        return array;
    }
}
