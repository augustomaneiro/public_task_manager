const express = require("express");
require("./db/mongoose.js");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// Middleware function
// app.use((req, res, next) => {
//     res.status(503).send("The server is temporarily under maintainance");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log("Server is up on port " + port);
});