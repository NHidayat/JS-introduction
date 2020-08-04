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

// then catch
cekHariKerja('senin').then((message) => {
	console.log(message);
})
.catch((error) => {
	console.log(error);
});
// then catch adalah fungsi/metode sebuah object promise yag digunakan untuk menangkap data di dalam promise tersebut.
// then => menangkap dan menerima hasil suskes
// cacth => menangkap dan menerima hasil gagal

// ------------------------

// try catch
async function cekTry(day) {	
	try {
		hari = await cekHariKerja(day)
		data = `${hari} adalah hari kerja`
		console.log(data)
	} catch(e) {
		console.log(e);
	}
} 
cekTry('senin')
// try catch merupakan sebuah metode untuk menghandle error. Ini biasanya digunakan untuk menangani error agar proses setelahnya tidak berhenti.
// try => untuk menjalankan perintah yang mungkin bisa saja terjadi error
//  catch => menangkap error pada blok 'try' jika terjadi sebuah kesalahan