const hero = document.querySelector("#hero");

	const types = async () => {
		document.getElementById("section").innerHTML = ''
		const listaFactions = await fetch('http://localhost:3000/typesHero')
		const respostaFactions = await listaFactions.json()
		respostaFactions.map((itemFactions) => {
			if (itemFactions.img) {
				const conteudoFactions = `
								<div class="card">
									<img class="card-img" src='${itemFactions.img}'>
								</div>
							`
				document.getElementById("section").innerHTML += conteudoFactions
			}
		})
	}

/*const seleciona = document.getElementById('cards')

const selecionar = () => {
    const valor = seleciona.value
    if (valor == 'faction') {
        const opt = 'fations'
        resultado(opt)
        console.log(valor)
    } else if (valor == 'type') {
        const opt = 'types'
        resultado(opt)
        console.log(valor)
    } else if (valor == 'qualities') {
        const opt = 'qualities'
        resultado(opt)
        console.log(valor)
    } else if (valor == 'raca') {
        const opt = 'races'
        resultado(opt)
        console.log(valor)
    }
}

const resultado = async (opt) => {
    document.getElementById("selecionados").innerHTML = ''
    const lista = await fetch(`http://localhost:3000/${opt}`)
    const resposta = await lista.json()
    resposta.map((item) => {
        
        if (item.img) {            
            const conteudo = `
                        <div class="card">
                            <img class="card-img" src='${item.img}'>
                        </div>
                    `
            document.getElementById("selecionados").innerHTML += conteudo
        }
    })
}

selecionar()
*/



