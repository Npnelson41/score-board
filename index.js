let count=document.getElementById("home-points")
count.textContent=0
let sumHome=0

function add1Home(){
sumHome+=1
count.textContent=sumHome
}
function add2Home(){
sumHome+=2
count.textContent=sumHome
}
function add3Home(){
sumHome+=3
count.textContent=sumHome
}


let counGuest=document.getElementById("guest-points")
counGuest.textContent=0
let sumGuest=0
function add1Guest(){
sumGuest+=1
counGuest.textContent=sumGuest
}
function add2Guest(){
sumGuest+=2
counGuest.textContent=sumGuest
}
function add3Guest(){
sumGuest+=3
counGuest.textContent=sumGuest
}

function reset(){
  count.textContent=0
  counGuest.textContent=0
  let sumHome=0
  let sumGuest=0
}