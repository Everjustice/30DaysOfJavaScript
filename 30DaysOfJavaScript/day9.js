// callback fonksiyonun adını istediğimiz şekilde verebiliriz.
const callback = (n) => {
    return n ** 2
  }
  
  // bir başka fonksiyonu callback olarak alan fonksiyon
  function cube(callback, n) {
    return callback(n) * n
  }
  
  //console.log(cube(callback, 3))
  


  const a = s1 =>
  {
    const b = s2 =>{
        const c = s3 =>{
            return s1+ s2 +s3
        }
        return c
    }
    return b
  }
  //console.log(a (5)(10)(20))

  const numbers = [1,3,5,7,9]
  let totel = 0
  numbers.forEach(number => totel+= number)
   //console.log(totel)

   function sayHello()
   {
    //console.log(`hello!`)
 
}
setInterval(sayHello, 1000)



const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted