const printDate=()=>{
    const today=new Date()
    const day=today.getDate()
    console.log(day)
}

const printMonth=()=>{
    const today=new Date()
    const month=today.getMonth()
    console.log(month)
}

const getBatchInfo=()=>{
    console.log("Technetium, W5D3, the topic for today is Nodejs module system")
} 


module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo