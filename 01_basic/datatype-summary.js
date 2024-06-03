// Primitive Datatype
// also known as call by value datatype.
// 7 types : String,Number,Boolean, null, undefined, Symbol, BigInt.

//Dynamic language typed

const id =  Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 2412134241234234234232342n;

console.log(typeof(bigNumber));

// call by Reference (Also known as non primitive Datatype)

//Array,objects, Functions



const heros = ["Shakkitam","naagraj","doga"];

let obj = {
    name : "Name",
    age:21
};

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

// ========================== //

// memory used in javascript

//  Stack (Primitive datatype are store in stack), Heap(Non-Primitive datatype are store in heap)

let myyoutubename = "AmitPrasad";

let myAnother = myyoutubename;
myAnother = "Aalupokora";

console.log(myyoutubename);
console.log(myAnother);

let userOne = {
    email : "amit00@gamil.com",
    upi : "oksbi@paytam"
};

let userTwo = userOne;
userTwo.email = "baba@gamil.com";

console.log(userOne.email);
console.log(userTwo.email);
