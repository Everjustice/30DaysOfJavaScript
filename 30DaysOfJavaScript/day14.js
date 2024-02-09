// hata ayıklama yontemi
/*
let fullname
try{
    let firsName ='emirhan'
    let lostName ='ozkaraaslan'
    fullname = firsName + ' ' + lostName //lostName yazsam hata almazdım
    throw new Error('bir hata var')
    //throw: throw ifadesi özel bir hata oluşturmamıza olanak tanır. 
    // new error yazıp hatayı bız ad verebılıyoruz
}
catch(e){
    console.log(e.name)
    console.table(e)
}
console.log(fullname)
*/
let age = prompt('kaç yaşındasın?')
try{
    if(age > 29 ) throw new Error('hatalısın lan')
    
}catch{
    alert('yaşınız hakkında yalan dıyorsun')
}

let a = "asdas"
console.log(a)