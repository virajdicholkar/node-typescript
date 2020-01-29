"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
var timestamps = require('mongoose-timestamp');
const TodoSchema = new mongoose.Schema({
    description: String
}, {
    collection: 'rk_todo'
});
TodoSchema.plugin(timestamps);
const TodoModel = mongoose.model('Todo', TodoSchema);
exports.TodoModel = TodoModel;
//# sourceMappingURL=order.schema.js.map