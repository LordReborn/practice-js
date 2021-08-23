let test1 = "2,50,5,1,11";
let test2 = "1,50,30,20,2";
let test3 = "7,10,4,2,50";
let test4 = "5,20,3,19,230,2";

function maxProfit(string) {
  let stringArray = string.split(",");
  let numberArray = stringArray.map((character) => Number(character));

  let maxProfit = 0;
  numberArray.forEach((number, index, numbers) => {
    let remainingNumbers = numbers.slice(index + 1, numbers.length);
    remainingNumbers.map((comparative) => {
      let result = comparative - number;
      maxProfit > result
        ? maxProfit
        : ((maxProfit = result), (refMax = result));
    });
  });
  console.log(maxProfit);
}

maxProfit(test1);
maxProfit(test2);
maxProfit(test3);
maxProfit(test4);
