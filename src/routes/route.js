const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/movies',function (req, res){
    let MovieNames=['Rang de basanti','The shining', 'Lord of the rings', 'Batman begins']
    res.send(MovieNames)
})

router.get('/movies/:indexNumber',function (req, res){
    let MovieNames=['Rang de basanti','The shining', 'Lord of the rings', 'Batman begins']
  if(req.params.indexNumber>MovieNames.length || req.params.indexNumber<0){
   return  res.send("Use a valid index")
  }else{
    for(let i=0;i<MovieNames.length;i++){
        if(req.params.indexNumber==i){
          return  res.send(MovieNames[i])
        }
    }
}
})


router.get('/films', function (req, res){
    let ArrObj=[ {
      'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       res.send(ArrObj)
})

router.get('/films/:filmId', function (req, res){
    let ArrObj=[ {
      'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
    const ans=ArrObj.find(x=> x.id==req.params.filmId)
       if(ans){
        res.send(ans)
       }else{
        res.send('No movie exists with this id')
       }
})

module.exports = router;