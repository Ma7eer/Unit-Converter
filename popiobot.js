// TODO add temperature

// initialize the variables.
let myObj2 = {
    "kilometer": 0.621,
    "centimeter": 0.393,
    "meter": 3.28,
    "kilograms": 2.20
},
inputArray2 = [
    document.getElementById('kilometer2'),
    document.getElementById('centimeter2'),
    document.getElementById('meter2'),
    document.getElementById('kilograms2')
],
outputArray2 = [
    document.getElementById('miles2'),
    document.getElementById('inches2'),
    document.getElementById('feet2'),
    document.getElementById('lbs2')
]

// A convenience function to set the content of an element.
function set(el, num) {
    while (el.firstChild) el.removeChild(el.firstChild);
    el.value = num.toFixed(2);
}

// setupUpdater will be called once, on page load.
function setupUpdater(inputs, outputs, myUnitObject) {
    var oldNum = inputs.value,
        timeout = null;

    // handleChange is called 50ms after the user stops typing.
    function handleChange() {
            var newNum = inputs.value * myUnitObject;
            if (newNum == oldNum) return;
            else oldNum = newNum;
            set(outputs, newNum);
    }

    /* eventHandler is called on keyboard and mouse events.
       If there is a pending timeout, it cancels it.
       It sets a timeout to call handleChange in 50ms. */
    function eventHandler() {
        if (timeout) clearTimeout(timeout); // if timeout is null do this
        timeout = setTimeout(handleChange, 50);
    }

    inputs.onkeydown = inputs.onkeyup = inputs.onclick = eventHandler;
}

// call setUpdater for each input and output
const init2 = () => {
    for (let i = 0; i <= inputArray2.length; i++) {
        setupUpdater(inputArray2[i], outputArray2[i], myObj2[inputArray2[i].name]);
        inputArray2[i].focus();
    }
}

init2();
