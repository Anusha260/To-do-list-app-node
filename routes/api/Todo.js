const express = require("express");

const router = express.Router();

// these are the controllers
// we will create all of them in the future
const {
    createTodo,
    getTodoById,
    getTodo,
    deleteTodo,
    getAllTodos,
    updateTodo,
} = require("../../middleware/todo");

// params
// it will fetch the value from the url
router.param("todoId", getTodoById);

// to get all the todos
router.get("/todos/", getAllTodos);
/** 
 @api {put} /api/v1/todos  get all todos in this the existing todo by create
 * @apiName createtodo
 * @apiGroup create todotaskbyid
 *
 * @apiSuccess {String} create todo
 * @apiSuccess {String} completionDateTime whatever we given for completionDate
 *  @apiSuccess {Boolean} iscompleted true or false
 * @apiSuccess {String} status pending
 * @apiSuccess {Number} id  taskid
 * 
 * @apisuccess message todo deleted successfully
 * 
 * @apiError String 404 todo not found
; */

// // to get a single todo
router.get("/todo/:todoId/", getTodo);
/** 
 @api {put} /api/v1/todo/:todoId/  create the existing todo by create
 * @apiName geTodo
 * @apiGroup gettodo todotaskbyid
 *
 * @apiSuccess {String} get todo
 * @apiSuccess {String} completionDateTime whatever we given for completionDate
 *  @apiSuccess {Boolean} iscompleted true or false
 * @apiSuccess {String} status pending
 * @apiSuccess {Number} id  taskid
 * 
 * @apisuccess message todo deleted successfully
 * 
 * @apiError String 404 todo not found
; */

// // to create a todo
router.post("/todo/create/", createTodo);
// to delete the todo
/** 
 @api {put} /api/v1/todo/create  create the existing todo by create
 * @apiName createtodo
 * @apiGroup create todotaskbyid
 *
 * @apiSuccess {String} create todo
 * @apiSuccess {String} completionDateTime whatever we given for completionDate
 *  @apiSuccess {Boolean} iscompleted true or false
 * @apiSuccess {String} status pending
 * @apiSuccess {Number} id  taskid
 * 
 * @apisuccess message todo deleted successfully
 * 
 * @apiError String 404 todo not found
; */

// // to update the todo
exports.getTodo = (req, res) => 
    // this is pretty simple because we've already defined a middleware
    // to get a todo from the URL id
    // this req.todo is coming from that middleware
     res.json(req.todo)
;

router.put("/todo/:todoId/update", updateTodo);

// // to delete the todo
// to delete the todo
/** 
 @api {put} /api/v1/todo/:todoId/update  update the existing todo by id
 * @apiName updateTodo
 * @apiGroup update todotaskbyid
 *
 * @apiSuccess {String} update Todo
 * @apiSuccess {String} completionDatetime whatever we given for completionDate
 *  @apiSuccess {Boolean} iscompleted true or false
 * @apiSuccess {String} status pending
 * @apiSuccess {Number} id  taskid
 * 
 * @apisuccess message todo update successfully
 * 
 * @apiError String 404 todo not found
; */
router.delete("/todo/:todoId/delete", deleteTodo);
// to delete the todo
/** 
 @api {put} /api/v1/todo/:todoId/delete  delete the existing todo by id
 * @apiName deletetodo
 * @apiGroup delete todotaskbyid
 *
 * @apiSuccess {String} deleted todo
 * @apiSuccess {String} completionDateTime whatever we given for completionDate
 *  @apiSuccess {Boolean} iscompleted true or false
 * @apiSuccess {String} status pending
 * @apiSuccess {Number} id  taskid
 * 
 * @apisuccess message todo deleted successfully
 * 
 * @apiError String 404 todo not found
; */

// we will export the router to import it in the index.js
module.exports = router;