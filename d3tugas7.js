// soal 1
print3angel = num => {
	for (let i = 1; i <= num; i++) {
		let star = '';
		for (let j = 0; j < i; j++) {
			star += '*';
		}
		console.log(star)
	}
}

// soal 2
printsquere = num => {
	for(let i = 1; i <= num; i++) {
		let star = '';
		for (let j = 0; j < num; j++) {
			star += '*';
		}
		console.log(star);
	}
}

// soal 3
function gradeCheck(nilai) {
	if (nilai >= 65) {
		return "Lulus!";
	} else {
		return "Tidak Lulus";
	}
}

// soal 4
let nilai = [50, 70, 90];
function addArray(number) {

	for (let key of number) {
		nilai.push(key);
	}
	return nilai
}

