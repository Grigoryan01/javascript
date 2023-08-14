function showTime(){
        const date = new Date();
        const currentTime = date.toLocaleTimeString();        
        const timeElement = document.querySelector('.time'); 
        timeElement.textContent = currentTime; 
        setTimeout(showTime, 1000);
}
showTime();

//date

const dateElement=document.querySelector('.date');
dateElement.textContent=showDate();

function showDate(){
    const date = new Date();
    const options = { weekday:'long', month: 'long', day: 'numeric',  timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString('en-US', options);
    setTimeout(showDate, 1000);
    return currentDate;
}
showDate();
