module.exports = function reverse (n) {
    return parseInt(reverseString(Math.abs(n).toString()), 10);
}

function reverseString (s){
    let reversed = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reversed = reversed + s[i];
    }
    return reversed; 
}

