const express = require('express')
const router = express.Router()

const postTodo = require('../controllers/user.TodoPost.controller')
const getTodos = require('../controllers/user.gettodo.controller')
const deleteTodo = require('../controllers/user.deletetodo.controller')
const updateTodo = require('../controllers/user.updatetodo')

router.post('/posttodo',postTodo)
router.get('/gettodos', getTodos)
router.delete('/deletetodo/:id', deleteTodo)
router.put('/updatetodo/:id', updateTodo)

module.exports = router;
