import MathArray from './MathArray.js'

const elements = {
    input: document.querySelector('.main_input'),
    btn1: document.querySelector('.btn1'),
    btn2: document.querySelector('.btn2'),
    btn3: document.querySelector('.btn3'),
    btn4: document.querySelector('.btn4'),
    btn5: document.querySelector('.btn5'),
    rst1: document.querySelector('.rst1'),
    rst2: document.querySelector('.rst2'),
    rst3: document.querySelector('.rst3'),
    rst4: document.querySelector('.rst4'),
    rst5: document.querySelector('.rst5')
}

function getInput() {
    let input = elements.input.value.split(",")
    input = input.map(el => el * 1);
    input = input.some(el=>isNaN(el)) == true ? "error" : input
    return input
}

elements.btn1.addEventListener('click', e => {
    let result = getInput() == "error" ? "error" : (new MathArray(getInput())).sumOfElements();
    console.log(result)
    elements.rst1.value = result
})

elements.btn2.addEventListener('click', e => {
    let result = getInput() == "error" ? "error" : (new MathArray(getInput())).averageOfElements();
    console.log(result)
    elements.rst2.value = result
})

elements.btn3.addEventListener('click', e => {
    let result = getInput() == "error" ? "error" : (new MathArray(getInput())).evenElements();
    console.log(result)
    elements.rst3.value = result
})

elements.btn4.addEventListener('click', e => {
    let result = getInput() == "error" ? "error" : (new MathArray(getInput())).overThenTenElements();
    console.log(result)
    elements.rst4.value = result
})

elements.btn5.addEventListener('click', e => {
    let result = getInput() == "error" ? "error" : (new MathArray(getInput())).arrayToStr();
    console.log(result)
    elements.rst5.value = result
})