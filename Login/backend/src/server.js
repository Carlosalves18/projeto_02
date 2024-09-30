import express from "express"
import cors from "cors"
import conn from "./config/conn.js";
import router from "./router/userRouter.js";

const port = 7777;
const app = express()

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/", router)

conn
    .sync()
    .then(() => {
    app.listen(port, () =>{
        console.log(`Disponivel em http://localhost:${port}`)
        })
    })
    .catch((error) => console.log(error))