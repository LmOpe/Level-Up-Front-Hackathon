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
    const notCompletedIconOpen = document.querySelectorAll('.not-completed-icon-open');
    const completedIconOpen = document.querySelectorAll('.completed-icon-open');
    const loadingSpinnerIconOpen = document.querySelectorAll('.loading-spinner-open');
    const notCompletedIconClose = document.querySelectorAll('.not-completed-icon-close');
    const completedIconClose = document.querySelectorAll('.completed-icon-close');
    const loadingSpinnerIconClose = document.querySelectorAll('.loading-spinner-close');
    const setupTabs = setupGuideChoices.querySelectorAll('[role="tab"]');
    const setupTabPanels = setupGuideChoices.querySelectorAll('[role="tabpanel"]');
    const checkBoxButtonStatus = document.querySelector('#setup-guide-choices-checkbox-status');

    const HIDDEN_CLASS = 'inactive';

    function closeAllCardsOpenAllButtons() {
        choiceOpenCards.forEach(choice => {
            choice.style.display = 'none';
        })
        choiceCloseButtons.forEach(choice => {
            choice.style.display = 'flex';
        })
    }

    function handleMarkAsNotDone(checkBoxIndex, completedIconCloseOrOpen, notCompletedIconCloseOrOpen, loadingSpinnerIconCloseOrOpen) {
        completedIconCloseOrOpen.item(checkBoxIndex).classList.add(HIDDEN_CLASS);
        loadingSpinnerIconCloseOrOpen.item(checkBoxIndex).classList.remove(HIDDEN_CLASS);

        checkBoxButtonStatus.ariaLabel = 'Loading, Please wait...';

        setTimeout(() => {
            loadingSpinnerIconCloseOrOpen.item(checkBoxIndex).classList.add(HIDDEN_CLASS);

            notCompletedIconCloseOrOpen.item(checkBoxIndex).classList.remove(HIDDEN_CLASS);

            checkBoxButtonsClose.item(checkBoxIndex).ariaLabel =
                checkBoxButtonsClose.item(checkBoxIndex).ariaLabel.replace('as not done', 'as done');
            checkBoxButtonsOpen.item(checkBoxIndex).ariaLabel =
                checkBoxButtonsOpen.item(checkBoxIndex).ariaLabel.replace('as not done', 'as done');

            checkBoxButtonStatus.ariaLabel = `Successfully marked ${checkBoxButtonsClose.item(checkBoxIndex).attributes['aria-label'].value} as not done`;
        }, 3000);
    }
    function handleMarkAsDone(checkBoxIndex, completedIconCloseOrOpen, notCompletedIconCloseOrOpen, loadingSpinnerIconCloseOrOpen) {
        notCompletedIconCloseOrOpen.item(checkBoxIndex).classList.add(HIDDEN_CLASS);
        loadingSpinnerIconCloseOrOpen.item(checkBoxIndex).classList.remove(HIDDEN_CLASS);

        checkBoxButtonStatus.ariaLabel = 'Loading, Please wait...';

        setTimeout(() => {
            loadingSpinnerIconCloseOrOpen.item(checkBoxIndex).classList.add(HIDDEN_CLASS);
            completedIconCloseOrOpen.item(checkBoxIndex).classList.remove(HIDDEN_CLASS);

            checkBoxButtonsClose.item(checkBoxIndex).ariaLabel =
                checkBoxButtonsClose.item(checkBoxIndex).ariaLabel.replace('as done', 'as not done');
            checkBoxButtonsOpen.item(checkBoxIndex).ariaLabel =
                checkBoxButtonsOpen.item(checkBoxIndex).ariaLabel.replace('as done', 'as not done');

            checkBoxButtonStatus.ariaLabel = `Successfully marked ${checkBoxButtonsClose.item(checkBoxIndex).attributes['aria-label'].value} as done`;
        }, 3000);
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
            handleMarkAsNotDone(checkBoxIndex, completedIconClose, notCompletedIconClose, loadingSpinnerIconClose);
            handleMarkAsNotDone(checkBoxIndex, completedIconOpen, notCompletedIconOpen, loadingSpinnerIconOpen);
        }
        else {
            openParent.dataset.complete = 'true';
            closeParent.dataset.complete = 'true';
            handleMarkAsDone(checkBoxIndex, completedIconOpen, notCompletedIconOpen, loadingSpinnerIconOpen);
            handleMarkAsDone(checkBoxIndex, completedIconClose, notCompletedIconClose, loadingSpinnerIconClose);


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
            handleMarkAsNotDone(checkBoxIndex, completedIconClose, notCompletedIconClose, loadingSpinnerIconClose);
            handleMarkAsNotDone(checkBoxIndex, completedIconOpen, notCompletedIconOpen, loadingSpinnerIconOpen);
        }
        else {
            parent.dataset.complete = 'true';
            closeParent.dataset.complete = 'true';
            handleMarkAsDone(checkBoxIndex, completedIconOpen, notCompletedIconOpen, loadingSpinnerIconOpen);
            handleMarkAsDone(checkBoxIndex, completedIconClose, notCompletedIconClose, loadingSpinnerIconClose);

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
        choiceCloseButtons.forEach((choice, choiceCloseIndex) => {
            if (!(Array.from(choiceCloseButtons).indexOf(choice) === choiceIndex)) {
                choice.style.display = 'flex';
                choiceCloseTextButtons.item(choiceCloseIndex).tabIndex = -1;
                choiceCloseTextButtons.item(choiceCloseIndex).ariaSelected = 'false';
            }
            else {
                choice.style.display = 'none';
                choiceCloseTextButtons.item(choiceCloseIndex).tabIndex = 0;
                choiceCloseTextButtons.item(choiceCloseIndex).ariaSelected = 'true';
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

    function handleSetupTabKeypress(tabIndex, event, tab) {
        const isLastTab = setupTabs.length - 1 === tabIndex;
        const isFirstTab = tabIndex === 0;

        const nextTab = setupTabs.item(tabIndex + 1);
        const prevTab = setupTabs.item(tabIndex - 1);


        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
            if (isLastTab === true) {
                if (setupTabs.item(0).attributes['aria-selected'].value === 'true') {
                    setupTabPanels.item(0).focus()
                }
                else {
                    setupTabs.item(0).focus();
                }
            }
            else {
                if (setupTabs.item(tabIndex + 1).attributes['aria-selected'].value === 'true') {
                    setupTabPanels.item(tabIndex + 1).focus()
                }
                else {
                    nextTab.focus();
                }
            }

        }
        else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
            if (isFirstTab === true) {
                if (setupTabs.item(setupTabs.length - 1).attributes['aria-selected'].value === 'true') {
                    setupTabPanels.item(setupTabs.length - 1).focus()
                }
                else {
                    setupTabs.item(setupTabs.length - 1).focus();
                }
            }
            else {
                if (setupTabs.item(tabIndex - 1).attributes['aria-selected'].value === 'true') {
                    setupTabPanels.item(tabIndex - 1).focus()
                }
                else {
                    prevTab.focus();
                }
            }
        }
    }


    setupTabs.forEach((tab, tabIndex) => {
        tab.addEventListener('keyup', function (event) {
            handleSetupTabKeypress(tabIndex, event, tab);
        })
        setupTabPanels.item(tabIndex).addEventListener('keyup', function (event) {
            handleSetupTabKeypress(tabIndex, event, tab);
        })
    })

    function handleCloseSetupButtonpress() {
        const isExpanded = closeSetupBtn.attributes['aria-expanded'].value === 'true';
        const arrowUpClass = HIDDEN_CLASS;
        const arrowDownClass = 'open';
        toggleCard(arrowDownClass, arrowUpClass);

        if (isExpanded) {
            closeSetupBtn.ariaExpanded = 'false';
        }
        else {
            closeSetupBtn.ariaExpanded = 'true';
            choiceOpenCards.item(0).focus();
            choiceCloseTextButtons.item(0).focus();

            // Handle Keyboard navigation
            card.addEventListener('keyup', (event) => {
                if (event.key === 'Escape') {
                    toggleCard(arrowDownClass, arrowUpClass);
                }
            })
        }
    }
    closeSetupBtn.addEventListener('click', handleCloseSetupButtonpress);


    // Handle click of dismiss button of the trial callout
    function closeCalloutTrial() {
        callOutTrial.classList.toggle(HIDDEN_CLASS);
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