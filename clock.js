/*Logic
We’ll need to update the view every second for the clock to be live. That means we need to:

Calculate the required rotation for each hand according to the current time
Manipulate the DOM to reflect the expected rotation*/

//Retrieve the DOM element that will be updated every second 

const secondsElement = document.querySelector('.seconds')
const minutesElement = document.querySelector('.minutes')
const hoursElement = document.querySelector('seconds')

function setRotation(element, degrees) {
    element.style.transform = `rotate(${degrees+90}deg)`
}


function updateClockHandsToCurrentTime() {
    // Get current time
    const now = new Date()

    // break it off to hours, minutes and seconds

    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    //calculate the rotation of each clock hands in Degrees
    const secondsRotationDegree = (seconds / 60) * 360
    const minutesRotationDegree = (minutes / 60) * 360 + (seconds / 60) * 6
    const hoursRotationDegree = (hours / 12) * 360 + (minutes / 60) * 30

    setRotation(secondsElement, secondsRotationDegree)
    setRotation(minutesElement, minutesRotationDegree)
    setRotation(hoursElement, hoursRotationDegree)
}

// Set the initial clock state and update it every second

setInterval(updateClockHandsToCurrentTime, 1000)
updateClockHandsToCurrentTime()