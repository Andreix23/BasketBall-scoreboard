count=0
let HomeScoreOne =document.getElementById("btn")
let HomeStoreOne = document.getElementById("main-score")
function addOne(){
    count +=1;
    HomeStoreOne.textContent=count;
}
let HomeScoreTwo =document.getElementById("btn")
let HomeStoreTwo = document.getElementById("main-score")
function addTwo(){
    count +=2;
    HomeStoreOne.textContent=count;
}
let HomeScoreThree =document.getElementById("btn")
let HomeStoreThree = document.getElementById("main-score")
function addThree(){
    count +=3;
    HomeStoreOne.textContent=count;
}

let newCount=0
let guestScoreOne=document.getElementById("btn")
let guestStoreOne=document.getElementById("second-store")
function addOneGuest(){
    newCount +=1
    guestStoreOne.textContent=newCount
}
let guestScoreTwo =document.getElementById("btn")
let guestStoreTwo = document.getElementById("second-score")
function addTwoGuest(){
    newCount +=2;
    guestStoreOne.textContent=newCount;
}
let guestScoreThree =document.getElementById("btn")
let guestStoreThree = document.getElementById("second-score")
function addThreeGuest(){
    newCount +=3;
    guestStoreOne.textContent=newCount;
}

