const Operation = require("../model/Operations");


module.exports.create = (req, res) => {
   
  const {title, value, type} = req.body;

  Operation.create({
    title,
    value,
    type
  }).then(operation => res.status(201).json(operation));
}

module.exports.findAll = (req, res) => {

  Operation.findAll().then(operations => res.status(200).json(operations))
}
