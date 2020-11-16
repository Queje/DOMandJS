// Fonctionnalité 1:

var findFooter = document.querySelector("body > footer > div");

var onFooterClick = function() {
    console.log("clique")
};     

// Fonctionnalité 1bis:

var number = 1;
var mouseClicked = function() {
  console.log('mouseClick = ' + number);
  number++;
};

// Fonctionnalité 2:

var findNavbarHeader = document.querySelector("#navbarHeader")
var findBurgerButton = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button");

var onNavbarHeaderClick = function() {
    findNavbarHeader.classList.toggle("collapse");
};

// Fonctionnalité 3:

var findFirstCard = document.querySelector("body > main > div > div > div > div:nth-child(1) > div");
var findFirstEditButton = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");


var onEditClickRed = function () {
    findFirstCard.style.color = "red"
};

// Fonctionnalité 4:

var findSecondCard = document.querySelector("body > main > div > div > div > div:nth-child(2) > div");
var findSecondEditButton = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");

var onEditClickGreen = function () {
    if (findSecondCard.style.color !== "green"){
    findSecondCard.style.color = "green"
    } 
    else {
    findSecondCard.style.color = "black"    
    }
};

// Fonctionnalité 5:
var findLinkBoot = document.querySelector("head > link");
var findHeader = document.querySelector("body > header");

var onDoubleClickHeader = function () {
    if (findLinkBoot.disabled !== true){
        findLinkBoot.disabled = true;}
    else {
        findLinkBoot.disabled = false
    }
};

// Fonctionnalité 6:

var findListCard = document.getElementsByClassName("card mb-4 box-shadow");

// Fonctionnalité 7:

var findCard = document.getElementsByClassName("col-md-4");

var findGrayButton = document.querySelector("body > main > section > div > p > a.btn.btn-secondary.my-2");

var shuffle = function () {
    findCard[0].parentNode.insertBefore(findCard[findCard.length-1], findCard[0]);
};


// Actions:

findFooter.addEventListener("click", onFooterClick);
findFooter.addEventListener("click", mouseClicked);

findBurgerButton.addEventListener("click", onNavbarHeaderClick);

findFirstEditButton.addEventListener("click", onEditClickRed);

findSecondEditButton.addEventListener("click", onEditClickGreen);

findHeader.addEventListener("dblclick", onDoubleClickHeader);

// Fonctionnalité 6 Action:
for (let i = 0; i < findListCard.length; i++) {
    findListCard[i].querySelector("button.btn.btn-sm.btn-success").addEventListener("mouseover", function () {
        if (findListCard[i].querySelector("img").style.width === "100%"){
            findListCard[i].querySelector("img").style.width = "20%";
            findListCard[i].querySelector("p.card-text").style.display = "none";
        }
        else {
            findListCard[i].querySelector("img").style.width = "100%";
            findListCard[i].querySelector("p.card-text").style.display = "initial";
        };
    });
};

findGrayButton.addEventListener("click", shuffle);
