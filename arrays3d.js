const equipShelfA =["baseball","football","volleyball"];

const equipShelfB = ["basketball","t-shirts","jerseys"];

const clothesShelfA = ["tank tops","t-shirts","jersets"];

const clothesShelfB = ["sweat_top"," tops","sweat_pants","hoodies "];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA,equipShelfB];
const clotheDept = [clothesShelfA,clothesShelfB];

console.log(equipDept[0][1]);
console.log(clotheDept[1][0]);


const sportsStore = [equipDept,clotheDept];
console.log(sportsStore[0][1][0]);

console.log(sportsStore[1][1][0]);

