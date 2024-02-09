/*function MERHABA()
{
    console.log('merhaba')
}
MERHABA()

function printFullName (){
    let firstName = 'emirhan'
    let lastName = 'ozkaraaslan'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName() 



function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total

}

console.log(addTwoNumbers())*/

const sayHello = function(name) 
{
    return `Hello ${name}`
}
console.log(sayHello('emo'));



  (function()
  {
    console.log('he yoo')
  })()



  function multiply(num1, num2 = 2)
  {
    return num1 * num2
  }
  console.log(multiply(10))
  console.log(multiply(15 ,5))