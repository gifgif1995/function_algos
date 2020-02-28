// Given an array, shift all values one position to the left.  Change the final position to 0. Return the changed array
// Predicted Output: shiftLeft([1,2,3,4,5]) should return [2,3,4,5,0];

function shiftLeft(arr){
    var tempArr=[]
    var i;
    for (i=1; i<arr.length; i++){
        tempArr[i-1]=arr[i];
    }
    tempArr[i-1]=0;
    return tempArr;
}
var resultArr = shiftLeft([1,2,3,4,5]);
console.log(resultArr);

//[ 2, 3, 4, 5, 0 ]//