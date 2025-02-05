const person = {
    name : "Amit Prasad",

    greet(){
        console.log(`Hi, I am ${this.name}`);
    },
};

person.greet();

const greetFunction = person.greet
greetFunction();


const boundGreet = person.greet.bind({name: "Raju"});
console.log(boundGreet);
boundGreet()

// bind, call and apply function -> you need  to search 