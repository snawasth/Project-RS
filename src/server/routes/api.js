const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://127.0.0.1:27017',['regpage']);
/* GET api listing. */
 
router.get('/', (req, res) => {
  res.send('api works');
});
 
 
// Get Todos
router.get('/todos', function(req, res, next){
    db.todos.find(function(err, todos){
        if(err){
           res.send(err);
        } else {
           res.json(regpage);
        }
    });
});
 
module.exports = router;
