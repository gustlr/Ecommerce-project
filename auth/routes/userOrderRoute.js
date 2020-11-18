module.exports = function (userOrder) {
    var userOderProducts = require('../controllers/userOrder.controller')

    userOrder.post('/api/userOder', userOderProducts.addOrderProduct);
  
}