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
