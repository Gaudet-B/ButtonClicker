console.log("Great success!");

function logIn(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    }
    else if (element.innerText == "Logout") {
        element.innerText = "Login";
    }
}

function defButton(element) {
    element.style.display = 'none';
}

var topCounter = 13;
function likeClickedTop(element) {
    topCounter++;
    element.innerText = topCounter + " likes";
}

var botCounter = 37;
function likeClickedBot(element) {
    botCounter++;
    element.innerText = botCounter + " likes";
}