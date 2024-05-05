//const result = -1 && 12 && "abc" && [] && {} && true;
const result = false || 0 || 0.0 || '' || null || undefined || NaN ;
if(result) {
    console.log('Inside Truthy.....');
} else {
    console.log('Inside Falsy!!!!!');
}

console.log("IE6" == 0);
console.log("" == 0);