const numbers = [10 ,12 ,14]

const [number1 ,number2] = numbers

/*
console.log(numbers[0])
console.log(number1)
console.log(numbers[1])
console.log(number2)
console.log(numbers[2])
*/

/*
const stack = [
    ['HTML', 'CSS', 'JAVASCRIPT'],
    ['PHP', 'MYSQL', 'NODEJS']
]
const [[frontend], backend] = stack

console.log(frontend)
*/
/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, num4, ...rest] = nums

console.log(num1, num2, num3, num4)
console.log(rest)

*/

/*
const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width, height, area, perimeter } = rectangle
  
  console.log(width, height, area, perimeter)

  */
 /*
  function multiply(numb1 ,numb2)
{
    return numb1 * numb2
}
console.log(
    multiply(10, 10)
)

*/

//Another Example

/*
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
  }
  // Let us create a function which give information about the person object without destructuring
  
  const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')
  
    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
      obj.age
    } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
    return personInfo
  }
  
  console.log(getPersonInfo(person))

  */
 

  const abı = [1, 3, 5]
  console.log(
    [12, ...abı, 13]
  )