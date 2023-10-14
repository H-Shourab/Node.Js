const express=require("express")
const router=express.Router()
//const router = require('express').Router();
//import todo model 
const todoController = require('../controller/todoController');


router.post('/addtask',todoController.addTodo)
router.get('/findtasks',todoController.findTodos)
router.put('/updatetask/:id',todoController.updateTodo)
router.delete('/deletetask/:id',todoController.deleteTodo)


module.exports = router;