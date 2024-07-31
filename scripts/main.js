const main = () => {
   // setInterval(updateClock, 1000);
}

const updateClock = () => {
    const currentTime = new Date(Date.now());

    const clock = document.getElementById("clock");

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hourSegment = document.getElementById('hour-segment');
    hourSegment.setAttribute("number", hours);
    const minuteSegment = document.getElementById('minute-segment');
    minuteSegment.setAttribute("number", minutes);
    const secondSegment = document.getElementById('second-segment');
    secondSegment.setAttribute("number", seconds);

    console.log('hours', getNumberAsDigitsArray(hours), 'minutes', getNumberAsDigitsArray(minutes), 'seconds', getNumberAsDigitsArray(seconds));
};

const getNumberAsDigitsArray = (number) => {
    return number.toString().padStart(2, 0).split('').map(n => Number(n));
} 

main();
