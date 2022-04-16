let bodyBg = document.querySelector('body');
let switchBtn = document.querySelector('#switch');
let switchBG = document.querySelector('label');
let topHeading = document.querySelector('.header-heading');
let bottomHeading = document.querySelector('.bottom-heading');
let topGridText = document.querySelectorAll('.grid-heading');
let bottomGridText = document.querySelectorAll('.grid-bottom-left-text');
let topGridBG = document.querySelectorAll('.grid-item');
let bottomGridBG = document.querySelectorAll('.grid-n-item')

const switchCheck = () => {
    if (!switchBtn.checked) {
        bodyBg.classList.remove('dark-mode');
        switchBG.classList.remove('dark-mode');
        topHeading.classList.remove('dark-mode');
        bottomHeading.classList.remove('dark-mode');
        for (i = 0; i < topGridBG.length; i++) {
            topGridBG[i].classList.remove('dark-mode');
        }
        for (i = 0; i < topGridText.length; i++) {
            topGridText[i].classList.remove('dark-mode');
        }
        for (i = 0; i < bottomGridBG.length; i++) {
            bottomGridBG[i].classList.remove('dark-mode');
        }
        for (i = 0; i < bottomGridText.length; i++) {
            bottomGridText[i].classList.remove('dark-mode');
        }
    }

    if (switchBtn.checked) {
        bodyBg.classList.add('dark-mode');
        switchBG.classList.add('dark-mode');
        topHeading.classList.add('dark-mode');
        bottomHeading.classList.add('dark-mode');
        for (i = 0; i < topGridBG.length; i++) {
            topGridBG[i].classList.add('dark-mode');
        }
        for (i = 0; i < topGridText.length; i++) {
            topGridText[i].classList.add('dark-mode');
        }
        for (i = 0; i < bottomGridBG.length; i++) {
            bottomGridBG[i].classList.add('dark-mode');
        }
        for (i = 0; i < bottomGridText.length; i++) {
            bottomGridText[i].classList.add('dark-mode');
        }
    }


}