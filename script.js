let custBtn = document.getElementById("customizebutton");
let i=0;
let iElement1 = document.querySelector("i#mode");
let iElement2 = document.querySelector("i#profile");
let aElement = document.querySelector("a.listItems");
let custBtnI = document.querySelector("div#customizebutton i");
let listItems = document.getElementsByClassName("listItems");

function changeMode(){
    if(i == 0){
        document.body.style.backgroundColor = "#333D4C";
        iElement1.style.color = "white";
        iElement2.style.color = "white";
        custBtn.style.backgroundColor = "#333D4C";
        custBtn.style.color = "white";
        custBtnI.style.color = "white";

        for(item of listItems){
            item.style.color = "white";
        }

        i++;
    }
    else{
        document.body.style.backgroundColor = "white";
        iElement1.style.color = "";
        iElement2.style.color = "";
        custBtn.style.backgroundColor = "";
        custBtn.style.color = "";
        custBtnI.style.color = "";
        for(item of listItems){
            item.style.color = "";
        }
        i--;
    }
}

// showing the div

let choseBtn = document.getElementById("choseColors");
let backDiv = document.getElementById("grayDiv");

function showing(){
    choseBtn.style.display = "flex";
    backDiv.style.display = "block";
}
// closing the div
function closeing(){
    choseBtn.style.display = "none";
    backDiv.style.display = "none";
}
// changing color

let j = 0;
let headerDiv = document.querySelector("header");
function changeColor(){
    if(j == 0){
        j++;
        headerDiv.style.backgroundColor = "#333D4C";
    }
    else{
        headerDiv.style.backgroundColor = "";
        j--;
    }
}