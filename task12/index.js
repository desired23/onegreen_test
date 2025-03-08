//Task1
console.log("Task1")
const case1 = [1, 2, 3, 5]
const case2 = [10, 11, 12, "hihi"]

const findMissingNumber = (arr) => {
    if(!Array.isArray(arr) || !arr.every(item => Number.isInteger(item))){
        return "Input phai la mang so nguyen"
    }
    for (i = 0; i < arr.length -1; i++){
        if (arr[i] - arr[i+1] < -1)  return arr[i]+1
    }
    return "err"
}
console.log(findMissingNumber(case2))
console.log(findMissingNumber(case1))
//Task2
console.log("Task2")

const case3 = "DELLO@123"

const isValidPassword = (password) => {
    
    if (password.length <  8) return false
     if (!password.match(/\d/)) return false
     if (!password.match(/[A-Z]/)) return false
     if (!password.match(/[^a-zA-Z\d]/)) return false
    return true;
}

console.log(isValidPassword(case3))

