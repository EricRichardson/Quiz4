var express = require("express");
var router = express.Router();
var Company = require("../models/company");

router.get('/', function(req, res, next){
  Company.find({}, function(err, companies){
    if (err) {
      err.status = 404;
      next(err, req, res)
    } else {
      res.json( companies );
    }
  })
})

router.get('/new', function(req, res){
  res.render('companies/new')
})

router.post('/', function(req, res){
  products = req.body.products.split(',');
  company = new Company({name: req.body.name, products: products});
  company.save(function(err, company){
    if(err){
      alert("An error occured");
    } else {
      console.log("Company created!");
    }
  })
})
module.exports = router
