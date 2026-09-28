class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const myMap = new Map();
        const length = nums.length / 2;
        let ans;
        nums.forEach((el) => {
            const isPresent = myMap.has(el);
            if (isPresent) {
                const value = myMap.get(el);
                myMap.set(el, value + 1);
            } else {
                myMap.set(el, 1);
            }
        });
        myMap.forEach((key, value) => {
            if (key > length) {
                ans = value;
                // return value;
                // console.log("Key", key, "Value", value);
            }
        });
        return ans;
    }
}
