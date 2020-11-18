const User = require('../models/User')
const userOrder = require('../models/userOrder')

exports.addOrderProduct = (req, res)=> {
   userOrder.create(req.body,(err, data)=>{
       if(err) {throw err;}
       res.send(data);
   })
}