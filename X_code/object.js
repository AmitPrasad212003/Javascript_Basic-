const post = {
    username : "@amitprasad",
    content : "This is my #firstPost",
    like : 150,
    reposts : 5,
    tags : ["@apnacollege", "@delta"]
};

console.log(post);
console.log(post.content);
console.log(post["content"]);

const student = {
    name : "Amitprasad",
    age : 23,
    marks: 94,
    city : "Delhi"
}

console.log(student.city);
console.log(student.city = "Mumbai");
console.log(student);
console.log(student.gender);
console.log(student.gender = "male");
console.log(student);
console.log(delete student.marks);
console.log(student);
console.log(delete student);
console.log(student);



// Math object 
// Generate a Random Number


console.log(  ran = (Math.floor(Math.random() * 10) + 1));
console.log(ran);


console.log(  ran = (Math.floor(Math.random() * 100) + 1));
console.log(ran);

console.log(  ran = (Math.floor(Math.random() * 5) + 1));
console.log(ran);
// 20 - 25
console.log(  ran = (Math.floor(Math.random() * 5) + 20));
console.log(ran);

// Guessing Game

const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number ");

while (true) {
    if(guess == "quit"){
        console.log("User quit");
        break;
    }

    if(guess == random){
        console.log("You are right! congrats!! random number was", random);
        break;        
    }else if (guess < random){
        guess = prompt("Hint : Your guess was too small. Please try again");
    }else{
        guess = prompt("Hint : Your guess was too large. Please try again");
    }
}

