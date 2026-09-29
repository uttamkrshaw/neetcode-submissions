class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        strs.sort((a, b) => a.length - b.length);
        let ans = [];
        for (let i = 0; i < strs.length; i++) {
            if (i == 0) {
                ans = strs[i].split("");
            } else {
                let validLength = ans.length;
                if (validLength == 0) return "";
                for (let j = 0; j < validLength; j++) {
                    if (ans[j] !== strs[i][j]) {
                        let k = j;
                        let newLength = ans.length;
                        while (newLength > k) {
                            ans.pop();
                            newLength--;
                        }
                    }
                }
            }
        }
        // console.log(ans.join("").toString());
        return ans.join("");
    }
}
