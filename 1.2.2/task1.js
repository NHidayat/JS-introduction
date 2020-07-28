// 1. Length 
// Method yang berfungsi mengembalikan jumlah data/element sebuah array dan bisa juga mengembalikan jumlah karakter sebuah string.

let animals = ['Kucing', 'Anjing', 'Penyu', 'Hiu', 'Paus']
let name = 'John Doe'
length = name.length
// console.log(length)

// ---------------------

// 2. forEach
// Method perulangan untuk mengembalikan data sebuah array
// animals.forEach(element => console.log(element))

// animals.forEach(function tampil(element, index) {
// 	console.log(`Index ke-${index} = ${element}`);
// });

// ---------------------

// 3. toString
// Mengkonversi data array menjadi string dan dipisahkan oleh tanda koma perdata/element
let toString = animals.toString()
// console.log(toString) 

// ---------------------

// 4. Date
// Mengembalikan tanggal dan waktu beserta zona waktu 
let date = new Date()
let dates = Date()
// console.log(dates)

// ---------------------

// 5. charAt
// Mengembalikan karakter berdasarkan urutan/index yang ditentukan
let teks = "lorem Ipsum"
let charKe = teks.charAt(2)
// console.log(charKe)

// ---------------------

// 6. replace
// mengubah karakter dari string berdasarkan nilai atau string pengganti yang diberi  
let text = "Hello World!"
let text2 = text.replace('World', 'Dunia')
// console.log(text2)

// ---------------------

// 7. search
// Mencari karakter yang ditentukan dan mengembaikan/menampilkan urutan indexnya
let sText = 'Good People'
let sResult = sText.search('People')
// console.log(sResult)

// ---------------------

// 8. abs
// Mengembalikan nilai absolut sebuah angka
let abs1 = Math.abs(22)
let abs2 = Math.abs(-22)
let abs3 = Math.abs(20-5)
let abs4 = Math.abs('Hello')
let abs5 = Math.abs(true)
// console.log(`${abs1} \n${abs2} \n${abs3} \n${abs4} \n${abs5}`)

// ---------------------

// 9. max dan min
// max => mencari angka dengan nilai tertinggi
// min => mencari angka dengan nilai terendah
let maxResult = Math.max(12,9,20)
let minResult = Math.min(12,9,20)
// console.log(`${maxResult} ${minResult}`) 

// ---------------------

// 10. JSON.stringify
// Mengkonversi data object menjadi sebuah string.
let bio = {name: 'John', age: 20, email: 'john@john.com' }
let convert = JSON.stringify(bio)
// console.log(convert)