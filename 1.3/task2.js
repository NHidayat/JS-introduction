const getMonth = (callback) => {
	setTimeout(() => {
		let error = false;
		let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'October', 'November', 'Desember' ];
		if (!error) {
			callback(null, month)
		} else {
			callback(new Error('Sorry Data Not Found', []))
		}
	}, 500)
}

const showMonth = (err, result) => {
	if (err === null || result !== undefined) {
		let get = result.map(value => value)
		console.log(get)
	} else {
		console.log(err)
	}
}

getMonth(showMonth)