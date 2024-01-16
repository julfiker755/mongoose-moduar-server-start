interface IUSER{
    id:string,
    role:'student',
    password:string,
    name:{
        fastname:string,
        middlename:string,
        lastname:string
    },
    dateofbrith?:string,
    gerder:'male' | 'female',
    email?:string,
    contactnumber:string,
    
}

export default IUSER