// type para tipar no typescript com camelCase
export class Purchase {
    id: string
    userId: string
    productId: string
    quantity: number
    totalPrice: number

    constructor(id:string, userId:string, productId:string, quantity:number,totalPrice:number){
        this.id = id
        this.userId = userId
        this.productId = productId
        this.quantity = quantity
        this.totalPrice = totalPrice
    }
    getUserPurchases(){
        return this.id
    }
}

// type para tipar no banco de dados com snake_case
export class PurchaseDB  {
    id: string
    user_id: string
    product_id: string
    quantity: number
    total_price: number

    constructor(id:string, user_id:string, product_id:string, quantity:number,total_price:number){
        this.id = id
        this.user_id = user_id
        this.product_id = product_id
        this.quantity = quantity
        this.total_price = total_price
    }
    getUserPurchases(){
        return this.id
    }
}