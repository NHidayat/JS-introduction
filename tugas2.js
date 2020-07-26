const mtk = 90
const bahasaIndonesia = 100
const bahasaInggris = 89
const ipa = 90

if (typeof mtk != 'number' || typeof bahasaIndonesia != 'number' || typeof bahasaInggris != 'number' || typeof ipa != 'number' ) {

    console.log('Wajib Mengisi Semua Nilai Dengan Angka!')
    
} else {
    
    let rata = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4
    
    rata >= 90 && rata <= 100 ?
    console.log(`Nilai = ${rata} \nGrade = A`):
    
    rata >= 80 && rata <= 89 ?
    console.log(`Nilai = ${rata} \nGrade = B`):
    
    rata >= 70 && rata <= 79 ?
    console.log(`Nilai = ${rata} \nGrade = C`):
    
    rata >= 60 && rata <= 69 ?
    console.log(`Nilai = ${rata} \nGrade = D`):
    
    console.log(`Nilai = ${rata} \nGrade = E`)
    
    
}

