//object assignment example
let per1 = { id: 1, name: 'Joe' };
//per1 is an object variable,
//store memory address that points to object properties
let per2 = per1;

/*doSomething(per2); //hoisting, use only var scope
function doSomething(p) {
    //p=per2  (memory address of per2 to p)
    p.name = 'Mary'; //pers2.name='Mary'
}

console.log(per1);
per2.id = 3;
console.log(per1);



//primitive assignment example
let num1 = 10; //num1 is  a primitive variable, store value 10
let num2 = num1; //num2=10
doSomething(num2);
function doSomething(num) {
    //num=num2=10
    num = 20; //num=20
}

console.log(num1); //num1=10
console.log(num2); //num2=10



// Aray
let arr1 = [];
console.log(typeof arr1);
arr1 = [5, 2, 10, 'student']; //untyped & unsized
console.log(arr1.length);
console.log(arr1[0]);
console.log(arr1[arr1.length - 1]);
console.log(   arr1[ arr1[1] ]     );
*/

//array of objects

let arr2 = [
    { id: 1, name: 'Adam' },
    { id: 2, name: 'Joe' }
  ];
  // console.log(arr2[1].name);

  
  let arr3 = [
    // [(0,0) 1, (0,1) 3, (0,2) 5, (0,3) 7],
    // [(1,0)2, (1,1) 4, (1,2)6,  (1,3) 8]
    [1, 3, 5, 7],
    [2, 4, 6, 8]
  ];
  // console.log(arr3[1][1]);
  
  let arr4 = [...arr3, 0.5, 100, ...arr2];
  console.log(arr4);