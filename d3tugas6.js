/* Perulangan/looping adalah kondisi mengulang-ulang statement dalam blok yang sama sampai batas yang ditentukan.

- for
for(let i=0; i < 12; i++ ) {
  console.log('Tes')
}

- for in
let sekolah = {
  SD: 'SD 01 Zimbabwe',
  SMP: 'SMP 02 Venuzuela',
  SMA: 'SMA 03 Japan'
};
for (let key in sekolah) {
  console.log(`${key} => ${sekolah[key]}`);
}

- for of
let hobi = ['Futsal', 'Ngeteh', 'Ngememe'];
for (let x of hobi) {
  console.log(x);
}

- while 
let i = 1;
while (i <= 5) {
  console.log(`Tes ${i++}`)
}

- do while
i = 1;
do {
  console.log(`tes ${i++}`)
}
while (i < 10);

*/


// soal 2
function fFor(num) { 
	for (var i = 0; i <= num; i++) {
		console.log(i);
	}
}

// soal 3
function cekGanjilGenap(angka) {
	if (angka%2==0) {
		return "Genap";
	} else {
		return "Ganjil";
	}
}

// soal 4
function deretGanjilGenap(num) {
	
	for (let i = 1; i <= num; i++) {

		if (i%2==0) {
			console.log(`${i} adalah Genap`)
		} else {
			console.log(`${i} adalah Ganjil`)
		}
	}
}

// soal 5
const kegiatan = [
    ['bangun', 5],
    ['bersih-bersih', 7],
    ['Mandi', 8],
    ['sarapan', 8.5],
    ['Belanjar', 9],
]
for (let i = 0; i < kegiatan.length; i++) {
  
  console.log(`Pada pukul ${kegiatan[i][1]} saya ${kegiatan[i][0]} `);
}
