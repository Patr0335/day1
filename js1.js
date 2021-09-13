//Observe: no return type, no type on parameters
function add(n1, n2){
    return n1 +n2;
}


const sub = function(n1,n2){
    return n1 - n2
}


const cb = function(n1,n2, callback){
    // try {
    //     doFailSometimes();
    // } catch (error) {
    //     throw new Error("Failed somehow", {cause: error});
    // }
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};


console.log( add(1,2) )// What will this print? = 3 fordi vores return +'er vores numbers

console.log( add )// What will it print and what does add represent? = [Function: add] vores object metode/function

console.log( add(1,2,3) ) ;// What will it print = 3
//The expression whose value is to be returned. If omitted, undefined is returned instead.

console.log( add(1) );// What will it print = NaN som betyder Not a Number

console.log( cb(3,3,add) );// What will it print = Result from the two numbers: 3+3=6
// const = variable, (callback)This technique allows a function to call another function

console.log( cb(4,3,sub) ); // What will it print = Result from the two numbers: 4+3=1
// -||- // A callback is a function passed as an argument to another function.

console.log(cb(3,3,add())); // What will it print (and what was the problem)
//When you pass a function as an argument, remember not to use parenthesis.

console.log(cb(3,"hh",add));// What will it print = Result from the two numbers: 3+hh=3hh
//

