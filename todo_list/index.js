const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swDoc = require("./swagger.json");


const app = express();

const tasks = [
    {
        id: 1,
        title: "task 1",
        done:false
    },
    {
        id: 2,
        title: "task 2",
        done:false
    }
];

app.use(express.json());

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swDoc));

app.get("/tasks", (req, res)=>{
    
    res.send(tasks);
})

app.get("/tasks/:id", (req, res)=> {
    const id = +req.params.id;
    const task = tasks.find(t => t.id === id);
    if(!task) res.sendStatus(404);
    else res.send(task);
})

app.post("/tasks", (req, res)=>{
    const task = req.body;
    // TODO:
    // 1. validate task (properties title and done are not undefined)
    // 2. if not valid, respond with adequate error status
    if(!task.title || task.done === undefined) res.sendStatus(400)
    else {
        task.id = Math.max(...tasks.map(t=>t.id)) + 1;
        tasks.push(task);
        res.sendStatus(201);
    }
})

// update:
// find existing task by body.id, then task.title = body.title; task.done = body.done
app.put("/tasks", (req, res)=>{
    const task = req.body;
    if(!task.title || task.done === undefined) res.sendStatus(400)
    else {
        const existing = tasks.find(t=>t.id===task.id);
        if(!existing) res.sendStatus(401)
        else {
            existing.title = task.title
            existing.done = task.done
            res.sendStatus(200)
        }
    }
})

// delete:
// find existing task by body.id, then remove it.
app.delete("/tasks/:id", (req, res)=>{
    const id = +req.params.id;
    const task = tasks.find(t => t.id === id);
    if(!task) res.sendStatus(404);
    else {
        tasks.splice(tasks.findIndex(t=>t.id===id),1)
        res.send(task);
    }
})

app.listen(7777);