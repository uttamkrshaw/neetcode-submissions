class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const ans = [];
        const Strings = new Map();
        for (let i = 0; i < strs.length; i++) {
            const key = [...strs[i]].sort().join("")
            if (Strings.has(key)) {
                const val = Strings.get(key);
                Strings.set(key, [...val, strs[i]]);
            } else {
                Strings.set(key, [strs[i]]);
            }
        }
        Strings.forEach((value, key) => {
            ans.push(value)
        });
        return ans;
    }
}
