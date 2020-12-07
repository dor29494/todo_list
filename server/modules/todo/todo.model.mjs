import mongoose from 'mongoose'
const { Schema, model } = mongoose

export const TodoSchema = new Schema({
    task  : { type : String, required : true },
    id   : { type : String, required : true },
    is_done : {type: Boolean, required: true},
}, {timestamps:true});
  
export default model('todo',TodoSchema);