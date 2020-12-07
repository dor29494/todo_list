import log from '@ajar/marker'
import todo_model from "./todo.model.mjs"

export const create_todo = async (req, res) => {
    log.obj(req.body, "create a todo, req.body:");
    let todo = await todo_model.create(req.body);
    res.status(200).json(todo);
}
// get - api/todos/
export const get_all_todos = async (req, res) => {
    const todos = await todo_model.find();
    res.status(200).json(todos);
}
// put api/todos/:id
export const update_todo = async (req, res) => {
    const [todo] = await todo_model.find({id: req.params.id});
    todo.is_done = !todo.is_done
    await todo.save()
    res.status(200).json(todo);
}
// update task 
export const edit_todo = async (req, res) => {
    const [todo] = await todo_model.find({id: req.params.id});
    console.log(req.body)
    todo.task = req.body.task
    await todo.save()
    res.status(200).json(todo);
}
// delete - /api/todos/:id
export const delete_todo = async (req, res) => {
    const [todo] = await todo_model.find({id: req.params.id})
    await todo.remove();
    res.status(200).send("the Todo is deleted!!!");
} 
