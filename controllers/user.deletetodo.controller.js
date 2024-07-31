const TodoModel = require("../model/Todo.model");

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params; // Use req.params instead of req.body
        if (!id) {
            return res.status(400).json({ message: "id is required" });
        }

        const deletedTodo = await TodoModel.findByIdAndDelete(id);
        
        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json({ message: "Todo deleted successfully", todo: deletedTodo });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = deleteTodo;
