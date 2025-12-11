const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nishant7896545_db_user:Nishant1234kumar@cluster0.ohlk6k2.mongodb.net/todosApp")
const todoSchema = mongoose.Schema({
    title: String,
    desciption: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}