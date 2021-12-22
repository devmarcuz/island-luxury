const arr = [{ name: "a" }, { name: "b" }, 1, 2, 3, 4, 5, 6];

// arr.forEach((ary) => {
//   if (ary.name == "a") {
//     ary.name = "ade";
//   }
// });

// const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let fakAry = ary;
// let newAry = [];

// for (let i = 0; i < ary.length; i++) {
//   const element = ary[i];
//   if (ary.length <= 5) {
//     newAry.push(ary.slice(0, arr.length + 1));
//   } else if (ary.length == 1) {
//     newAry.push(ary[ary.length]);
//   } else {
//     newAry.push(ary.slice(0, 6));
//   }

//   if (ary.length <= 2) {
//     console.log(ary);
//     // newAry.push(ary);
//   }
// }

// console.log(newAry);

let txt = "2021-06-13T17:25:01.697Z";
let txtarr = txt.split(":");
let date = txtarr[0].split("").slice(0, 10).join("");
console.log(date);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let num = date.split("-")[1];
let dateNum = date.split("-")[2];
dateNum = Number(dateNum);
num = Number(num);
console.log(months[Number(num) - 1]);
console.log(Number(num));
console.log(dateNum);

function ordinal(number) {
  const english_ordinal_rules = new Intl.PluralRules("en", {
    type: "ordinal",
  });
  const suffixes = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
  };
  const suffix = suffixes[english_ordinal_rules.select(number)];
  //   return number + suffix;
  console.log(`${number}${suffix}`);
}

ordinal(dateNum);

let oh = { a: 1, b: 2 };
oh = { ...oh, c: 3 };
console.log(oh);
