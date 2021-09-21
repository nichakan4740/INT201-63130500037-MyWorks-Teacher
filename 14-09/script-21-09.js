/*//function expression
const doSomething = function(n1,n2,n3){
    return n1 + n2 + n3;
    };

//named function experssion
console.log(doSomething(5,2,1));//8

const findSum = function sum(n){
    if (n <= 1) return 1;
    else return n + sum(n -1);//5+sum(4)+sum(3)+sum(2)+sum(1)//5+4+3+2+1
};
console.log(findSum(5));//15


//simple function
function area(width, height) {
    return width * height;  
  }
  onsole.log(area(5, 4));*/



//1.
  function hellSmeone(name){
      return `Hello ,${name}`;
  }
 //แปลง
  const helloSomeone = name => `Hello, ${name}`;

  //2.
  function area(width,height){
      return width*height;
  }
  //แปลง
  const area = (width,height) => width*height;

  //3.
  function evenNum(num){
      if (num % 2 === 0) return true;
      else return false;
  }
  //แปลง
  const evenNum = num => (num % 2 ===0 ) ;

  console.log(helloSomeone("ab"));
  console.log(area(2,3));
  console.log(evenNum(23));
