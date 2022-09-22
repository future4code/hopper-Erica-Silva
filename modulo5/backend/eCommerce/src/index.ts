import {getAllUser }from "./getAllUser"
import{postUser} from "./postUser"
import{postAllProducts} from "./postAllProducts"
import { app } from "./app"
import { getAllProducts } from "./getAllProducts"
import { postBuy } from "./postBuy"
import { getBuy } from "./getBuy"



app.get("/users",getAllUser)
app.post("/users",postUser)
app.post("/products",postAllProducts)
app.get("/products",getAllProducts)
app.post("/purchases",postBuy)
app.get("/users/:user_id/purchases",getBuy)