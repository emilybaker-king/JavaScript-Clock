
//We need a way to get the current time and have that be updated each second.

//To do this, we are going to create a finctionthat contains a timer to call itself again each second.

function showTime() {
    var date = new Date(); //this gives us the current date and time

    var hour = date.getHours(); //0 - 23
    var minute = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
    var amPm = "AM";
    var weekday = date.getDay();
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();

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

    switch(weekday) { 
        case 0: //If weekday === 0 console.log("Sunday") and then break out of the switch statement
            weekday = "Sunday";
            break;
        case 1:
            weekday = "Monday"
            break;
        case 2:
            weekday = "Tuesday";
            break;
        case 3:
            weekday = "Wednesday";
            break;
        case 4:
            weekday = "Thursday";
            break;
        case 5:
            weekday = "Friday";
            break;
        case 6:
            weekday = "Saturday";
    }

    switch(month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December"
    }

    var time = hour + ":" + minute + ":" + seconds + " " + amPm;

    var date = weekday + ", " + month + " " + day + ", " + year;

    document.getElementById("clockDisplay").innerText = time;

    document.getElementById("dateDisplay").innerText = date;

    setTimeout(showTime, 1000); //Schedule the showTime function to be called after 1000 ms (1 second)
}

showTime();


/*
    JavaScript Clock Challenges:
        1. Add a different font (of your choice) for your clock to use.
        2. Display the current date below the time. For example: Today's date is: Tuesday, September 17th. *Hint - hours, minutes, and seconds aren't the only thing we can pull from a date object*
        3. Add a header to your clock displaying your name, GitHub link, and LinkedIn profile link.
*/