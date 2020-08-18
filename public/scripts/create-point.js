function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        
        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

// Itens de coleta
// Pegar todos os Li's
const itensToCollect = document.querySelectorAll(".itens-grid li")

for (let item of itensToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=itens")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // add ou remove classe com javascript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // console.log("ITEM ID: ",itemId)
    
    // verificar se existem itens selecionados, se sim, pegar os itens selecionados
    // pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId // isso será true ou false
        return itemFound
    })

    // se já estiver selecionado,

    if(alreadySelected >= 0) {
        //tirar da selecao
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        // se nao estiver selecionado, adcionar a selecao
        // adicionar a selecao
        selectedItems.push(itemId)
    }

    // console.log("selectedItems: ", selectedItems)

    // atualizar o campo escondido com os itens selecionados 

    collectedItems.value = selectedItems
}