const stringLength = str => {
    let ans = -1;
    let strlength = str.length;

    if((strlength > 0) && (strlength < 11)) {
        ans = strlength;
    }

    return ans;
}

module.exports = stringLength;