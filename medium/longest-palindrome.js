function expandAroundCenter(s, left, right) {
    let L = left, R = right;
    while (L >= 0 && R < s.length && s.charAt(L) == s.charAt(R)) {
        L--;
        R++;
    }
    return R - L - 1;
}
function longestPalindrome(s) {
    if (s == "") return "";
    let start = 0, end = 0;
    for (i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return s.substring(start, end + 1);
};
const isPalin = "babad";

console.log(longestPalindrome(isPalin));