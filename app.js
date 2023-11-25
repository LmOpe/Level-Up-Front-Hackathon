// document.addEventListener('DOMContentLoaded', () => {

//     // Notification display on and off
//     const notificationIcon = document.getElementById('notification');
//     changeDisplay(notificationIcon, 'notification-dropdown');

//     // Dashboard menu display on and off
//     const brandChildren = document.getElementById('my-store-btn').children;
//     for (const child of brandChildren) {
//         changeDisplay(child, 'dashboard-menu');
//     }

//     // Plan display on and off
//     const closeBtns = document.getElementsByClassName('close-btn');
//     for (const button of closeBtns) {
//         button.addEventListener('click', () => {
//             const element = document.getElementById('plan');
//             element.style.display = (element.style.display == 'none') ? 'flex' : 'none';
//         })

//     }


//     // Switch Display of Setup guide card on and off
//     const closeSetupBtns = document.getElementById('close-setup').children;
//     for (const btn of closeSetupBtns) {
//         btn.addEventListener('click', (e) => {
//             const setupChoice = document.getElementById('setup-guide-choices');
//             if (e.target.id == 'close') {
//                 setupChoice.style.display = 'none';
//                 e.target.style.display = 'none';
//                 document.getElementById('open').style.display = 'flex';
//             }
//             else if (e.target.id == 'open') {
//                 setupChoice.style.display = 'flex';
//                 document.getElementById('close').style.display = 'flex'
//                 e.target.style.display = 'none';
//             }
//         })
//     }

//     // Switch display of Onboarding steps on and off
//     const choicesCloseElem = document.getElementsByClassName('choice-close');
//     const choicesClose = document.getElementsByClassName('choice-close-text');
//     const choicesOpen = document.getElementsByClassName('choice-open');

//     for (let i = 0; i < choicesClose.length; i++) {
//         const choice = choicesClose[i];
//         choice.addEventListener('click', () => {
//             for (let i = 0; i < choicesOpen.length; i++) {
//                 choicesOpen[i].style.display = 'none';
//             }
//             for (let i = 0; i < choicesCloseElem.length; i++) {
//                 choicesCloseElem[i].style.display = 'flex';
//             }
//             choicesCloseElem[i].style.display = 'none';
//             choicesCloseElem[i].nextElementSibling.style.display = 'flex';
//         })
//     }

//     // Checkbox selection
//     const choicesSelects = document.getElementsByClassName('choice-select');

//     for (let i = 0; i < choicesSelects.length; i++) {
//         const choiceSelect = choicesSelects[i];
//         choiceSelect.addEventListener('click', () => {
//             const className = choiceSelect.className.split(' ')[1];
//             const checkBox = document.getElementsByClassName(className);
//             const choiceOpen = document.getElementsByClassName('choice-open');
//             const choicesCloseElem = document.getElementsByClassName('choice-close');
//             let currentChoiceOpen;
//             for (let k = 0; k < choiceOpen.length; k++) {
//                 if (choiceOpen[k].className.includes(className)) {
//                     currentChoiceOpen = choiceOpen[k];
//                 }
//             }
//             for (let j = 0; j < checkBox.length; j++) {
//                 checkBox[j].src = checkBox[j].src == "http://127.0.0.1:3000/assets/Component%2014.svg" ? 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg' : "assets/Component 14.svg"
//                 checkBox[j].height = '24';
//                 checkBox[j].width = '24';
//             }
//             currentChoiceOpen.classList.add('complete');
//             currentIndex = Array.from(choiceOpen).indexOf(currentChoiceOpen)
//             const choiceArray = Array.from(choiceOpen)

//             for (let idx = currentIndex + 1; idx < choiceArray.length; idx++) {
//                 if (!(choiceArray[idx].className.includes('complete'))) {
//                     if (choiceSelect.parentElement.className.includes('select-icon')) {
//                         if (choiceSelect.src == 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg') {
//                             currentChoiceOpen.style.display = 'none'
//                             choicesCloseElem[currentIndex].style.display = 'flex'
//                             choiceArray[idx].style.display = 'flex'
//                             choicesCloseElem[idx].style.display = 'none'
//                             setProgressValue(choiceArray);
//                             break;
//                         }
//                         else if (choiceSelect.src == "http://127.0.0.1:3000/assets/Component%2014.svg") {
//                             currentChoiceOpen.classList.remove('complete');
//                             setProgressValue(choiceArray);
//                         }
//                     }
//                     else if (choiceSelect.parentElement.className.includes('choice-close-icon')) {
//                         if (choiceSelect.src == 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg') {
//                             setProgressValue(choiceArray);
//                         }
//                         else if (choiceSelect.src == "http://127.0.0.1:3000/assets/Component%2014.svg") {
//                             currentChoiceOpen.classList.remove('complete');
//                             setProgressValue(choiceArray);
//                         }
//                     }
//                 }
//                 else {
//                     currentChoiceOpen.classList.remove('complete');
//                     setProgressValue(choiceArray);
//                 }
//             }

//             Array.from(choiceOpen).slice(currentIndex).forEach(() => {
//                 if (currentIndex === 4) {
//                     if (choiceSelect.parentElement.className.includes('select-icon')) {

//                         if (choiceSelect.src == 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg') {
//                             currentChoiceOpen.style.display = 'none'
//                             choicesCloseElem[currentIndex].style.display = 'flex'
//                             let filteredChoice = choiceArray.filter(choice => !(choice.className.includes('complete')))
//                             setProgressValue(choiceArray);
//                             if (filteredChoice.length > 0) {
//                                 filteredChoice[0].style.display = 'flex'
//                                 const name = filteredChoice[0].className.split(' ')[1];
//                                 const filteredClose = Array.from(choicesCloseElem).filter(closeElem => (closeElem.className.includes(name)))
//                                 filteredClose[0].style.display = 'none';
//                             }
//                         }
//                         else if (choiceSelect.src == "http://127.0.0.1:3000/assets/Component%2014.svg") {
//                             currentChoiceOpen.classList.remove('complete');
//                             setProgressValue(choiceArray);
//                         }
//                     }
//                     else if (choiceSelect.parentElement.className.includes('choice-close-icon')) {
//                         if (choiceSelect.src == 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg') {
//                             setProgressValue(choiceArray);
//                         }
//                         else if (choiceSelect.src == "http://127.0.0.1:3000/assets/Component%2014.svg") {
//                             currentChoiceOpen.classList.remove('complete');
//                             setProgressValue(choiceArray);
//                         }
//                     }
//                 }
//             })
//         })
//     }
// });


// function changeDisplay(child, id) {
//     child.addEventListener('click', () => {
//         const element = document.getElementById(`${id}`);
//         element.style.display = (element.style.display == 'flex') ? 'none' : 'flex';
//     })
// }

// const setProgressValue = (choiceArray) => {
//     let filteredChoice = choiceArray.filter(choice => (choice.className.includes('complete')))
//     let numberOfComplete = filteredChoice.length
//     document.getElementById('progress-value').style.width = `${numberOfComplete * 20}%`;
//     document.getElementById('num-of-complete').innerHTML = numberOfComplete
// }

function app() {
    const notificationIcon = document.querySelector('#notification');
    const notificationDropdown = document.querySelector('#notification-dropdown');
    const alertIcons = notificationDropdown.querySelectorAll('button');
    const brandLogo = document.querySelector('#my-store-btn')
    const dashboardMenu = document.querySelector('#dashboard-menu');
    const menuItems = dashboardMenu.querySelectorAll('[role="menuitem"]');
    const dismissButtons = document.querySelectorAll('.close-btn');
    const callOutTrial = document.querySelector('#plan');
    const card = document.querySelector('#card');
    const setupGuideChoices = document.querySelector('#setup-guide-choices');
    const arrowUp = document.querySelector('#close');
    const arrowDown = document.querySelector('#open');
    const closeSetupBtn = document.querySelector('#close-setup');
    const choiceCloseTextButtons = document.querySelectorAll('.choice-close-text');
    const choiceCloseButtons = document.querySelectorAll('.choice-close');
    const choiceOpenCards = document.querySelectorAll('.setup-guide-choices li .choice-open');
    const checkBoxButtonsOpen = document.querySelectorAll('.select-icon');
    const checkBoxButtonsClose = document.querySelectorAll('.choice-close-icon');
    const progressBarValue = document.querySelector('#progress-value');
    const amountCompleted = document.querySelector('#num-of-complete');


    function closeAllCardsOpenAllButtons() {
        choiceOpenCards.forEach(choice => {
            choice.style.display = 'none';
        })
        choiceCloseButtons.forEach(choice => {
            choice.style.display = 'flex';
        })
        function toggleStepComplete(value) {
            checkBox.firstElementChild.src = 'http://127.0.0.1:3000/assets/Component%2014.svg';
            checkBoxButtonsOpen.item(checkBoxIndex).firstElementChild.src = 'http://127.0.0.1:3000/assets/Component%2014.svg';
            openParent.dataset.complete = 'false';
            closeParent.dataset.complete = 'false';
        }
    }
    function handleCheckBoxCloseClick(checkBox, checkBoxIndex) {
        const openParent = checkBoxButtonsOpen.item(checkBoxIndex).parentElement.parentElement;
        const closeParent = checkBox.parentElement.parentElement;
        const isCompleted = closeParent.dataset.complete === 'true';
        const filteredChoice = Array.from(choiceOpenCards).slice(checkBoxIndex + 1).
            filter(choice => choice.dataset.complete === 'false');
        const isLastCheckBox = filteredChoice.length === 0;

        if (isCompleted) {
            openParent.dataset.complete = 'false';
            closeParent.dataset.complete = 'false';
            checkBox.firstElementChild.src = 'http://127.0.0.1:3000/assets/Component%2014.svg';
            checkBoxButtonsOpen.item(checkBoxIndex).firstElementChild.src = 'http://127.0.0.1:3000/assets/Component%2014.svg';
        }
        else {
            openParent.dataset.complete = 'true';
            closeParent.dataset.complete = 'true';
            checkBox.firstElementChild.src = 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg';
            checkBoxButtonsOpen.item(checkBoxIndex).firstElementChild.src = 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg';


            if (isLastCheckBox) {
                allIncompletes = Array.from(choiceOpenCards)
                    .filter(choice => choice.dataset.complete === 'false');
                if (allIncompletes.length === 0) {
                    closeAllCardsOpenAllButtons();
                }
                else {
                    closeAllCardsOpenAllButtons();
                    const firstUnCompletedChoice = allIncompletes[0];
                    firstUnCompletedChoice.style.display = 'flex';
                    choiceCloseButtons.forEach(choiceClose => {
                        if (firstUnCompletedChoice.className.split(' ')[2] === choiceClose.className.split(' ')[2]) {
                            choiceClose.style.display = 'none';
                        }
                    })
                }
            }
            else {
                closeAllCardsOpenAllButtons();

                const unCompletedChoices = filteredChoice;
                unCompletedChoices[0].style.display = 'flex';
                choiceCloseButtons.forEach(choiceClose => {
                    if (unCompletedChoices[0].className.split(' ')[2] === choiceClose.className.split(' ')[2]) {
                        choiceClose.style.display = 'none';
                    }
                })

            }
        }
        setProgressValue();
    }
    checkBoxButtonsClose.forEach((checkBox, checkBoxIndex) => {
        checkBox.addEventListener('click', () => {
            handleCheckBoxCloseClick(checkBox, checkBoxIndex);
        })
    })

    // Handling steps in onboarding implementation for the 
    // Opened card, i.e Choice Open
    function handleLastChoiceOpenBtn(checkBoxIndex) {
        allIncompletes = Array.from(choiceOpenCards).filter(choice => choice.dataset.complete === 'false');
        if (allIncompletes.length === 0) {
            choiceOpenCards.item(checkBoxIndex).style.display = 'none';
            choiceCloseButtons.item(checkBoxIndex).style.display = 'flex';
            return;
        }
        allIncompletes[0].style.display = 'flex';
        choiceOpenCards.item(checkBoxIndex).style.display = 'none';
        choiceCloseButtons.item(checkBoxIndex).style.display = 'flex';
        choiceCloseButtons.forEach(choiceClose => {
            if (allIncompletes[0].className.split(' ')[2] === choiceClose.className.split(' ')[2]) {
                choiceClose.style.display = 'none';
            }
        })
    }
    // Handle checkbox click
    function handleCheckBoxClick(checkBox, checkBoxIndex) {
        const parent = checkBox.parentElement.parentElement;
        const closeParent = checkBoxButtonsClose.item(checkBoxIndex).parentElement.parentElement;
        const isCompleted = parent.dataset.complete === 'true';
        const filteredChoice = Array.from(choiceOpenCards).slice(checkBoxIndex + 1).
            filter(choice => choice.dataset.complete === 'false');
        const isLastCheckBox = filteredChoice.length === 0;

        if (isCompleted) {
            parent.dataset.complete = 'false';
            closeParent.dataset.complete = 'false';
            checkBox.firstElementChild.src = 'http://127.0.0.1:3000/assets/Component%2014.svg';
            checkBoxButtonsClose.item(checkBoxIndex).firstElementChild.src = 'http://127.0.0.1:3000/assets/Component%2014.svg';

        }
        else {
            parent.dataset.complete = 'true';
            closeParent.dataset.complete = 'true';
            checkBox.firstElementChild.src = 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg';
            checkBoxButtonsClose.item(checkBoxIndex).firstElementChild.src = 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg';


            // Handle Edge case of The last checkbox
            if (isLastCheckBox) {
                handleLastChoiceOpenBtn(checkBoxIndex);
            }
            else {
                const unCompletedChoices = filteredChoice;
                unCompletedChoices[0].style.display = 'flex';
                choiceOpenCards.item(checkBoxIndex).style.display = 'none';
                choiceCloseButtons.item(checkBoxIndex).style.display = 'flex';
                choiceCloseButtons.forEach(choiceClose => {
                    if (unCompletedChoices[0].className.split(' ')[2] === choiceClose.className.split(' ')[2]) {
                        choiceClose.style.display = 'none';
                    }
                })
            }

        }

        setProgressValue();
    }
    checkBoxButtonsOpen.forEach((checkBox, checkBoxIndex) => {
        checkBox.addEventListener('click', () => {
            handleCheckBoxClick(checkBox, checkBoxIndex);
        })
    })
    function setProgressValue() {
        // Set the progress value correctly and display the accurate
        // number of completion
        const numberOfCompleted = Array.from(choiceOpenCards)
            .filter(choice => choice.dataset.complete === 'true').length;
        progressBarValue.style.width = `${numberOfCompleted * 20}%`;
        amountCompleted.innerHTML = numberOfCompleted;
    }

    // Handle Choice close button click
    function handleChoiceClick(choiceIndex) {
        choiceOpenCards.forEach(choiceOpen => {
            if (!(Array.from(choiceOpenCards).indexOf(choiceOpen) === choiceIndex)) {
                choiceOpen.style.display = 'none';
            }
            else {
                choiceOpen.style.display = 'flex';
            }
        })
        choiceCloseButtons.forEach(choice => {
            if (!(Array.from(choiceCloseButtons).indexOf(choice) === choiceIndex)) {
                choice.style.display = 'flex';
            }
            else {
                choice.style.display = 'none';
            }
        })
    }
    choiceCloseTextButtons.forEach((choice, choiceIndex) => {
        choice.addEventListener('click', function () {
            handleChoiceClick(choiceIndex);
        })
    })

    // Handle Close Setup Button click to toggle Card
    function toggleCard(arrowDownClass, arrowUpClass) {
        arrowUp.classList.toggle(arrowUpClass);
        arrowDown.classList.toggle(arrowDownClass);
        setupGuideChoices.classList.toggle(arrowUpClass);
    }
    function handleCloseSetupButtonpress() {
        const isExpanded = closeSetupBtn.attributes['aria-expanded'].value === 'true';
        const arrowUpClass = 'inactive';
        const arrowDownClass = 'open';
        toggleCard(arrowDownClass, arrowUpClass);

        if (isExpanded) {
            closeSetupBtn.ariaExpanded = 'false';
        }
        else {
            closeSetupBtn.ariaExpanded = 'true';
            document.querySelector('#first-choice button').focus();
            document.querySelector('.choice-close-icon:first-child').focus();

            // Handle Keyboard navigation
            card.addEventListener('keyup', (event) => {
                if (event.key === 'Escape') {
                    toggleCard(arrowDownClass, arrowUpClass);
                }
            })
        }
    }
    closeSetupBtn.addEventListener('click', handleCloseSetupButtonpress);


    // Handle click pn dismiss button of the trial callout
    function closeCalloutTrial() {
        callOutTrial.classList.toggle('inactive');
    }
    dismissButtons.forEach((dismissBtn) => {
        dismissBtn.addEventListener('click', closeCalloutTrial);
    })

    /* User Interaction with Dashboard Dropdown Menu */
    function handleMenuItemKeypress(event, menuItemIndex) {
        const isLastMenuItem = menuItems.length - 1 === menuItemIndex;
        const isFirstMenuItem = menuItemIndex === 0;

        const nextMenuItem = menuItems.item(menuItemIndex + 1);
        const prevMenuItem = menuItems.item(menuItemIndex - 1);
        if (event.key === 'ArrowDown' ||
            event.key === 'ArrowRight') {
            if (isLastMenuItem) {
                menuItems.item(0).focus();
            }
            else {
                nextMenuItem.focus();
            }
        }
        if (event.key === 'ArrowUp' ||
            event.key === 'ArrowLeft') {
            if (isFirstMenuItem) {
                menuItems.item(menuItems.length - 1).focus();
            }
            else {
                prevMenuItem.focus();
            }
        }
    }
    function openDashboard() {
        brandLogo.ariaExpanded = 'true';
        menuItems.item(0).focus();
        dashboardMenu.addEventListener('keyup', handleDashboardEscapeKeypress);
        menuItems.forEach((menuItem, menuItemIndex) => {
            menuItem.addEventListener('keyup', function (event) {
                handleMenuItemKeypress(event, menuItemIndex);
            })
        })
    }
    function closeDashboard() {
        brandLogo.ariaExpanded = 'false';
        brandLogo.focus();
    }
    function handleDashboardEscapeKeypress(event) {
        if (event.key === 'Escape') {
            toggleDashboard();
        }
    }
    function handleDashboardEnterKeypress(event) {
        if (event.key === 'Enter') {
            toggleDashboard();
        }
    }
    function toggleDashboard() {
        dashboardMenu.classList.toggle('active');
        const isExpanded = brandLogo.attributes['aria-expanded'].value === 'true';
        if (isExpanded) {
            closeDashboard();
        }
        else {
            openDashboard();
        }
    }
    brandLogo.addEventListener('keyup', handleDashboardEnterKeypress);
    brandLogo.addEventListener('click', toggleDashboard);

    /* User Interaction with the Notification Icon */
    function closeAlert() {
        notificationIcon.ariaExpanded = 'false';
        notificationIcon.focus();
    }
    function handleAlertIconKeypress(event, alertIconIndex) {
        const isLastAlertIcon = alertIconIndex === alertIcons.length - 1;
        const isFirstAlertIcon = alertIconIndex === 0;

        const nextAlertIcon = alertIcons.item(alertIconIndex + 1);
        const prevAlertIcon = alertIcons.item(alertIconIndex - 1);
        if (
            event.key === 'ArrowDown' ||
            event.key === 'ArrowRight') {
            if (isLastAlertIcon) {
                alertIcons.item(0).focus();
                return;
            }
            nextAlertIcon.focus();
        }
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            if (isFirstAlertIcon) {
                alertIcons.item(alertIcons.length - 1).focus();
                return;
            }
            prevAlertIcon.focus();
        }
    }
    function openAlert() {
        notificationIcon.ariaExpanded = 'true';
        alertIcons.item(0).focus();
        notificationDropdown.addEventListener('keyup', handleAlertEscapeKeypress)
        alertIcons.forEach((alertIcon, alertIconIndex) => {
            alertIcon.addEventListener(
                'keyup',
                (event) => {
                    handleAlertIconKeypress(event, alertIconIndex);
                }
            )
        })
    }
    function handleAlertEscapeKeypress(event) {
        if (event.key === 'Escape') {
            toggleAlert();
        }
    }
    function toggleAlert() {
        notificationDropdown.classList.toggle('active');
        const isExpanded = notificationIcon.attributes["aria-expanded"].value === 'true';
        if (isExpanded) {
            closeAlert();
        }
        else {
            openAlert();
        }
    }
    notificationIcon.addEventListener('click', toggleAlert)
}


app();