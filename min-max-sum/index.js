let arr = [5, 333, 44, 2, 11, 55, 6]

function compareNumbers(a, b) {
    return a - b;
}

function miniMaxSum(arr) {
    // Write your code here
    arr.sort(compareNumbers);
    let median = arr[(arr.length / 2) - 0.5]
    console.log(arr)
    console.log(median)

};

miniMaxSum(arr)