let seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    
    if (nilaiAwal > nilaiAkhir || typeof nilaiAwal !== 'number' || typeof nilaiAkhir !== 'number') {
        
        console.log(`Nilai akhir harus lebih besar dari nilai awal`) 
        
    } else if (Array.isArray(dataArray) !== true || dataArray.length < 5 ) {
        
        console.log(`Jumlah data array harus lebih dari 5`)
        
    } else {
        
        let filter = dataArray.filter(data => data > nilaiAwal && data < nilaiAkhir)
        let result = filter.sort(function(a, b){return a-b})
        console.log(result)
    }
    
}

seleksiNilai(5, 20, [2,25,4,14,13,11,17,30,8])
