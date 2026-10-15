class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let left = 0;
        let right = x;
        let ans = 0;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            let square = mid * mid;
            if (square === x) {
                return mid;
            }else if (square < x) {
                ans = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return ans;
    }
}
