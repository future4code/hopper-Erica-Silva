import { app } from "./app";
import { getAllUsers } from "./endpoints/exercicio1/exercicio1A";
import { getAllType } from "./endpoints/exercicio1/exercicio1B";
import { getAllOrder } from "./endpoints/exercicio2/exer2";
import { getLimitUser } from "./endpoints/exercicio3/exercicio3";

app.get("/users",getAllUsers)
app.get("/users/type",getAllType)
app.get("/users/order",getAllOrder)
app.get("/users/limit",getLimitUser)



