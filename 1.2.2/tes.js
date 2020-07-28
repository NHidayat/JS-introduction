// var data = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
// ];


// const newData = data.map( 
//     (value) => ({fullname: value.firstname + ' ' + value.lastname }) 
//     ) 

//     console.log(newData)


const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

// const filterItems = (arr, query) => {
//   return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
// }

// console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']

// metod 2

const myName = fruits.filter(value => value.toLowerCase().includes('ng'));

console.log(myName)