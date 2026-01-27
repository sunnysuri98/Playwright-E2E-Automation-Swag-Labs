
export function sortNumbersArrayInAscendingOrder(NumberArr) {
    return NumberArr.sort((a, b) => a - b);
}

export function sortNumbersArrayInDescendingOrder(NumberArr) {
    return NumberArr.sort((a, b) => b - a);
}

export function parsePrice(price){

    return parseFloat(price.replace(/[^0-9.]/g, "").trim());
}


