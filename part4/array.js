// question1

// let teaFlavors = ["green tea","black tea " ,"oolong Tea"];
// // another way of declaration of array 

// let Teafl = new Array("green tea","black tea " ,"oolong Tea");
// console.log(Teafl);

// let firstTea = teaFlavors[0];
// console.log(firstTea);
// console.log(teaFlavors);

// question 2

// let cities = ["London", "TOkoyo","Paris","New york"]
// let trdcity = cities[3];
// console.log(trdcity);

// question 3
// let teaTypes = ["herbal tea", "white tea", "masala chai"];
// teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

// question 4

// let citiesVisted = ["MUmbai", "Sydney"]
// citiesVisted[2] = "dalgaon"; // not a proper way
// citiesVisted[citiesVisted.length]= "birpara";// not a proper way
// citiesVisted.push("Berlin");
// console.log(citiesVisted);


// question 5

// let teaOrder = ["Chai","iced Tea", "matcha", "early grey"]
// let lastoredr = teaOrder.pop();

// console.log(teaOrder);

// question 6
// let popularTeas = ["green tea", "oolong tea" ,"chai"]
// let softCopyTeas = popularTeas // softcopy means the change in main array that chage reflect in copied array || pointer point to he same memory location
// popularTeas.pop()
// console.log(softCopyTeas);
// console.log(popularTeas);


let topCities = ["Berlin", "Singapore", "New York"]
let hardCopyCities = [...topCities];//hardcopy  chanhe on main array does not reflect in copied array
let anwayofhardcpy = topCities.slice();
topCities.pop();

// console.log(topCities);
// console.log(hardCopyCities);
// console.log(anwayofhardcpy);

let europeanCities =  ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]
// let worldCities = europeanCities + asianCities;
// console.log(worldCities); //output -> Paris,RomeTokyo,Bangkok
// console.log(typeof worldCities); // output string

// let worldCities = [europeanCities,asianCities]; //output -> [ [ 'Paris', 'Rome' ], [ 'Tokyo', 'Bangkok' ] ]
// console.log(worldCities);

let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities); // output -> [ 'Paris', 'Rome', 'Tokyo', 'Bangkok' ]


let teaMenu = ["masala chai", "oolong tea", "green tea", "early grey"];

menuLength = teaMenu.length;
// console.log(menuLength);

// question 10 

let cityBucketList = ["Kyoto", "London", "cape town", "Vancourver"];

let islondonInList = cityBucketList.includes("London")
console.log(islondonInList);

let islondonInList1 = cityBucketList.includes("london") // true/ false
console.log(islondonInList1);


