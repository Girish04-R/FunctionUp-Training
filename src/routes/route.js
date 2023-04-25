const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// router.get('/movies',function (req, res){
//     let MovieNames=['Rang de basanti','The shining', 'Lord of the rings', 'Batman begins']
//     res.send(MovieNames)
// })

// router.get('/movies/:indexNumber',function (req, res){
//     let MovieNames=['Rang de basanti','The shining', 'Lord of the rings', 'Batman begins']
//   if(req.params.indexNumber>MovieNames.length || req.params.indexNumber<0){
//    return  res.send("Use a valid index")
//   }else{
//     for(let i=0;i<MovieNames.length;i++){
//         if(req.params.indexNumber==i){
//           return  res.send(MovieNames[i])
//         }
//     }
// }
// })


// router.get('/films', function (req, res){
//     let ArrObj=[ {
//       'id': 1,
//         'name': 'The Shining'
//        }, {
//         'id': 2,
//         'name': 'Incendies'
//        }, {
//         'id': 3,
//         'name': 'Rang de Basanti'
//        }, {
//         'id': 4,
//         'name': 'Finding Nemo'
//        }]
//        res.send(ArrObj)
// })

// router.get('/films/:filmId', function (req, res){
//     let ArrObj=[ {
//       'id': 1,
//         'name': 'The Shining'
//        }, {
//         'id': 2,
//         'name': 'Incendies'
//        }, {
//         'id': 3,
//         'name': 'Rang de Basanti'
//        }, {
//         'id': 4,
//         'name': 'Finding Nemo'
//        }]
//     const ans=ArrObj.find(x=> x.id==req.params.filmId)
//        if(ans){
//         res.send(ans)
//        }else{
//         res.send('No movie exists with this id')
//        }
// })

let players =
 [
     {
         "name": "manish",
         "dob": "1/1/1995",
         "gender": "male",
         "city": "jalandhar",
         "sports": [
             "swimming"
         ]
     },
     {
         "name": "gopal",
         "dob": "1/09/1995",
         "gender": "male",
         "city": "delhi",
         "sports": [
             "soccer"
         ]
     },
     {
         "name": "lokesh",
         "dob": "1/1/1990",
         "gender": "male",
         "city": "mumbai",
         "sports": [
             "soccer"
         ],
     },
 ]

 router.post('/players', function (req, res) {
   
   const ans=players.find(x=> x.name===req.body.name)
    //LOGIC WILL COME HERE
   // res.send(ans)
    if(ans){
        res.send(players)
    }else{
        players.push(req.body) 
        res.send(players)
    }
   // res.send(  { data: players , status: true }  )
})




module.exports = router;