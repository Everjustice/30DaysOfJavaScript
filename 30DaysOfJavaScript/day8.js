let a = 'emirhan'



let emo = 'murat'
let sorname = 'yıldırım'
function letsLarnScope(){

console.log(emo, sorname)
if (true)
{
    let emo = 'emirhan'
    let sorname = 'ozkaraaslan'
    console.log(emo , sorname)
}  console.log(emo , sorname)

}

letsLarnScope()
console.log(emo ,sorname)




for(var  i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3

  const user = {

    names : 'emirhan',
    surname : 'ozkaraaslan',
    age : 19,
    isMarried : false,
    skills:[
        'lol',
        'mb bannerlord',
        'aphelios',

    ]
  }

  console.log(user)

  const maraba = {

    names : 'emirhan',
    surname : 'ozkaraaslan',
    age : 20,
    isMarried : false,
    skills:[
        'lol',
        'mb bannerlord',
        'aphelios',

    ]
  }

  console.log(maraba.age)


  const person = {
    firstName: 'Emirhan',
    lastName: 'ozkaraaslan',
    age: 19,
    country: 'Turkey',
    city: 'Kocaeli',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  person.nationality = 'Ethiopian'
  person.country = 'Turkey'
  person.title = 'teacher'
  person.skills.push('Meteor')
  person.skills.push('SasS')
  person.isMarried = true
  
  person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length - 1)
      .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
  }
  console.log(person)
  console.log(person.getPersonInfo())

for (let [key, val] of Object.entries(user)){
    console.log(key, val)
}