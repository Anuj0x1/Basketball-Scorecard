let homeTeam=0;
let guestTeam=0;


let homeEle=document.getElementById("hometeam-points")
let guestEle=document.getElementById("guest-points")


function increaseHomeTeamPointBy1(){
    
    
    homeTeam+=1
    homeEle.textContent=homeTeam

}

function increaseHomeTeamPointBy2(){
    homeTeam+=2
    homeEle.textContent=homeTeam
    
}

function increaseHomeTeamPointBy3(){
    homeTeam+=3
    homeEle.textContent=homeTeam
}


function increaseGuestTeamPointBy1(){
    guestTeam+=1
    guestEle.textContent=guestTeam
}


function increaseGuestTeamPointBy2(){
    guestTeam+=2
    guestEle.textContent=guestTeam
}

function increaseGuestTeamPointBy3(){
    guestTeam+=3
    guestEle.textContent=guestTeam
}
