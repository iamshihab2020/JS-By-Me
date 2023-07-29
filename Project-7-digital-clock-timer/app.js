const addTrailingZer = (num) => {
    return num < 10 ? "0" + num : num
}


const updateTime = () => {
    const time = new Date()
    let hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds(),
    ampm = hours >= 12 ? "PM" : "AM"
    otherampm = hours >= 12 ? "AM" : "PM";

    // converting 24H to 12H format
    hours = hours % 12 || 12

    //add trailing zeros if less than 10
    hours = addTrailingZero(hours)
    minutes = addTrailingZero(minutes)
    seconds = addTrailingZero(seconds)

    $("#hour").html(hours)
    $("#min").html(minutes)
    $("#sec").html(seconds)
    $("#ampm").html(ampm)
    $("#other-ampm").html(otherampm)

}
// cll the function on page load
updateTime()

// call function after every second

setInterval(updateTime, 1000)


// stopwatch
let stopWatchHours = 0,
stopWatchMinutes = 0,
stopWatchSeconds = 0,
stopwatchMiliSeconds = 0,
stopWatchRunning = 0
laps = 0,
stopWatchInterval


const stopwatch = () =>{
    // increase millisecond
    stopwatchMiliSeconds++

    if(stopwatchMiliSeconds === 100){
        // if stopwatch milisecond equals 100 increase one sec and set ms 0
        stopWatchSeconds++
        stopWatchSeconds = 0
    }

    if(stopWatchSeconds === 60){
        stopWatchMinutes++
        stopWatchSeconds = 0
    }


    if(stopWatchMinutes === 60){
        stopWatchHours++
        stopWatchMinutes = 0
    }
}