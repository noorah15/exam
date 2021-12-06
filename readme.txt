

index.js:
require("../db"); ==> require("./db/index.js"); 
--------------------------------------------------------------

Cannot find module 'mongoose' //  npm i mongoose

-------------------------------------------------------------------

const todoModel = require("./../../db/models/todos"); => const todoModel = require("./../../db/models/todo");
---------------------------------------------------------------------

const mongoose = require("mongose"); => const mongoose = require("mongoose");
----------------------------------------------------------------------
const todoModel = mongoose.module("Todo", todoSchema);=> const todoModel = mongoose.model("Todo", todoSchema);
----------------------------------------------------------------------


change the place: 
app.use(cors);
app.use(express.json());
app.use(morgan("dev")); 

and add before :
const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);
----------------------------------------------------------------------


do not export updateTodo in todos.js in controller folder =>  

module.export = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
  updateTodo,
}; 



--------------------------------------------------------------------------



module.export ==> module.exports  

--------------------------


add to db/index.js:
require("dotenv").config(); 


const mongoose = require("mongoose");
require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.DB_URL, options).then(
  () => {
    console.log("DB is connected");
  },
  (err) => {
    console.log("DB is not connected");
  }
);


------------------------------


const deleteTodo = (req, res) => {
  const { id } = req.params;

  todoModel
    .findOneAndUpdate({ _id: id }, { isDel: true }, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


---------------------------------------

const completeTodo = (req, res) => {
  const { id } = req.params;

  todoModel
    .findOneAndUpdate({ _id: id }, { isCompleted: true }, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


-----------------------------------------



const updateTodo = (req, res) => {
  const { id } = req.params;
  const { newTask } = req.body;

  todoModel
    .findOneAndUpdate({ _id: id }, { task: newTask }, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};



--------------------------------------------------


const createTodo = (req, res) => {
  const { task } = req.body;

  const newTodo = new todoModel({
    task,
  });

  newTodo
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


----------------------------------------------------


const getAllTodo = (req, res) => {
  todoModel
    .find({ isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


---------------------------------------------------



PORT=4000; => PORT=4000