// question1 for
let teaList = ["Green Tea", "Black Tea","chai","Oolong Tea"]
let selectedTeas=[] ;

for (let index = 0; index < teaList.length; index++) {
    if (teaList[index] === "chai") {
        break;
    }
    selectedTeas.push(teaList[index])
}
// console.log(selectedTeas);

// question 2 forloop

let cities = ["London", "New York","paris","Berlin"]
let visitedCities = [];

for (let index = 0; index < cities.length; index++) {
    if (cities[index] === "paris" || cities[index] === "Paris") {
        continue;
    }
    visitedCities.push(cities[index])
}
// console.log(visitedCities);

// question 3 for-of

let number = [1,2,3,4,5]
let smallNumber = []

for (const num of  number) {
    if (num === 4) {
        break;  
    }
    smallNumber.push(num);
}
// console.log(smallNumber);

// question 4 for of
let teaList2 = ["chai","green tea","herbal tea", "black Tea"];
let preferredTeas =[];

for (const tea of teaList2) {
    if (tea === "herbal tea") {
        continue;
    }
    preferredTeas.push(tea)
}
// console.log(preferredTeas);

// question 5 for in

let citiesPopulation = {
    "London": 8900000,
    "New York":8400000,
    "Paris": 2200000,
    "Berlin":3500000
};

let citieNewPopulations = {}

// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
//    console.log(citiesPopulation[city]);
    if (city === "Berlin") {
        break;
    }
    citieNewPopulations[city] = citiesPopulation[city];
   
}
// console.log(citieNewPopulations);

// question 6

let worldCities = {
    "Sydney" : 5000000,
    "Tokyo" : 9000000,
    "Berlin" : 3500000,
    "Paris" : 2200000,
}

let largeCities = {};

for (const city in worldCities) {
    if(worldCities[city] < 3000000){
        continue;
    }
    largeCities[city] = worldCities[city];
}
// console.log(largeCities);

// qestion 7 forEach

let chaiList = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = [];
// chaiList.forEach((tea) => {
//     console.log(tea);
    
// });

chaiList.forEach(function(tea){
    if (tea === "chai") {
        return;
    }
    availableTeas.push(tea);
});
// console.log(availableTeas);

// question 8 forEach

let myworldCities = ["Berlin", "Tokyo","Sydney","Paris"];
let traveledCities = [];

myworldCities.forEach(city => {
    if (city === "Sydney") {
        return;
    }
    traveledCities.push(city);
});
// console.log(traveledCities);


// question 9 for 

let arr = [2,5,7,9]
let doubledNumbers = [];

for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 7) {
        continue;
    }
    doubledNumbers.push(arr[index] * 2);
    
}
// console.log(doubledNumbers);

// question 10 for-of
let listChai = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of listChai) {
    if (tea.length > 10) {
        break;
    }
    shortTeas.push(tea);
}
 
console.log(shortTeas);
