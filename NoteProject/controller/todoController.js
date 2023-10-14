const todoItemsModel = require('../models/todoSchema');

const addTodo= async (req, res)=>{
  try{
    const newItem = new todoItemsModel({
      task: req.body.task,
      date:req.body.date
    })
    const saveItem = await newItem.save()
    res.status(200).json(saveItem);
    console.log("Added....")
   // res.status(200).send("Added....")
   // **res.redirect("./public/main.html");
  }catch(err){
    res.json(err);
  }
}

const findTodos= async (req, res)=>{
  try{
    const allTodoItems = await todoItemsModel.find({});
    res.status(200).render('todo.ejs',{allTodoItems})
    //res.status(200).json(allTodoItems)
  }catch(err){
    res.json(err);
  }
}


const updateTodo= async (req, res)=>{
  try{
    const updateItem = (await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body}));
    res.status(200).json(updateItem);
    // patch dose not work
  }catch(err){
    res.json(err);
  }
}


const deleteTodo= async (req, res)=>{
  try{
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    //res.status(200).json(deleteItem);
    res.status(200).json('Task Deleted');
  }catch(err)
  {
    //**res.status(404).json("Task Dose not exist")
    res.json(err);
  }
}


module.exports ={addTodo,findTodos,updateTodo,deleteTodo}