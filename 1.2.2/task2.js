const name = [
'Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella',
'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope']


const searchName = (text, limit, callback) => {

    // let filter =  name.filter(element => element.toLowerCase().indexOf(text.toLowerCase()) !== -1)
    
    filter = name.filter(value => value.toLowerCase().includes(text.toLowerCase()))
    
    let result = filter.slice(0, limit)

    callback(result)
}

const showName = e => e.length > 0 ? console.log(e) : console.log('Data tidak ditemukan') 

searchName('Al', 4, showName)
