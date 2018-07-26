// TODO add temperature

// initialize the variables.
let myObj1 = {
    "miles": 1.60,
    "inches": 2.54,
    "feet": 0.31,
    "lbs": 0.45
},
inputArray = [
    document.getElementById('miles1'),
    document.getElementById('inches1'),
    document.getElementById('feet1'),
    document.getElementById('lbs1')
],
outputArray = [
    document.getElementById('kilometer1'),
    document.getElementById('centimeter1'),
    document.getElementById('meter1'),
    document.getElementById('kilograms1')
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
const init = () => {
    for (let i = 0; i <= inputArray.length; i++) {
        setupUpdater(inputArray[i], outputArray[i], myObj1[inputArray[i].name]);
        inputArray[i].focus();
    }
}

init();
