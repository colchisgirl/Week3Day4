'use strict';


const stoplightElm = document.querySelector('.stop-light-on');
const walklightElm = document.querySelector('.walk-light-off');
const buttonElm = document.querySelector('#wannacross');

buttonElm.addEventListener('click', () => {
    stoplightElm.className = 'stop-light-off';
    walklightElm.className = 'walk-light-on';

    setTimeout(() => {
        stoplightElm.className = 'stop-light-on';
        walklightElm.className = 'walk-light-off';
    }, 5000);
});



