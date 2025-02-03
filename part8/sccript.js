// alert("Sever connected !!");

// example-1

document.getElementById("changeTextButton").addEventListener("click", function (){
    // console.log(this); if we us arrow function then the arrow fun. give the refference of window.
let paragraph = document.getElementById("myParagraph");
// console.log(paragraph);
// console.log(paragraph.textContent);
paragraph.textContent = "The paragraph is changed";
});

// Example-2
document.getElementById("highlightFirstCity").addEventListener("click", function (){
    let citiesList = document.getElementById("citiesList")
    citiesList.firstElementChild.classList.add("highlight");    
})

// Example-3;

document.getElementById("changeOrder").addEventListener("click", function (){
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "brown";
    coffeeType.style.padding = "5px";

})

//example - 4;
document.getElementById("addNewItem").addEventListener("click", function(){
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs";

    document.getElementById("shoppingList").appendChild(newItem);
})

//example -5 ;
document.getElementById("removeLastTask").addEventListener("click", function (){
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
})

// Example - 6

document.getElementById("clickMeButton").addEventListener("dblclick", function(){
    alert("Chai Code");
})

//Example -7 

document.getElementById("teaList").addEventListener("click", function (event){
    // console.log(event.target);
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected: "+ event.target.textContent);
    }
    
})

// Example -8

document.getElementById("feedbackFrom").addEventListener("submit", function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    // console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is : ${feedback}`;
    
})

// Example - 9
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domStatus").textContent = "DOM fully loaded"
})

//example -10

document.getElementById("toggleHighlight").addEventListener("click", function(){
    let descriptionText =document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
})

// if we get HTML Collection mean it similar to the array and prefrom array operation.
// document.getElementsByTagName("h1")[0].textContent = "Code chai"


// in MDN and accessing all link in mdn

let anchorelement = document.getElementsByTagName("a")
for (let index = 0; index < 101; index++) {
    console.log(anchorelement[index].textContent)
}