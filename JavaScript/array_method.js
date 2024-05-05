const elements = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
];

// const result = elements.filter(item => item.length > 10);
// console.log(result);

// const resultTwo = elements.filter((item,index,array) => {
//     console.log(item, index, array);
//     return item.length > 7;
// })
// console.log(resultTwo);

//Just Find the first one
const res = elements.find(item => item.length > 7);
console.log(res);

//Find all of elements
const res1 = elements.filter(item => item.length > 7)
    .map(item => item.toUpperCase())
console.log(res1)

const grades = [91, 82, 73, 94, 85, 76];

const sum = grades.reduce((accum,item,index,array) => (accum + item),0);
console.log(sum);

const filterGrades = grades.filter(g => g>80);
console.log(filterGrades);

const avg = grades.reduce((accum,item) => (accum+item),0)/grades.length;
//** Wrong const avg2 = grades.reduce((accum,item,index,array)=>(accum+index)/array.length,0);
console.log(avg);


