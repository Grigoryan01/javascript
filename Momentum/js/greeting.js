    const date = new Date();
    const hours = date.getHours();
   
function getTimeOfDay(){
   switch(hours){
        case 0:
            return(`Good night,`);
            break;
        case 1:
            return(`Good night,`);
            break; 
        case 2:
            return(`Good night,`);
            break; 
        case 3:
            return(`Good night,`);
            break;
        case 4:
            return(`Good night,`);
            break;
        case 5:
            return(`Good night,`);
            break;
        case 6:
            return(`Good morning,`);
            break;
        case 7:
            return(`Good morning,`);
            break;
        case 8:
            return(`Good morning,`);
            break;
        case 9:
            return(`Good morning,`);
            break;
        case 10:
            return(`Good morning,`);
            break;
        case 11:
            return(`Good morning,`);
            break;      
        case 12:
            return(`Good afternoon,`);
            break;
        case 13:
            return(`Good afternoon,`);
            break;
        case 14:
            return(`Good afternoon,`);
            break;
        case 15:
            return(`Good afternoon,`);
            break;
        case 16:
            return(`Good afternoon,`);
            break;
        case 17:
            return(`Good afternoon,`);
            break;
        case 18:
            return(`Good evening,`);
            break;
        case 19:
            return(`Good evening,`);
            break;
        case 20:
            return(`Good evening,`);
            break;
        case 21:
            return(`Good evening,`);
            break;
        case 22:
            return(`Good evening,`);
            break;
        case 23:
            return(` Good evening,`);
            break;
   }
}
getTimeOfDay();

const greetingElement=document.querySelector('.greeting');
greetingElement.textContent=getTimeOfDay();

//input  
        const inputElement=document.querySelector('.Name');
        const userName=inputElement.value;
    
        
    function showGreeting(){
        const timeOfDay = getTimeOfDay();
        const greetingText = `${timeOfDay},${userName}`;
        //console.log(greetingText);
    }

showGreeting();

function setLocalStorage() {
    localStorage.setItem('name', userName.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);


  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      userName.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage);