const cekHariKerja = (day) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dataDay = ['senin', 'selasa' ,'rabu', 'kamis' ,'jumat']
			let cek = dataDay.find((item) => {
				return item === day
			})
			if(cek) {
				resolve(cek)
			} else {
				reject(new Error('Hari ini bukan hari kerja'))
			}
		}, 3000)
	})
}

// ------------------------

let day = 'senin'

// then catch
cekHariKerja(day).then((message) => {
	console.log(message);
})
.catch((error) => {
	console.log(error);
});

// ------------------------

// try ctach
async function cekTry() {	
	try {
		hari = await cekHariKerja(day)
		data = `${hari} adalah hari kerja`
		console.log(data)
	} catch(e) {
		console.log(e);
	}
} 
cekTry()