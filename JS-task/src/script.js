function sumSequence(n) {
    if (n === 0)
        return '0.00'
    let res = 0
    for (let i = 1; i <= n; i++) {
        res += 1 / 2 ** i
    }
    return `${res.toPrecision(2)}`
}

function mergeArrays(...arr) {
    let res = []
    arr?.forEach(array => {
        res = [...res, ...array]
    })
    return res
}

function isPalindrome(str) {
    // Create an object to store character frequencies
    const charCount = {};

    // Count character frequencies
    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Initialize a variable to keep track of odd character counts
    let oddCount = 0;

    // Loop through the character frequencies
    for (const count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
        }

        // If more than one character has an odd count, return false
        if (oddCount > 1) {
            return false;
        }
    }

    // If we've made it this far, it's possible to form a palindrome
    return true;
}

function countLetters(str) {
    // Check if the input string is empty or not a string
    if (typeof str !== 'string' || str.length === 0) {
        return {};
    }

    // Create an object to store the letter counts
    const letterCount = {};

    // Remove spaces and convert the string to lowercase to ensure case-insensitive counting
    const sanitizedStr = str.replace(/\s/g, '').toLowerCase();

    // Loop through the characters in the sanitized string
    for (const char of sanitizedStr) {
        if (letterCount[char]) {
            letterCount[char]++;
        } else {
            letterCount[char] = 1;
        }
    }

    return letterCount;
}

function divideArrays(arr, size) {
    // Check if size is less than or equal to 0, return an empty array
    if (size <= 0) {
        return [];
    }

    // If the length of the original array is less than or equal to size, return the original array
    if (arr.length <= size) {
        return [arr];
    }

    // Create an array to store the divided arrays
    const dividedArrays = [];

    // Loop through the original array and create subarrays of size length
    for (let i = 0; i < arr.length; i += size) {
        dividedArrays.push(arr.slice(i, i + size));
    }

    return dividedArrays;
}
function encrypt(str, n) {
    // Check if n is less than or equal to 0, or if the input string is empty
    if (n <= 0 || str.length === 0) {
        return str;
    }

    // Create a function to shift a single character by n positions
    function shiftChar(char, n) {
        const charCode = char.charCodeAt(0);
        if (char >= "A" && char <= "Z") {
            const shiftedCharCode = ((charCode - 65 - n + 26) % 26) + 65;
            return String.fromCharCode(shiftedCharCode);
        }
        return char;
    }

    // Encrypt the input string by shifting each character by n positions
    const encryptedStr = str
        .split("")
        .map((char) => shiftChar(char, n))
        .join("");

    return encryptedStr;
}
