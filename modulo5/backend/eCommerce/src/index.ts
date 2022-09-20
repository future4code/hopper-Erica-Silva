import {getAllUser }from "./getAllUser"
import{postUser} from "./postUser"
import{postAllProducts} from "./postAllProducts"
import { app } from "./app"
import { getAllProducts } from "./getAllProducts"



app.get("/users",getAllUser)
app.post("/users",postUser)
app.post("/products",postAllProducts)
app.get("/products",getAllProducts)