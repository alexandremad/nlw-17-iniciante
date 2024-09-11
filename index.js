const { select, input, checkbox } = require('@inquirer/prompts')

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

const listarMetas = async () => {
    const respostas = await checkbox({
        mesage: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e Enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false
    })

    if(respostas.length == 0) {
       console.log("Nenhuma meta selecionada")
       return 
    }


    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        }) 

        meta.checked = true
    })

    console.log('Meta(s) marcadas como concluída(s)')
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
                await listarMetas() 
                break 
            case "sair":
                console.log("Até a proxima")
                return  
        }    
    }
}

start()