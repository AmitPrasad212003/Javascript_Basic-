const username = {
    firstname : "hitesh", 
    isLoggedin: true,
    "middle name": "haram"
};




// console.log(username.firstname);
// username.firstname = "Mr.H";
// username.lastname = "Prasad";
// console.log(username.firstname);
// console.log(username.lastname);
// //another way to access the object variable
// console.log(username["middle name"]);



// console.log(typeof username);

let today = new Date();
// console.log(today);
// console.log(today.getDate());

// Array 

let anotherUser = ["hitesh",true]

// console.log(anotherUser[0]);

//implict  conversion or expection
console.log("1" + 1); // one consider as string that why compiler thought another is also string
console.log(1 + "1");

let isValue = true; // js consider true = 1 / false = 0
console.log(isValue +3);

// let num = true 
// console.log(Number(num));

let num1 = false 
console.log(Number(num1));

let num3 = "2" 
console.log(Number(num3));

let num4 = "2asd`"
console.log(Number(num4));
console.log(typeof Number(num4));


console.log(Number(null));
console.log(Number(undefined));
console.log(Number("e"));







