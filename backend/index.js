const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://mongo:27017/todos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const TodoSchema = new mongoose.Schema({
  text: String,
  done: Boolean,
});

const Todo = mongoose.model('Todo', TodoSchema);

app.use(cors());
app.use(express.json());

// GET all todos
app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST a new todo
app.post('/todos', async (req, res) => {
  const { text, done } = req.body;
  const newTodo = new Todo({ text, done });
  await newTodo.save();
  res.status(201).json(newTodo);
});

// DELETE a todo
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
