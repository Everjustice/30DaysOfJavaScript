console.log('%d day of javascript ', 30)
console.log(["emirhan","mehmet" ])

console.log({
    name: "murat",
    sorname: "ozkaraaslan"
})

console.log('%cDur! %cNaberr', 'font-size: 50px; font-family: Arial; color: red; text-shadow: 0 0 10px rgba(255,255,255,.3)','color : blue')

console.log(
    '%c30 Days%c %cOf%c %cJavaScript%c',
    'color:green',
    '',
    'color:red',
    '',
    'color:yellow',

    )

    console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')
console.warn('bu bir hata mesajıdır ')

console.error('sen ne yaptın bro')

let names= ['emirhan','mert','murat']
console.table(names)


const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')

  console.table({
    name : 'emirhan',
    surname : 'ozkaraaslan'
  })
  


  console.time('calculate 1m array');
  new Array(10e5).fill().map((value, index) => index);
  console.timeEnd('calculate 1m array');



  let a = 5
  let b = 6
  console.assert( b > a , ' a b den buyuk degil ')


//const countries = [
 // ['Finland', 'Helsinki'],
//  ['Sweden', 'Stockholm'],
  //['Norway', 'Oslo']
//]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.log('bu mesaj bu guruba ait')
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()




let sorname =('murat')

console.log(sorname)