require ('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const DisplayRouter = require("./routes/DisplayRouter")
app.use('/Display', DisplayRouter)

app.listen(8080, () => console.log('Server Started'))