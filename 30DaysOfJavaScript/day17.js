
/*localStorage.setItem('key', 'value')



localStorage.setItem('firstName', 'EMİRHAN') 
console.log(localStorage)



localStorage.setItem('age', 19)
console.log(localStorage)


const skills = ['HTML', 'CSS', 'JS']

const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)


const user = {
  firstName: 'EMİRHAN',
  age: 19,
  skills: ['HTML', 'CSS', 'JS']
}

const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)

localStorage.getItem('key')

*/
//localStorage.clear() // silme 


let basket = JSON.parse(localStorage.getItem('basket')) || [] 

const products = [
  {
    id : 1,
    title : 'MacBook Pro 2022',
    price: 45_000
  },
  {
    id : 2,
    title : 'MacBook  2022',
    price: 40_000
  },
  {
    id : 3,
    title : 'MacBook Pro 2021',
    price: 30_000
  },
]

function saveToStorage(){
  localStorage.setItem('basket',JSON.stringify(basket))
}

function addBasket(productsId){
  const basketIndex = basket.findIndex(b => b.productsId == productsId)

  if (basketIndex > -1){
    basket[basketIndex] = {
      ...basket[basketIndex],
      amount: basket[basketIndex].amount + 1
    }
  }else
  basket.push({
    productsId,
    amount: 1
  })
    saveToStorage
  }



function removeBasket(productsId){
  const item = basket.find(p => p.productsId == productsId)
  if (item){
    if (item.amount == 1 ){
      basket = basket.filter(id => id =! productsId)
      }else{
        basket = basket.map(i => {
          if (i.productsId == productsId){
            i.amount -= 1
          }
          return i 
        })
      }
  }
  saveToStorage()
}

function totelPrice(){
  return basket.reduce((prev, basket) => {
    const product = products.find(p => p.id == basket.productsId)
    return prev += (product.price * basket.amount)
  }, 0)
}




console.log(totelPrice)