//1 Given a and b, your function should return the value of ab Example: Input: power(2,3) ––> Output: 8


const powerReturn = (a, b) => console.log(Math.pow(a, b));

powerReturn(2, 3);

//2 Given length of a regular hexagon, your function should return area of the hexagon. Example: Input: areaOfHexagon(10) ––> Output: 259.80

//Area of Hexagon = Area = (3√3 s2)/2;
// (3√3/2)*x ke power 2
//yer eglt hai
const areaHexa = s => console.log((3 * 1.732 * s * s) / 2);
areaHexa(10);


//another way using math.sqrt 
const areaOfHexagon = a => console.log(((Math.sqrt(3) * 3 / 2) * a * a).toFixed(2));
areaOfHexagon(10);

// 3 Given a sentence, your functions should return the number of words in the sentence. Example: Input: noOfWords(We are neoGrammers) ––> Output: 3

// word.split('').length;
//str. match(/(\w+)/g). length


const wordCount = (s) => console.log(s.match(/(\w+)/g).length);
wordCount("hi baby, this is Ajit Sharma from NeogCamp batch 2k22 ");