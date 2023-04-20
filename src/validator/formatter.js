const trim=()=>{
    let str=" funtctionUp  "
    let result=str.trim()
    console.log("The string is trim now -"+result)
}
const changetoLowerCase=()=>{
    let str="GIRISH JOIN FUNCTIONUP"
    let ans=str.toLowerCase()
    console.log("String in lowercase -"+ans)
}

const changetoUpperCase=()=>{
    let str='girish join functionup'
    let ans=str.toUpperCase()
    console.log('string in uppercase- '+ans)
}

module.exports.trim=trim
module.exports.changetoLowerCase=changetoLowerCase
module.exports.changetoUpperCase=changetoUpperCase