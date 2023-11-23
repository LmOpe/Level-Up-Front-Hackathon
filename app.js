document.addEventListener('DOMContentLoaded', () => {

    // Notification display on and off
    const notificationIcon = document.getElementById('notification');
    changeDisplay(notificationIcon, 'notification-dropdown');

    // Dashboard menu display on and off
    const brandChildren = document.getElementById('my-store').children;
    for (const child of brandChildren) {
        changeDisplay(child, 'dashboard');
    }

    // Plan display on and off
    const closeBtns = document.getElementsByClassName('close-btn');
    for (const button of closeBtns) {
        button.addEventListener('click', () => {
            const element = document.getElementById('plan');
            element.style.display = (element.style.display == 'none') ? 'flex' : 'none';
        })

    }


    // Switch Display of Setup guide card on and off
    const closeSetupBtns = document.getElementById('close-setup').children;
    for (const btn of closeSetupBtns) {
        btn.addEventListener('click', (e) => {
            const setupChoice = document.getElementById('setup-guide-choices');
            if (e.target.id == 'close') {
                setupChoice.style.display = 'none';
                e.target.style.display = 'none';
                document.getElementById('open').style.display = 'flex';
            }
            else if (e.target.id == 'open') {
                setupChoice.style.display = 'flex';
                document.getElementById('close').style.display = 'flex'
                e.target.style.display = 'none';
            }
        })
    }

    // Switch display of Onboarding steps on and off
    const choicesCloseElem = document.getElementsByClassName('choice-close');
    const choicesClose = document.getElementsByClassName('choice-close-text');
    const choicesOpen = document.getElementsByClassName('choice-open');

    for (let i = 0; i < choicesClose.length; i++) {
        const choice = choicesClose[i];
        choice.addEventListener('click', () => {
            for (let i = 0; i < choicesOpen.length; i++) {
                choicesOpen[i].style.display = 'none';
            }
            for (let i = 0; i < choicesCloseElem.length; i++) {
                choicesCloseElem[i].style.display = 'flex';
            }
            choicesCloseElem[i].style.display = 'none';
            choicesCloseElem[i].nextElementSibling.style.display = 'flex';
        })
    }

    // Checkbox selection
    const choicesSelects = document.getElementsByClassName('choice-select');

    for (let i = 0; i < choicesSelects.length; i++) {
        const choiceSelect = choicesSelects[i];
        choiceSelect.addEventListener('click', () => {
            const className = choiceSelect.className.split(' ')[1];
            const checkBox = document.getElementsByClassName(className);
            const choiceOpen = document.getElementsByClassName('choice-open');
            const choicesCloseElem = document.getElementsByClassName('choice-close');
            let currentChoiceOpen;
            for (let k = 0; k < choiceOpen.length; k++) {
                if (choiceOpen[k].className.includes(className)) {
                    currentChoiceOpen = choiceOpen[k];
                }
            }
            for (let j = 0; j < checkBox.length; j++) {
                checkBox[j].src = checkBox[j].src == "http://127.0.0.1:3000/assets/Component%2014.svg" ? 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg' : "assets/Component 14.svg"
                checkBox[j].height = '24';
                checkBox[j].width = '24';
            }
            currentChoiceOpen.classList.add('complete');
            currentIndex = Array.from(choiceOpen).indexOf(currentChoiceOpen)
            const choiceArray = Array.from(choiceOpen)

            for (let idx = currentIndex + 1; idx < choiceArray.length; idx++) {
                if (!(choiceArray[idx].className.includes('complete'))) {
                    if (choiceSelect.parentElement.className.includes('select-icon')) {
                        if (choiceSelect.src == 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg') {
                            currentChoiceOpen.style.display = 'none'
                            choicesCloseElem[currentIndex].style.display = 'flex'
                            choiceArray[idx].style.display = 'flex'
                            choicesCloseElem[idx].style.display = 'none'
                            setProgressValue(choiceArray);
                            break;
                        }
                        else if (choiceSelect.src == "http://127.0.0.1:3000/assets/Component%2014.svg") {
                            currentChoiceOpen.classList.remove('complete');
                            setProgressValue(choiceArray);
                        }
                    }
                    else if (choiceSelect.parentElement.className.includes('choice-close-icon')) {
                        if (choiceSelect.src == 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg') {
                            setProgressValue(choiceArray);
                        }
                        else if (choiceSelect.src == "http://127.0.0.1:3000/assets/Component%2014.svg") {
                            currentChoiceOpen.classList.remove('complete');
                            setProgressValue(choiceArray);
                        }
                    }
                }
                else {
                    currentChoiceOpen.classList.remove('complete');
                    setProgressValue(choiceArray);
                }
            }

            Array.from(choiceOpen).slice(currentIndex).forEach(() => {
                if (currentIndex === 4) {
                    if (choiceSelect.parentElement.className.includes('select-icon')) {

                        if (choiceSelect.src == 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg') {
                            currentChoiceOpen.style.display = 'none'
                            choicesCloseElem[currentIndex].style.display = 'flex'
                            let filteredChoice = choiceArray.filter(choice => !(choice.className.includes('complete')))
                            setProgressValue(choiceArray);
                            if (filteredChoice.length > 0) {
                                filteredChoice[0].style.display = 'flex'
                                const name = filteredChoice[0].className.split(' ')[1];
                                const filteredClose = Array.from(choicesCloseElem).filter(closeElem => (closeElem.className.includes(name)))
                                filteredClose[0].style.display = 'none';
                            }
                        }
                        else if (choiceSelect.src == "http://127.0.0.1:3000/assets/Component%2014.svg") {
                            currentChoiceOpen.classList.remove('complete');
                            setProgressValue(choiceArray);
                        }
                    }
                    else if (choiceSelect.parentElement.className.includes('choice-close-icon')) {
                        if (choiceSelect.src == 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg') {
                            setProgressValue(choiceArray);
                        }
                        else if (choiceSelect.src == "http://127.0.0.1:3000/assets/Component%2014.svg") {
                            currentChoiceOpen.classList.remove('complete');
                            setProgressValue(choiceArray);
                        }
                    }
                }
            })
        })
    }
});


function changeDisplay(child, id) {
    child.addEventListener('click', () => {
        const element = document.getElementById(`${id}`);
        element.style.display = (element.style.display == 'flex') ? 'none' : 'flex';
    })
}

const setProgressValue = (choiceArray) => {
    let filteredChoice = choiceArray.filter(choice => (choice.className.includes('complete')))
    let numberOfComplete = filteredChoice.length
    document.getElementById('progress-value').style.width = `${numberOfComplete * 20}%`;
    document.getElementById('num-of-complete').innerHTML = numberOfComplete
}