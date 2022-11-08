//Objects in Js
/*
var mycar = new Object()
{
  mycar.manufacturer = 'benz';
  mycar.model = 350;
  mycar.year = 2000;
}
console.log(mycar.year);
*/


//Maps using keys
var mycar = new Map()
{
  mycar.set(1, 'Benz')
  mycar.set(2, 'BMW')
  mycar.set(3, 'Honda')
}
console.log(mycar.get(2));


var obj = {};
var fun = function () {};
var mapps = new Map()
{
  mapps.set('my car is', 'Benz')
  mapps.set(obj, 'Honda')
  mapps.set(fun, 'Audi')
}
console.log(mapps.get(fun));

//Maps with arrays
var arr = [[1, 'Honda'], [2, 'Benz'], [3, 'Audi']]
var car = new Map(arr)
console.log(car.get(2));

for(let [key, value] of car)
{
  console.log(key+ ' ' + value)
}