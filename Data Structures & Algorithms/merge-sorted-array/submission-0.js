class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let left = m;
        let right = 0;
        while (left < nums1.length) {
            nums1[left]=nums2[right];
            left++;
            right++;
        }
        nums1.sort((a,b)=>a-b);
        console.log(nums1);
    }
}
