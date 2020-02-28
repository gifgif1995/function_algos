// So far we've run each of our functions for a single set of inputs and it works! 
// However, the power of functions comes from being able to run our code for a hug variety of inputs
// It's a good idea to run our code with a variety of test cases to ensure it continues working as expected

// NOTE: If your original code doesn't work for some of these cases, that's okay!
// just see what you need to do to you logic to get the listed output


// sigma Test Cases:
// sigma(10)                                //Expected output: 55
// sigma(1)                                 //Expected output: 1
// sigma(0)                                 //Expected output: 0
// sigma(-10)                               //Expected output: 0
console.log("SIGMA");

function sigma(num){
    var sum=0;
    for(var i=1; i<=num; i++){
        sum+=i;
    }
    console.log(sum)
}
sigma(10);
sigma(1);
sigma(0);
sigma(-10);

console.log("GREATER_THAN")


// greaterThanY Test Cases:
// greaterThanY([5,6,7,8,9,10], 4)          //Expected output: 6
// greaterThanY([5,6,7,8,9,10], 12)         //Expected output: 0
// greaterThanY([1,6,8,3,5,2], -5)          //Expected output: 0
// greaterThanY([-2,-6,-8,-3,-5,-2], -4)    //Expected output: 3
// greaterThanY([], 5)                      //Expected output: 0

function greaterThanY(arr, y){
    var counter=0;
    for (var i=0; i<arr.length; i++){
        if(arr[i]>y){
            counter ++;
        }
    }
        console.log(counter);
}
greaterThanY([5,6,7,8,9,10], 4);
greaterThanY([5,6,7,8,9,10], 12);
greaterThanY([1,6,8,3,5,2], -5);
greaterThanY([-2,-6,-8,-3,-5,-2], -4) ;
greaterThanY([], 5);



console.log("SHIFT_LEFT")
// shiftLeft Test Cases:
// shiftLeft([1,-7,2,-5,8,7,-11,10])        //Expected output: [-7,2,-5,8,7,-11,10,0]
// shiftLeft(["hello","hi","yo","wazzup"])  //Expected output: [hi","yo","wazzup",0]
// shiftLeft([1,2])                         //Expected output: [2,0]
// shiftLeft([1])                           //Expected output: [0]
// shiftLeft([])                            //Expected output: []

function shiftLeft(arr){
    var tempArr=[]
    var i;
    for (i=1; i<arr.length; i++){
        tempArr[i-1]=arr[i];
    }
    tempArr[i-1]=0;
    console.log(tempArr);
}
shiftLeft([]);
shiftLeft([1]);
shiftLeft([1,2]);
shiftLeft(["hello","hi","yo","wazzup"]);
shiftLeft([1,-7,2,-5,8,7,-11,10]);



