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

// solution for 1st problem
router.get('/sol1',function (req , res){
   let arr=[1,2,3,5,6,7] 
   let n=arr.length
   let add=0
   let sumall=(n+1)*((n+2)/2)
   for(let i=0;i<n;i++){
    add+=arr[i]
   }
   let ans=sumall-add
   res.send( { data: ans  })
});

// solution for the second problem
router.get('/sol2',function (req , res){
    let arr= [33, 34, 35, 37, 38]
    let n=arr.length+1  //6
    let add=0
    let sumall=(n*(arr[0]+arr[arr.length-1])/2)
    for(let i=0;i<arr.length;i++){
     add+=arr[i]
    }
    let ans=sumall-add
    res.send( { data: ans  })
 });

//  let players =
//  [
//      {
//          "name": "manish",
//          "dob": "1/1/1995",
//          "gender": "male",
//          "city": "jalandhar",
//          "sports": [
//              "swimming"
//          ]
//      },
//      {
//          "name": "gopal",
//          "dob": "1/09/1995",
//          "gender": "male",
//          "city": "delhi",
//          "sports": [
//              "soccer"
//          ]
//      },
//      {
//          "name": "lokesh",
//          "dob": "1/1/1990",
//          "gender": "male",
//          "city": "mumbai",
//          "sports": [
//              "soccer"
//          ]
//      },
//  ]


//  router.post('/players', function (req, res) {

//     // const ans=players.find(x=> x.name!==req.body.name)
//     // if(ans){
//     //     players.push(req.body)
//     // }
//     //LOGIC WILL COME HERE

//     for(let i=0;i<players.length;i++){
//         let temp=players[i]
//         if(temp.name==req.body.name){
//             res.send(  { data: players , status: true }  )
//         }
//       players.push(req.body)
//     }
    
// })




module.exports = router;