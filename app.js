'use strict'
const contList = document.querySelector("#cont-list")
const UlLIST = document.createElement("ul")

const GI = {
    createElement(tag, atributes) {
        return document.createElement(tag)
    }
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]


function changeItem(event) {
    const contLI = event.parentElement
    if (event.checked === false) {
        contLI.className = ""
    }
    contLI.classList.add("decorar")
}

to_do.map((value) => {
    const elementItemString = document.createElement("li")
    elementItemString.innerHTML = `
       ${value}   <input type="checkbox" onClick="changeItem(this)" />
    `
    UlLIST.appendChild(elementItemString)
})

contList.appendChild(UlLIST)


