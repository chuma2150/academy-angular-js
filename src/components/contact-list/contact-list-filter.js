export default function () {
    return function (textToCapatalize) {
        return textToCapatalize.charAt(0) ? textToCapatalize.charAt(0).toUpperCase()
            + (textToCapatalize.charAt(1) ? textToCapatalize.substr(1).toLowerCase() : '') : '';
    }
}