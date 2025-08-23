/* 
this is a special keyword in JavaScript.

It refers to the object that is executing the current function.

Its value depends on how a function is called, not where it’s written.

It lies in the concept of Execution Context & Object-Oriented Programming in JavaScript.
*/

const student = {
    name : "Amit",
    age: 24,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg(){
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);  
    }
}

console.log(student.getAvg());


console.log(this);


console.log("345amit".toUpperCase());
console.log("345amIT".toLowerCase());
