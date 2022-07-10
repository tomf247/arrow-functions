/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 26, 27];

//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];

let [john, mary, joe] = ages;

console.log(john, mary, joe);

// Destructuring objects

let jobs = {

    mike: "designer",
    jill: "developer",
    alacia: "accountant"

};

let {mike, jill, alacia} = jobs;
console.log (mike, jill, alacia);

// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"]

let [johnNative, johnSecondry] = languages;
console.log(johnNative, johnSecondry);

let [,,maryNative, marySecondary] = languages; 
console.log(maryNative, marySecondary);


let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};

let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

let fruits = ["apple","orange","banana","peach","cherry"];

let [ favorite, secondFavorite,...others ] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);


let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    andrea: "vegetarian",
    sarah: "steak",
}

let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);
