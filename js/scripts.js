
//We need a way to get the current time and have that be updated each second.

//To do this, we are going to create a finctionthat contains a timer to call itself again each second.

function showTime() {
    var date = new Date(); //this gives us the current date and time

    var hour = date.getHours(); //0 - 23
    var minute = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
    var amPm = "AM";

    //We need to make sure the hour is properly represeneted in a 12-hr time, and we also need to determine whether we should display AM or PM.

    //With out hours being between 0 and 23, 0 would equal 12AM and anything 12 and above is a PM hour.

    if (hour === 0) {
        amPm = "AM";
    } else if (hour >= 12) {
        amPm = "PM"
    }

    if (hour === 0) {
        hour = 12; //If hour equals 0, change it to 12
    }

    if (hour > 12) {
        hour = hour - 12; //If hour is greater than 12, subtract 12 from it - 13 === 1
    }

    hour = (hour < 10) ? "0" + hour : hour; //if hour is less than 10, set hour equal to 0 + hour
    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var time = hour + ":" + minute + ":" + seconds + " " + amPm;

    document.getElementById("clockDisplay").innerText = time;

    setTimeout(showTime, 1000); //Schedule the showTime function to be called after 1000 ms (1 second)
}

showTime();