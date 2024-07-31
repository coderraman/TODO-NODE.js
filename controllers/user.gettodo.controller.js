const TodoModel = require("../model/Todo.model");

const getTodos = async (req, res, next) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).json(todos);
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred, please check the code" });
  }
};

module.exports = getTodos;
