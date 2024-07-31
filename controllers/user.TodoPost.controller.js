const TodoModel = require("../model/Todo.model");

const postTodo = async (req, res, next) => {
  try {
    const data = req.body;
    if (!data) {
      // Assuming `user_data` is the required field
      return res.status(400).send("Invalid data");
    }
    const todo = new TodoModel(data);
    await todo.save();
    res.status(201).send(todo);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = postTodo;
