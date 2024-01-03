const express = require("express")
const app = express()

app.use(express.json())

app.post("/todo", async function(req,res) {
    const createPayLoad = req.body
    const parsedpayLoad = createTodo.safeParse(createPayLoad)
    if(!parsedpayLoad.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return
    } 
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req, res) {
    const todos = await todo.find({})
})

app.put("/completed", async function(req, res) {
    const updatePayLoad = req.body
    const parsedpayLoad = updateTodo.safeParse(updatePayLoad)
    if(!parsedpayLoad.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return
    } 
    await todo.update({
        _id: req.body.id
    },{
        completed: True
    })
})