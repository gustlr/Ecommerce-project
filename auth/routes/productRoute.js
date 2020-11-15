

module.exports = function (productapp) {
    var product = require('../controllers/product.controller')
    productapp.get('/api/product', product.showAllProduct);
    productapp.get('/api/product/:id', product.findProductById);
    productapp.post('/api/product', product.addProduct);
    productapp.put('/api/product/:id', product.updadeProductById);
    productapp.delete('/api/product/:id', product.removeProductById);
}