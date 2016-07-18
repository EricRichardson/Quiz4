var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = {
  name: {type: String},
  likes: {type: Number}, 
  products: {type: Array}
}

var company = mongoose.model("comapny", CompanySchema);

module.exports = company;
