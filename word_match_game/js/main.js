
$startButton = document.querySelector("button")
let body = document.querySelector("body")
let $all = document.querySelector("section")
let p = document.querySelector("p")
var $timer = document.createElement("p")
let $Section = document.createElement("section");
let $graidCon = document.createElement("div");
var $score = document.createElement("p")
let $graidItem = document.createElement("div");
 let $Letter = document.createElement("Button")
let gridList = []
var ansarry = []
var level = 0;
let i = 0;
let score = 0
let second = 0
let timeId =0
let currentWord = []
let words = [
    ["W", "E", "T"],
    ["B", "U", "T"],
    ["L","O","A","N"],
    ["M","A","I","L"],
    ["C", "H", "I","N","A"],
    ["T","A","B","L","E"],
    ["B","E","A","U","T","Y"],
    ["W","A","R","N","E","D"],
]

$startButton.addEventListener("click", function () {
    body.style.backgroundColor = "beige"
    $startButton.style.display = "none"
    p.style.display="none"
    $score.innerText="SCORE : ";
    swipLettet(level)
})

function swipLettet(level) {
    timeId = setInterval(function(){
        second++   
        $timer.innerText= second
    },1000)
    $timer.classList.add("timer")
    $score.classList.add("score")
    let body = document.querySelector("body")
    let $graidItem = document.createElement("div");
    $Section.classList.add("gameCon")
    $graidCon.classList.add("Con")
    $graidItem.classList.add("item")
     random();
    for (j = 0; j < currentWord.length; j++) {
       let $graidItem = document.createElement("div");
        $graidItem.classList.add("item")
        let $Letter = document.createElement("Button")
        $Letter.classList.add("letter")
         $graidItem.setAttribute("id", [j])
        $Letter.setAttribute("id", [j])
        $Letter.textContent = currentWord[j]
        body.appendChild($timer)
        body.appendChild($score) 
        gridList.push($graidItem);
        body.appendChild($graidCon)
        body.appendChild($Section)
        $Section.appendChild($Letter)
        $graidCon.appendChild($graidItem)
        let letterId = currentWord[$Letter["id"]]
        $Letter.addEventListener("click", function () {
            // $Letter.style.display="none"
            document.getElementById('click').play();
            gridList[i].textContent = letterId;
            i++; 
        ansarry.push(letterId)
        console.log(ansarry);
        if(ansarry.length===words[level].length){
            checkAns();
           }

        })
        removEvent($graidItem);
    }

} 



function random(){
    
    if (level !==words.length){
    while (currentWord.length !== words[level].length) {
        let index = Math.floor(Math.random() * words[level].length)
        if (!currentWord.includes(words[level][index])) {
            currentWord.push((words[level][index]));

        }
       temp= currentWord.toString();
       tempW =  words[level].toString();

        if(temp===tempW){
            currentWord = []
        }

    }
}
else{
endGame();
}
}


function checkAns(){
    ansarry = ansarry.toString();
    if(ansarry===tempW){

        console.log("win")
        score = score+1
        $graidCon.innerHTML = []
        $Section.innerHTML = []
        level++
         ansarry = []
         currentWord = []
         clearInterval(timeId)
         i=0;
         gridList=[]

}
else if (ansarry!==tempW){
    $graidCon.innerHTML = []
    $Section.innerHTML = []
    ansarry = []
    currentWord = []
    if (score !=0){score = score-1 }
    clearInterval(timeId)
}

$score.innerText="SCORE : "+score;
swipLettet(level);

}



function endGame(){
    let $final = document.createElement("div") 
    let $finalStatment = document.createElement("p") 
let name =  document.getElementById('by')

    $final.classList.add('animated', 'zoomInDown')
    $finalStatment.classList.add("Statment")
    body.appendChild($final)
    $final.appendChild($finalStatment)
    $final.appendChild(name)
    let lastSec = second 
    if(second<=50){
        document.getElementById('tada').play();
        $score.style.display = "none"
        $timer.style.display = "none"
        $finalStatment.innerHTML="YOU ARE AWESOME!!!!!!" + " </br></br>YOUR SCORE IS = "+score + "</br></br>YOU SOLVED IN " + lastSec +" SECONDS";
        name.textContent = "By : SARA"
    }
    else {
        document.getElementById('loss').play();
        $score.style.display = "none"
        $timer.style.display = "none"
        $finalStatment.innerHTML = "You should OPEN dictionary sometimes " + " </br> </br>YOUR SCORE IS = "+score + "</br> </br>YOU SOLVED IN " + lastSec+" SECONDS";
       name.textContent = "By : SARA"
    }
}




// function addEvent(){
//         $Letter.addEventListener("click", function () {
//             document.getElementById('click').play();
//             gridList[i].textContent = letterId;
//             i++; 
//         ansarry.push(letterId)
//         console.log(ansarry);
//         if(ansarry.length===words[level].length){
//             checkAns();
//            }

//         })

// }
function removEvent($graidItem){
    $graidItem.addEventListener("click",function(e){
          
   
    let gridId = $graidItem["id"];
    console.log(gridId);
    
    let gridletter = e.target.textContent;
   // document.getElementById('click').play();
    e.target.textContent= "";
    if(gridletter){
ansarry.splice(ansarry.indexOf(gridletter),1)
console.log(ansarry)
if(i!=-1)
{
i--;}
}
    }
    )}