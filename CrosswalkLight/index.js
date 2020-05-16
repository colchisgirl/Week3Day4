'use strict';


const stoplightElm = document.querySelector('.stop-light-on');
const walklightElm = document.querySelector('.walk-light-off');
const buttonElm = document.querySelector('#wannacross');
const tabloElm = document.querySelector('.tablo');

buttonElm.addEventListener('click', () => {

    buttonElm.disabled = true;

    //three seconds from pressing the button to green light:
    setTimeout(() => {
        stoplightElm.className = 'stop-light-off';
        walklightElm.className = 'walk-light-on';
    }, 3000);


    //five seconds to red light back again
    setTimeout(() => {
        stoplightElm.className = 'stop-light-on';
        walklightElm.className = 'walk-light-off';
    }, 8000);


    //Countdown of three seconds to green light:
    let i = 3;
    tabloElm.textContent = i;

    let countdown = setInterval(() => {

        i--;
        tabloElm.textContent = i;

        if (i < 1) {
            clearInterval(countdown);
        }
    }, 1000);

    //Countdown of five seconds to red light:
    setTimeout(
        () => {
            let i = 5;
            tabloElm.textContent = i;

            let countdown = setInterval(() => {
                i--;
                tabloElm.textContent = i;

                if (i < 1) {
                    clearInterval(countdown);
                }
            }, 1000);
        }

        , 3000)

        buttonElm.disabled = false;
});



