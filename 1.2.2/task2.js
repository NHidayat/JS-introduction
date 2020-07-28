const name = [
'Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella',
'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope']


const searchName = (text, limit, pass) => {

    // let filter =  name.filter(element => element.toLowerCase().indexOf(text.toLowerCase()) !== -1)
    
    filter = name.filter(value => value.toLowerCase().includes(text))
    
    let result = filter.slice(0, limit)

    pass(result)
}

const showName = (e) => e.length > 0 ? console.log(e) : console.log('Data tidak ditemukan') 

searchName('o', 5, showName)
