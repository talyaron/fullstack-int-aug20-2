var users = {
    name: 'Olga',
    yearOfBirth: 1983,
    password: '123',
    hobby: 'hobby1'
};
function handleAddSubmit(e) {
    e.preventDefault();
    console.log(e.target.children.hobby.value);
    var name = e.target.children.name.value;
    console.log(name);
    var yearOfBirth = e.target.children.yearOfBirth.value;
    console.log(yearOfBirth);
    var password = e.target.children.password.value;
    console.log(password);
    var hobby = e.target.children.hobby.value;
    document.getElementById('container').innerHTML += "<div id=" + name + ">Name:" + name + "</div><br>\n                                                      <div id=" + yearOfBirth + ">Year of birth:" + yearOfBirth + "</div><br>\n                                                      <div id=" + password + ">Password:" + password + "</div><br>\n                                                      <div id=" + hobby + ">Hobby:" + hobby + "</div>";
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
