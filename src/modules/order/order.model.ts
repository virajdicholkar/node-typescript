import * as mongoose from "mongoose";
var timestamps = require('mongoose-timestamp');

const TodoSchema = new mongoose.Schema({
    description: String
}, {
    collection: 'rk_todo'
});
TodoSchema.plugin(timestamps);
const TodoModel = mongoose.model('Todo', TodoSchema);

export { TodoModel }