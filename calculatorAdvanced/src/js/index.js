'use strict';



const inputElm = document.querySelector('.calc__input');
const resultElm = document.querySelector('.calc__result');
let op;



//add button 
const plusBtn = document.getElementById("btn-plus");

plusBtn.addEventListener('click', add);


function add () {
  resultElm.textContent = Number(resultElm.textContent) + Number(inputElm.value);
    inputElm.value = "";
    inputElm.focus();
    op = "+";
}


//clear button 
const clearBtn = document.getElementById("btn-clear");

clearBtn.addEventListener('click', () => {
    inputElm.value = "";
    inputElm.focus();
    resultElm.textContent = "0";
});


//equals button
const equalsBtn = document.getElementById("btn-equals");

equalsBtn.addEventListener('click', () => {
  console.log(op);
  if (op === "+") {
    add();
  } else if (op === "-") {
    substract();
  } else if (op === "*") {
    multiply();
  } else if (op === "/") {
    divide();
  }
});

//substract button
const minusBtn = document.getElementById("btn-minus");
minusBtn.addEventListener('click', substract);

function substract () {
  resultElm.textContent = Number(resultElm.textContent) - Number(inputElm.value);
    inputElm.value = "";
    inputElm.focus();
    op = "-";
}


//multiply button
const timesBtn = document.getElementById('btn-multiply');
timesBtn.addEventListener('click', multiply);


function multiply () {
  if (resultElm.textContent === '0') {
    resultElm.textContent = 1 * Number(inputElm.value);
  } else {
  resultElm.textContent = Number(resultElm.textContent) * Number(inputElm.value);
}
    inputElm.value = "";
    inputElm.focus();
    op = "*";
}


//divide button
const divideBtn = document.getElementById('btn-divide');
divideBtn.addEventListener('click', divide);


function divide () {
  if (resultElm.textContent === '0') {
    resultElm.textContent = 1 * Number(inputElm.value);
  } else {resultElm.textContent = Number(resultElm.textContent) / Number(inputElm.value);}
  
    inputElm.value = "";
    inputElm.focus();
    op = "/";
}


//digits and comma

const zeroElm = document.getElementById('btn-zero');
const oneElm = document.getElementById('btn-one');
const twoElm = document.getElementById('btn-two');
const threeElm = document.getElementById('btn-three');
const fourElm = document.getElementById('btn-four');
const fiveElm = document.getElementById('btn-five');
const sixElm = document.getElementById('btn-six');
const sevenElm = document.getElementById('btn-seven');
const eightElm = document.getElementById('btn-eight');
const nineElm = document.getElementById('btn-nine');
const commaElm = document.getElementById('btn-comma');

zeroElm.addEventListener('click', digitFunc);
oneElm.addEventListener('click', digitFunc);
twoElm.addEventListener('click', digitFunc);
threeElm.addEventListener('click', digitFunc);
fourElm.addEventListener('click', digitFunc);
fiveElm.addEventListener('click', digitFunc);
sixElm.addEventListener('click', digitFunc);
sevenElm.addEventListener('click', digitFunc);
eightElm.addEventListener('click', digitFunc);
nineElm.addEventListener('click', digitFunc);
commaElm.addEventListener('click', digitFunc);

function digitFunc (e) {
  inputElm.value += event.target.textContent;
}

//memory buttons

let memory;

const mClearElm = document.getElementById('m-clear');
const mTotalElm = document.getElementById('memory');
const mMinusElm = document.getElementById('m-minus');
const mPlusElm = document.getElementById('m-plus');

mClearElm.addEventListener('click', () => {
  memory = 0;
  resultElm.textContent = "";
});

mPlusElm.addEventListener('click', () => {
  memory += Number(resultElm.textContent);
  resultElm.textContent = "";
});

mMinusElm.addEventListener('click', () => {
  memory -= Number(result.textContent);
  resultElm.textContent = "";
});

mTotalElm.addEventListener('click', () => {
  resultElm.textContent = memory;
});








