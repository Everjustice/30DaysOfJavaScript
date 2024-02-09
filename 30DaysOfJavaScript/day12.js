// regex
// 1 - regExp constructor
// regex tanımı
// ben 30 yaşındayım ve 1993 yılında dogdum

//let str = 'ben 30 yaşındayım ve 1993 yılında dogdum '

//let username = 'tarfun erbilen'

//let pattern = 'love'
//let flag = 'gi'
//let regEx = new RegExp(pattern, flag)

//let regex = /love/gi 
/*
let word = /salak/i
let comment =prompt('yorumunu yaz! ama  yazarken dikkatli ol')


    if(word.test(comment)){
        alert('hayır sen salaksın')
    }
*/
/*
let string = 'I love javascript'

console.log(
    string.match(/love/)
)*/
/*
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)

*/

/*
const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replaceAll(/%/g, '')
console.log(matches)  

*/

/*
let str = 'ben 30 yaşındayım ve 1993 yılında dogdum'
console.log(
    str.match(/[0-9]/g)
)
*/

const pattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches = txt.match(pattern)

console.log(matches)  