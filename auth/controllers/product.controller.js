const Product = require('../models/Products');

exports.addProduct = (req, res) => {
    Product.create(req.body, (err, data) => {
        if (err) { throw err; }
        res.send(data);
    })
};

exports.showAllProduct = (req, res) => {
    Product.find().then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    });
}
    

exports.findProductById = (req, res) => {
        Product.findById(req.params.id, (err, product) => {
            if (err) throw err;
            res.send(product);
        })
    };

exports.updadeProductById = (req, res)=>{
    Product.findByIdAndUpdate(req.params.id, req.body, (err,product)=>{
        if (err) throw err;
        res.send(product);
    })
}
exports.removeProductById = (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, product) => {
        if (err) throw err;
        if(product.isModified){
            res.json({"msg":`Record DELETE successfully `})
        }else{
            res.json({"msg":`NOT successfully `})
        }
    })
}