
/**
 * @param {[]} books
 */
const getTheTitles = function(books) {
    const arr = [];
    for (const book of books) {
        arr.push(book.title);
    }
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
