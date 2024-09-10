// array, objetos
let meta = {
    value: 'ler um livro por mês',
    checked: false, 
    log: (info) => {
        console.log(info)
    }
}

meta.value = "não é mais um livro"
meta.log(meta.value)

// fintion // arrow funtion
//const criarMeta = () => {}