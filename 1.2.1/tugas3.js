const printSegitiga = 5

if (typeof printSegitiga != 'number') {
    console.log('Data Harus Number!')
} else {

    for (let i = printSegitiga; i > 0; i--) {
        k = ''
        for (j = 1; j <= i; j++){
            k += j
        }
        console.log(k)
        
    }
}