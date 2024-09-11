const { select, input } = require('@inquirer/prompts')

let meta = {
    value: 'ler um livro por mês',
    checked: true, 
}

let metas = [ meta ]


const cadastrarMeta = async () => {
    const meta = await input({mensage: "Didgite a meta:"})

    if(meta.length == 0) {
        console.log('A meta não pode ser vazia.')
        return
    }

    metas.push(
        { value: meta, checked: false }
    )

} 

const start = async () => {
    
    while(true){
      
        const opcao = await select({
            mensage: "Menu >",
            choices:[
                {
                  name: "Cadastrar meta",
                  value: "cadastrar"  
                },
                {
                    name: "Listar metas",
                    value: "listar"    
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })


        switch(opcao){
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                console.log("vamos listar") 
                break 
            case "sair":
                console.log("Até a proxima")
                return  
        }    
    }
}

start()