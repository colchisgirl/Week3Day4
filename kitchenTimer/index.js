'use strict';



const btn = document.getElementById('btn');



const countDown = () => {



    const minsElm = document.getElementById('minutes').value;
    const secsElm = document.getElementById('seconds').value;
    if (isNaN(minsElm) || isNaN(secsElm)) {
        btn.textContent = 'you fucking dickity donkey';
        return;
    }

    btn.disabled = true;

    let i = Number(minsElm) * 60 + Number(secsElm);
    setBtnText(btn, i);

    const countdown = setInterval(() => {
        if (i > 0) {
            i--;
            setBtnText(btn, i);
        } else {
            clearInterval(countdown);
            btn.disabled = false;
        }
    }, 1000);

}




btn.addEventListener('click', countDown);


const setBtnText = (btn, seconds) => {
    btn.textContent = `Your cookery will be ready in ${seconds} seconds!`;
}