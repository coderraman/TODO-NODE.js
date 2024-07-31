const TodoModel = require("../model/Todo.model");

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { user_data } = req.body;
        
        if (!id) {
            return res.status(400).json({ message: "id is required" });
        }
        
        if (!user_data) {
            return res.status(400).json({ message: "user_data is required" });
        }

        const updatedTodo = await TodoModel.findByIdAndUpdate(
            id, 
            { user_data },
            { new: true, runValidators: true }
        );
        
        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json({ message: "Todo updated successfully", todo: updatedTodo });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = updateTodo;
