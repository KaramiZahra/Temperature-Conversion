let input = document.querySelector('.input')
let convert = document.querySelector('.convert')
let result = document.querySelector('.result')
let reset = document.querySelector('.reset')
let change = document.querySelector('.change')
let celsiusDefault = document.querySelector('.celsius')
let fahrenheitDefault = document.querySelector('.fahrenheit')

convert.addEventListener('click', function () {
    let inputValue = input.value
    input.value = ''

    if (isNaN(inputValue) || inputValue === ' ') {
        result.innerHTML = 'Enter correct value!'
    } else {
        if (celsiusDefault.innerHTML === '°C') {
            let resultValue = (inputValue * (9 / 5)) + 32
            result.innerHTML = inputValue + ' °C is ' + resultValue + ' °F'
            result.style.display = 'block'
        } else {
            let resultValue = (inputValue - 32) * (5 / 9)
            result.innerHTML = inputValue + ' °F is ' + resultValue.toFixed(2) + ' °C'
            result.style.display = 'block'
        }
    }
})

reset.addEventListener('click', function () {
    input.value = ''
    result.style.display = 'none'
})

change.addEventListener('click', function () {
    if (celsiusDefault.innerHTML === '°C') {
        celsiusDefault.innerHTML = '°F'
        fahrenheitDefault.innerHTML = '°C'
        input.setAttribute('placeholder', '°F')
    } else {
        celsiusDefault.innerHTML = '°C'
        fahrenheitDefault.innerHTML = '°F'
        input.setAttribute('placeholder', '°C')

    }
})