
type hobby = 'hobby1' | 'hobby2'|'hobby3'|'hobby4'|'hobby5';
interface Users {
    name: string;
    yearOfBirth: number;
    password: string;
    hobby: string;

}

const users: Users = {
    name: 'Olga',
    yearOfBirth: 1983,
    password: '123',
    hobby: 'hobby1'

} 

const UserSchema = joi.object({
    name: joi.string(),
    yearOfBirth: joi.number(),
    password: joi.string(),
    hobby: joi.string()

})


function handleAddSubmit(e: any) {
    e.preventDefault()
    console.log(e.target.children.hobby.value)
    let name = e.target.children.name.value;
    console.log(name)
    let yearOfBirth = e.target.children.yearOfBirth.value;
    console.log(yearOfBirth)
    let password = e.target.children.password.value;
    console.log(password)
    let hobby = e.target.children.hobby.value

    document.getElementById('container').innerHTML +=`<div id=${name}>Name:${name}</div><br>
                                                      <div id=${yearOfBirth}>Year of birth:${yearOfBirth}</div><br>
                                                      <div id=${password}>Password:${password}</div><br>
                                                      <div id=${hobby}>Hobby:${hobby}</div>`

 console.log(UserSchema.validate({name, hobby, yearOfBirth, password}))

}

// type Status = 'single' | 'married'|'divorced'|'widow'|'public acknowledged'|number;

// const UserSchema = joi.object({
//     name: joi.string(),
//     age: joi.number()

// })

// //generics
// type Kids = Array<string>

// //interface
// interface User {
//     name: string;
//     age: number;
//     status: Status,
//     kids: Kids
// }

// const user: User = {
//     name: 'Guy',
//     age: 49,
//     status: 3,
//     kids: ['Shir', 'Bar', "Ahava"]
// }

// console.log(user)

// function handleSubmit(e:any) {
//     try {
//         e.preventDefault();
//         console.log(e.target.children)

//         let name = e.target.children.name.value;
//         let age = e.target.children.age.value;
//         console.dir(name, age)

//         // console.log(name, age);
//         const { value, error } = UserSchema.validate({ name, age })
//         if (error) throw new Error(error)

//         user.name = value.name;
//         user.age = value.age;

//         console.log(user)
//     } catch (e) {
//         console.error(e)
//     }

// }