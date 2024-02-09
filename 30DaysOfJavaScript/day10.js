/*const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  const langSet = new Set(languages)
  console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
  console.log(langSet.size) // 4
  const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts);
[
    { lang: 'English', count: 3 },
    { lang: 'Finnish', count: 1 },
    { lang: 'French', count: 2 },
    { lang: 'Spanish', count: 1 },
]*/
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)



const map = new Map()
console.log(map)
