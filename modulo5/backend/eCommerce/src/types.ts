export type labecommerce_users = {
    id:number,
    name:string,
    email:string,
    password:string
}


export let users:labecommerce_users[] = [
    { 
        id:0,
        name:"",
        email:"",
        password:""

    }
   
]

export type labecommerce_products = {
    id:number,
    name:string,
    price:number
    image_url:string
}

export let products:labecommerce_products[] = [
    { 
        id:0,
        name:"",
        price:0.00,
        image_url:""

    }
   
]

export type labecommerce_purchases = {
 id:number,
 user_id:string,
 products_id:string,
 quantity:number,
 total_price:number
}

export let buy:labecommerce_purchases[] = [
    {
        id:0,
        user_id:"",
        products_id:"",
        quantity:0,
        total_price:0,
    }
]