const main = () => {
   setInterval(updateClock, 1000);
}

const updateClock = () => {
    const currentTime = new Date(Date.now());

    const clock = document.getElementById("clock");
    clock.title = currentTime.toLocaleTimeString();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hourDigits = getNumberAsDigitsArray(hours);
    const minuteDigits = getNumberAsDigitsArray(minutes);
    const secondDigits = getNumberAsDigitsArray(seconds)

    updateLed("m", "tens", 4, seconds % 2);
};

const getNumberAsDigitsArray = (number) => {
    return number.toString().padStart(2, 0).split('').map(n => Number(n));
} 

const isOn = (value) => {

}

const updateLed = (unit, place, number, isOn) => {
    const className = "led--on";
    const id = `${unit}-${place}-${number}`;
    const element = document.getElementById(id);

    if (isOn) {
        element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
}

main();
