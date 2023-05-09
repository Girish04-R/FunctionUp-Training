const jwt = require('jsonwebtoken')

const validUser=async function(req,res,next){
const token=req.headers['x-auth-token']
    try{
    if(!token){
    res.send({status: false, msg: "token must be present"})
   }
   let decodedToken = jwt.verify(token, "functionup-technetium-girish-very-very-secret-key");
   if(!decodedToken) return res.send({ status: false, msg: "token is invalid" });
    next()
  
  }
    catch(e){
    
      return res.send({msg: "token is invalid" });
    }    
    
}
module.exports.validUser=validUser