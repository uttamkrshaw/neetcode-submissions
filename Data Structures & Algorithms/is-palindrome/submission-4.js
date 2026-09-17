class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const array1 = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
        ];

        let array = [];
        for (let i = 0; i < s.length; i++) {
            if (array1.includes(s[i].toLowerCase())) {
                array.push(s[i].toLowerCase());
            }
        }
        let left = 0;
        let right = array.length - 1;
        while (left < right) {
            if (array[left] == array[right]) {
                left++;
                right--;
            } else {
                return false;
            }
        }
        console.log(array);
        return true;
    }
}
