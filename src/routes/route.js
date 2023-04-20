const express = require('express');
const router = express.Router();
const welc=require('../logger/logger')
const dte=require('../util/helper')
const mnth=require('../util/helper')
const info=require('../util/helper')
const trimstring=require('../validator/formatter')
const strlowercase=require('../validator/formatter')
const struppercase=require('../validator/formatter')
const lodash=require('lodash')
// router.get('/test-you', function (req, res) {
//     res.send('Hii', welc.welcome)
// });

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
   // 1)
    let arr=['Jan','Feb','March','April','May','June','July','August','Sep','Oct','Nov','Dec']
    console.log(lodash.chunk(arr,4))
  //2)
let OddArr=[1,3,5,7,9,11,13,15,17,19]
let ans=lodash.tail(OddArr)
console.log(ans)

//3)
let unionofArr=lodash.union([1,2,3,3],[4,5,4,5],[6,7,4,2,1,8,9])
console.log(unionofArr)

//4)
let values=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
let object=lodash.fromPairs(values)
console.log(object)
});

router.get('/welcome', function (req, res) {
    welc.welcome()
    res.send("Done !")
});

router.get('/date', function (req, res) {
    dte.printDate()
    res.send("Done !")
});

router.get('/month', function (req, res) {
    mnth.printMonth()
    res.send("Done !")
});

router.get('/batchinfo', function (req, res) {
    info.getBatchInfo()
    res.send("hi  !")
});

router.get('/trimstr', function (req, res) {
    trimstring.trim()
    res.send("hi the string is trim now!")
});

router.get('/lower', function (req, res) {
    strlowercase.changetoLowerCase()
    res.send("hi, the string is lowercase now!")
});

router.get('/upper', function (req, res) {
    struppercase.changetoUpperCase()
    res.send("hi, the string is Uppercase now!")
});

module.exports = router;