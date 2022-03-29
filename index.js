const express = require("express")
const connectDB = require("./config/db");
const todoRoutes = require("./routes/api/Todo")

const app = express();
// connect database
connectDB();
// init Middleware
app.use(express.json({ extended: false }))



app.use('/api/v1', require('./routes/api/users')) // parsing the json body
app.use('/api/v1', require('./routes/api/auth'))

app.use('/api/v1', todoRoutes)
    // app.use('/api/v1', require('./routes/api/'))

const PORT = process.env.PORT || 6000

app.listen(PORT, () => console.log(`server started on post ${PORT}`))