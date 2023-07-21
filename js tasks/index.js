// ----------------------exercise 3-----------------
console.log("\n-------------exercise 3 outputs--------------\n");

// concatenation

var greeting = "hello";
var name = "world";

console.log(greeting + name);

//using regex

greeting = greeting.replace(/[ol]/g, (char) => (char === "o" ? "0" : "1"));
name = name.replace(/[ol]/g, (char) => (char === "o" ? "0" : "1"));

console.log(greeting + name);

//reverse string

result = greeting + name;

// using split and reverse

console.log(result.split("").reverse().join(""));

//best method using for loop

const reverseString = (inputString) => {
  let reversed = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i];
  }
  return reversed;
};

console.log(reverseString(result));

//---------------------exercise 4--------------------
console.log("\n-------------exercise 4 outputs--------------\n");


const timeOfDay = () => {
  var currentTime = new Date().getHours();
  if (currentTime < 12) console.log("morning");
  else if (currentTime < 16) console.log("afternoon");
  else console.log("night");
};

timeOfDay();

//------------------------exercise 5-----------------

console.log("\n-------------exercise 5 outputs--------------\n");


const sandwichCalculator = (bread) => {
  return bread / 2;
};

const sandwichCalculator2 = (bread, cheese) => {
  if (bread >= cheese * 2) return cheese;
  else {
    return Math.floor(bread / 2);
  }
};

console.log(sandwichCalculator2(10, 1));

//-----------------------Exercise 6----------------------------------

console.log("\n-------------exercise 6 outputs--------------\n");
console.log("task 1 : 12");
console.log("task 2 : 12");
console.log("task 3 : 12");
console.log("task 4 : 10");
console.log("task 5 : 12");
console.log("task 6 : 15\n");

//----------------------------Exercise 7-------------------------------
console.log("\n-------------exercise 7 outputs--------------\n");


var toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];

const makePizza = (toppings) => {
    
    console.log("A tasty pizza with "+ toppings.join(' and ')+ ".")
}

makePizza(toppings)

//----------------------------Exercise 8-------------------------------
console.log("\n-------------exercise 8 outputs--------------\n");

const capitalize = (array) => {
array.map((item)=>{
    console.log(item.charAt(0).toUpperCase()+item.slice(1))
})
}

capitalize(['hi','hello','how are you'])

//----------------------------Exercise 9-------------------------------
console.log("\n-------------exercise 9 outputs--------------\n");

function printInFrame(wordList) {
    const maxLength = Math.max(...wordList.map(word => word.length));
    const horizontalLine = '*'.repeat(maxLength + 4);
  
    console.log(horizontalLine);
    wordList.forEach(word => {
      const spaces = ' '.repeat(maxLength - word.length);
      console.log(`* ${word}${spaces} *`);
    });
    console.log(horizontalLine);
  }

printInFrame(["Hello", "World", "in", "a", "frame"])

//----------------------------Exercise 10-------------------------------
console.log("\n-------------exercise 10 outputs--------------\n");

const toPiglatinAndBack = (sentence) => {
  console.log(...sentence.split(' ').map((eachword)=>{
    return eachword.slice(1)+eachword.charAt(0)+'ay'
  }))
}

toPiglatinAndBack('The quick brown fox')

//----------------------------Exercise 11-------------------------------
console.log("\n-------------exercise 11 outputs--------------\n");

const query = (array,number) => {
 
    var index=array.indexOf(number)
    if (index == -1)
    console.log(number+ ' does not exist')
else{
  
  let nearLargestDistance=array.length;
  let nearLargest=0;
  array.map((item)=>{
    if (item > number && item > nearLargest)
    {
      itemIndex = array.indexOf(item)
      if(itemIndex < index){
        let distance = index-itemIndex
        if (distance<nearLargestDistance){
          nearLargestDistance = distance
          nearLargest=item
        }
      }
      else{
        let distance = itemIndex-index;
        if (distance<nearLargestDistance){
          nearLargestDistance=distance
          nearLargest=item
        }
      } 
    }
  })
  if(nearLargest)
  console.log(nearLargest)
  else
  console.log("no near largest number")
  }
  }

query([1,4,3,2,5,7],7)

//----------------------------Exercise 12-------------------------------
console.log("\n-------------exercise 12 outputs--------------\n");

const persistence = (num) => {
  function multiplyDigits(number) {
    let result = 1;
    while (number > 0) {
      result *= number % 10;
      number = Math.floor(number / 10);
    }
    return result;
  }

  let persistenceCount = 0;
  while (num >= 10) {
    num = multiplyDigits(num);
    persistenceCount++;
  }

  return persistenceCount;

}


console.log(persistence(39))


//----------------------------Exercise 13-------------------------------
console.log("\n-------------exercise 13 outputs--------------\n");



//----------------------------Exercise 16-------------------------------
console.log("\n-------------exercise 16 outputs--------------\n");


function measureDepth(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }

  let maxDepth = 0;

  for (const item of arr) {
    if (Array.isArray(item)) {
      const depth = measureDepth(item);
      maxDepth = Math.max(maxDepth, depth);
    }
  }

  // Increment the depth by 1 (counting the current array)
  return maxDepth + 1;
}

// Test cases
console.log(measureDepth([])); // Output: 1
console.log(measureDepth([[]])); // Output: 2
console.log(measureDepth([[[]]])); // Output: 3
console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]])); // Output: 11
