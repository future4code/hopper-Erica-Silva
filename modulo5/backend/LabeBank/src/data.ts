export type Users = {
    id:number,
    name:string,
    cpf:string,
    birthday:string,
    balance:number,
    extract:Extract[]
}

export type Extract ={
    value:number,
    date:string,
    description:string
}

export let users:Users[] = [
    {
        id: 1,
        name: "Alice",
        cpf: "001.528.857-85",
        birthday: "18/03/1993",
        balance:0,
        extract:[{value:0, date:'',description:''}]
    },
    {
        id: 2,
        name: "Bob",
        cpf: "002.852.637-82",
        birthday: "30/07/1965",
        balance:0,
        extract:[{value:0, date:'',description:''}]
    },
    {
        id: 3,
        name: "Coragem",
        cpf: "587.968.247-86",
        birthday: "21/01/1981",
        balance:0,
        extract:[{value:0, date:'',description:''}]
    },
    {
        id: 4,
        name: "Dory",
        cpf: "875.982.748-91",
        birthday: "24/08/1990",
        balance:0,
        extract:[{value:0, date:'',description:''}]
    },
    {
        id: 5,
        name: "Elsa",
        cpf: "875.987.257-86",
        birthday: "20/09/2002",
        balance:0,
        extract:[{value:0, date:'',description:''}]
    },
    {
        id: 6,
        name: "Fred",
        cpf: "974.521.362-21",
        birthday: "10/03/1987",
        balance:0,
        extract:[{value:0, date:'',description:''}]
    }
]