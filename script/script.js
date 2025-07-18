// Puxa as variáveis
const form = document.querySelector("form")
const numbers = document.querySelector("#numbers")
const fromNumber = document.querySelector("#fromNumber")
const toNumber = document.querySelector("#toNumber")

// Botão de NotRepeat
const notRepeat = document.querySelector("#notRepeat")


// Formatação dos numbers
numbers.addEventListener("input", ()=>{
    let numbersFormat = numbers.value.replace(/\D+/g, "")
    numbersFormat = numbersFormat.slice(0 , 3)
    numbers.value = numbersFormat
})
// Formatação do from
fromNumber.addEventListener("input", () => {
    let fromNumbersFormat = fromNumber.value.replace(/\D+/g, "")
    fromNumbersFormat = fromNumbersFormat.slice(0 , 3)
    fromNumber.value = fromNumbersFormat
})
// Formatação do to
toNumber.addEventListener("input", () => {
    let toNumbersFormat = toNumber.value.replace(/\D+/g, "")
    toNumbersFormat = toNumbersFormat.slice(0 , 3)
    toNumber.value = toNumbersFormat
})
// Obtendo a repetição de numbers
notRepeat.addEventListener("click", ()=>{
    const ani = document.querySelector("#ani")
    // console.log(notRepeat.checked)

    if (notRepeat.checked) {
        ani.classList.add("animation-bnt-checked")
        ani.classList.remove("animation-bnt-unchecked")
    } else {
        ani.classList.add("animation-bnt-unchecked")
        ani.classList.remove("animation-bnt-checked")
    }
})

// Evento de submit
form.addEventListener("submit", (event) => {
    // Desabilita o reload da página
    event.preventDefault()
    let valueNumbers = Number(numbers.value)
    let valueToNumber = Number(toNumber.value)
    let valueFromNumber = Number(fromNumber.value)

    let listOfNumbers = []

    for (let i = 0; i < valueNumbers; i++) {
        let random = randomNumber(valueFromNumber, valueToNumber)
        if (notRepeat.checked){
            while (listOfNumbers.includes(random)){
                random = randomNumber(valueFromNumber, valueToNumber)
            }
            listOfNumbers.push(random)
        } else {
            listOfNumbers.push(random)
        }
    }
    console.log(listOfNumbers)

    form.innerHTML = `<div>
                <h2>Resultado do sorteio</h2>
                <p class="p-submit">RESULTADO</p>
            </div>
            <h3 class="h3-submit">${(listOfNumbers.toString()).replace(/\,/g, " ")}</h3>
            <button class="bnt-submit bntNew">Sortear novamente</button>
            `
    const bntNew = document.querySelector(".bntNew")
    bntNew.addEventListener("click", () => {
        window.location.reload();
    })

})

// Função de números aleatórios
function randomNumber (x, y) {
  return Math.floor(Math.random() * (y - x + 1)) + x
}
