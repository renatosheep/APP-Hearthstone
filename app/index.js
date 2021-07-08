const hero = document.querySelector("#hero");
const item = document.querySelector("#qtd");
let lastSelect = '';
let lastValue = '';
let pageSize = 15;

function lastTypes(last, value){
	lastSelect = last
	lastValue = value
}

function reload(){
	if (lastSelect){
		types(lastSelect, lastValue)
	}
}

function setPageSize(num){
	pageSize = num
}

item.addEventListener('change', function() {     
	setPageSize(this.value)     
	reload() 
})

const types = async (opt, opt2) => {
	lastTypes(opt, opt2)
    document.getElementById("section").innerHTML = ''
    const listaFactions = await fetch(`http://localhost:3000/${opt}/${opt2}?pageSize=${pageSize}`)
    const respostaFactions = await listaFactions.json()
	respostaFactions.map((itemFactions) => {
        if (itemFactions.img) {
            const conteudoFactions = `
								<div class="card">
									<img class="card-img" src='${itemFactions.img}'>
								</div>
							`
            document.getElementById("section").innerHTML += conteudoFactions
        } else{
			const conteudoFactions = `
								<div class="card">
									<div class ="card-img card-img-fake">
									<span class ="name">${itemFactions.name}</span>
									</div>
								</div>
							`
            document.getElementById("section").innerHTML += conteudoFactions
		}
    })
}





