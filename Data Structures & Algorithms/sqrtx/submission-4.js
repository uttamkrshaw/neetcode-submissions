class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if (x == 0) return 0;
        if (x == 1) return 1;
        if (x > 1 && x < 4) return 1;
        // console.log("Pass1")
        let mid = Math.floor(x * 0.5);
        // console.log("Pass2",mid)
        for (let i = 2; i <= mid; i++) {
            // console.log("Reached here")
            let square = i * i;
            if (square == x) {
                return i;
            }
            let incSquare = (i + 1) * (i + 1);
            if (square < x && incSquare > x) {
                return i;
            }
        }
    }
}
