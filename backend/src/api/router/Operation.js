const express = require('express');
const { create, findAll } = require('../controller/OperationController');

const router = express.Router();



router.post('/operations', (req, res) =>  {
  console.log("tese")
  create(req, res);
});


router.get('/operations', (req, res) => {
 
  findAll(req, res)
})


module.exports = router;