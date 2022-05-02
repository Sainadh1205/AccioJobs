var displayArea = document.getElementById('display');

function displayResult() {
    try {
        if(displayArea.innerText != "0"){
            displayArea.innerText = eval(displayArea.innerText);
        }
    }
    catch (error) {
        displayArea.innerText = '0';
    }
}

function clearDisplay() {
    displayArea.innerText = '0';
}

function deleteLastDigit() {
    displayArea.innerText = displayArea.innerText.substring(0, displayArea.innerText.length - 1);

    if (displayArea.innerText.length == 0) {
        displayArea.innerText = '0';
    }
}

function isOperator(digitOrOperator) {
    if (digitOrOperator == '+' || digitOrOperator == '-' || digitOrOperator == '*' || digitOrOperator == '/' || digitOrOperator == '%') {
        return true;
    }
    else {
        false;
    }
}

function btnClicked(digitOrOperator) {
    if (displayArea.innerText === '0') {

        if (digitOrOperator == '0' || digitOrOperator == '00') {
            return;
        }

        if (digitOrOperator == '.' || isOperator(digitOrOperator)) {
            displayArea.innerText = '0' + digitOrOperator;
            return;
        }

        displayArea.innerText = digitOrOperator;
    }
    else {

        if (isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator(digitOrOperator)) {
            displayArea.innerText = displayArea.innerText.slice(0, -1) + digitOrOperator;
            return;
        }

        displayArea.innerText = displayArea.innerText + digitOrOperator;
    }
}
