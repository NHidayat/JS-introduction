let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city:"Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}
const name = "Muhammad Nur Hidayat"
const email = "dayaters22@gmail.com"
let hobby = ['Futsal', 'Watching Movies']
data = {...data, name: name, email: email, hobby: hobby }
console.log(data)

const {street, city} = data.address
// console.log(city)