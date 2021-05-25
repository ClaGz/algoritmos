/**
 * Recebe uma lista ordenada
 */
 const binarySearch = (list = [], item) => {
    count += 1;
    if(Array.isArray(list) && !list.length) return undefined;

    const middleItem = parseInt((list.length / 2));
    const guess = list[middleItem];

    if(guess === item) return middleItem;

    if(list.length <= 1) return undefined;

    if(guess < item) {
        return binarySearch(list.slice(middleItem), item);
    }
    
    if(guess > item) {
        return binarySearch(list.slice(0, middleItem), item);
    }
}


module.exports = binarySearch