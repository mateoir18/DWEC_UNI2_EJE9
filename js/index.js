//manual//
var array = [100, 23, 23, 23, 23, 67, 45];
var outputArray = [];

for(let i = 0; i < array.length; i++){
    if(outputArray.indexOf(array[i]) === -1) {
        outputArray.push(array[i]);
    }
}
console.log(outputArray);

//metodo from//
outputArray = Array.from(new Set(array));
console.log(outputArray); 
