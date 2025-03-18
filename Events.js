//Events -> Events in an action it can be triggered by the end user they can interact with web or mobile pages

// 1) inline event handler(like inline css, nowadays no one use inline js )
        // <button onclick="alert('You clicked the Button!')">Click Me!</button>

// 2) addEventListener


// function clickMe() {
//     alert("Button is clicked");
// }

// const clickButton = document.getElementById('myButton')
// clickButton.addEventListener('click', clickMe); 

// function clickHandler() {
//     alert('Button is Clicked!')
// }

// function mouseHandler(){
//     console.log('mouseover!')
// }

// const button = document.querySelector('body')
// button.addEventListener('click', clickHandler); // fucntion calling, here addEventListener is taken care the function calling so that, we don't need to mention argumnets()
// button.addEventListener('mouseover', mouseHandler);

// button.removeEventListener('click', clickHandler);
// button.removeEventListener('mouseover', mouseHandler);


//Timers

//1) setTimeout()

//syntax:

// setTimeout(()=>{}, timeinmillisecond) 1sec = 1000 millisecond

//2) setInterval(()=>{}, timeinmillisecond)

//let timeoutId = setTimeout(callbackFunction, delay);

//if we don't use clearTimeout,

//Unnecessary execution (e.g., showing a message the user tried to cancel).
// Performance issues (e.g., making too many API calls).
// Overlapping timeouts (e.g., multiple timers running at once).


// const timer = setTimeout(()=>{
//     document.write('Hello World!')
// }, 5000)

// const btn = document.getElementById('timer');

// btn.addEventListener('click', ()=>{
//     clearTimeout(timer);
//     console.log("Timeout cancelled!");
// })



function showNotification() {
    let notification = document.getElementById("message");
    notification.style.display = "block";

    let timeoutId = setTimeout(() => {
        notification.style.display = "none";
    }, 5000); // Hide after 3 seconds

    document.getElementById("cancelButton").addEventListener("click", () => {
        clearTimeout(timeoutId);
        notification.style.display = "none";
    });
}


// let alertTimer = setTimeout(() => {
//     console.log("Time's up!");
// }, 3000);

// document.getElementById("cancelBtn").addEventListener("click", () => {
//     clearTimeout(alertTimer);
//     console.log("Alert canceled!");
// });


// let logoutTimer = setTimeout(() => {
//     console.log("User logged out due to inactivity");
// }, 5000); // Auto-logout after 5 seconds

// document.addEventListener("mousemove", () => {
//     clearTimeout(logoutTimer); // Reset timer on activity
//     console.log("User is active, logout canceled!");
// });