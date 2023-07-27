const updateTime(){
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

}

const addTrailingZer = (num) => {
    return num < 10 ? "0" + num : num
}

