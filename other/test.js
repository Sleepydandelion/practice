function findSmallestInt(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < result) {
            result = arr[i];
        }
    }
    return result;
}

//reduce методы массивов