let fireFoxImg = document.querySelector('img');
fireFoxImg.onclick= function(){
    let mySrc = fireFoxImg.getAttribute("src")
    if(mySrc === "images/firefox.jpeg"){
        fireFoxImg.setAttribute('src', 'images/firefox-2.jpeg' )
    }else{
        fireFoxImg.setAttribute('src', 'images/firefox.jpeg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
 } 