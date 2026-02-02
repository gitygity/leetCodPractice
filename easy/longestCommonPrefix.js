/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefixFinal = ''
    let prefixTemp = ''

    const chars = strs[0]

    for (j = 0; j < chars.length; j++) {

        prefixTemp = prefixTemp + chars[j]
        for (i = 1; i < strs.length; i++) {
            if (strs[i].slice(0, j + 1) != prefixTemp) {
                break
            } else if (i + 1 === strs.length) {
                prefixFinal = prefixTemp
            } else {
                continue

            }

        }
    }

    return !prefixFinal ? '' : prefixFinal
};

/* o(n.m.m) */


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return ""

    const first = strs[0]

    for (let j = 0; j < first.length; j++) {
        const ch = first[j]

        for (let i = 1; i < strs.length; i++) {
            if (j >= strs[i].length || strs[i][j] !== ch) {
                return first.slice(0, j)
            }
        }
    }

    return first
}

/* o(n.m) */