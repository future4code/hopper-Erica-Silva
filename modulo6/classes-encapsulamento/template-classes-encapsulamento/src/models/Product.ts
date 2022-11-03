import { getProducts } from "../endpoints/getProducts"

export class Product {
    public id: string
    public name: string
    public price: number

    constructor(id:string, name:string, price:number){
        this.id =id
        this.name = name
        this.price = price

    }
    getProducts(){
        return this.id
    }
}

const product = new Product(Date.now().toString(),'camisa', 25.5)
console.log(product)

