'use strict';


let result = 0;
const resultElm = document.getElementById('result');
resultElm.textContent = result;


const addition = () => {
    const inputElm = document.getElementById('input');

    let input = Number(inputElm.value);

    if(NaN(input)) {
        inputElm.value = 0;
        return;
    }

    result += input;
    inputElm.value = 0;
    inputElm.focus();
    resultElm.textContent = result;

}









