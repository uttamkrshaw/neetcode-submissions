class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let left = 0;
        let right = 0;
        let ans = "";
        while (left < word1.length && right < word2.length) {
            ans += word1[left];
            ans += word2[right];
            left++;
            right++;
        }
        console.log(left, right);
        while (left < word1.length) {
            ans += word1[left];
            left++;
        }
        console.log(left, right);

        while (right < word2.length) {
            ans += word2[right];
            right++;
        }
        console.log(left, right);

        return ans;
    }
}
