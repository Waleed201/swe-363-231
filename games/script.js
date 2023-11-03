let circles = document.getElementsByClassName("circle")
let reset = document.getElementsByClassName("reset")[0]
let frm = document.getElementById("frm")
let rows = document.getElementsByClassName("roow")
let turnButtun = document.querySelector(".turn")
let names = document.querySelectorAll(".resolt div")

let currentPlayer = 0

for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", circleClicked)
    circles[i].addEventListener("mouseover", circleMouseOver)
    circles[i].addEventListener("mouseout", circleMouseOut)
}

function circleClicked(event) {
    if (currentPlayer === 0) {
        const circle1 = event.target;
        if (circle1.style.opacity !== "0.25") {
            circle1.style.opacity = 0.25;
            circle1.classList.add("chiched");
            circle1.style.backgroundColor = currentPlayer == 0 ? "#af0101" : "#00b400";
            //currentPlayer = 1 - currentPlayer; // Switch to the other player
            checkWinner();
        }
    }
    else{
        const circle1 = event.target;
        if (circle1.style.opacity !== "0.25") {
            circle1.style.opacity = 0.25;
            circle1.classList.add("chiched");
            circle1.style.backgroundColor = currentPlayer == 1 ? "#00b400" : "#af0101";
            //currentPlayer = 1 - currentPlayer; // Switch to the other player
            checkWinner();
        }

    }
}

function circleMouseOver(event) {
    circle1 = event.target;
    if (circle1.style.opacity !== "0.25") {
        circle1.style.opacity = 0.7;
    }
}

function circleMouseOut(event) {
    const circle1 = event.target;
    if (circle1.style.opacity !== "0.25") {
        circle1.style.opacity = 1;
    }
}

function checkWinner() {
    // Implement your logic to check for a winning condition here
    // You can update the "prev" div or display a message when a player wins.
}




reset.addEventListener("click", resetClicked)

function resetClicked(event) {
    resolt = document.querySelectorAll(".resolt")
    // names = document.querySelectorAll(".resolt div")
    inter = document.querySelector(".inter")
    prev = document.querySelector(".inter .prev")

    inter = document.querySelector(".inter")
    names[0].innerText = frm.elements[0].value
    names[0].style.borderColor = "#772b2b"
    names[1].innerText = frm.elements[1].value
    inter.style.display = "block"
    frm.style.display = "none"
    // resolt.style.display = "flex"
    //inter.style.display = "block"

    prev.innerText = ""

    if(currentPlayer == 1){
        names[0].style.boxShadow = "0px 0px 0px #81e4e6"
        names[1].style.boxShadow = "0px 0px 30px #00b400"
    }else{
        names[0].style.boxShadow = "0px 0px 30px #af0101"
        names[1].style.boxShadow = "0px 0px 0px #81e4e6"
    }


    for (let i = 0; i < circles.length; i++) {
        circles[i].style.pointerEvents = "fill";
        circles[i].style.opacity = 1
        circles[i].style.backgroundColor = "rgba(20, 20, 180, 0.796)"
    }
    reset = document.querySelector(".reset")
    reset.innerText = "Restart"
}

turnButtun.addEventListener("click",turnClicked)

function turnClicked(){
    //currentPlayer = 1 - currentPlayer;
    if(currentPlayer == 0){
        currentPlayer = 1 - currentPlayer
        names[0].style.boxShadow = "0px 0px 0px #81e4e6"
        names[1].style.boxShadow = "0px 0px 30px #00b400"

    }else{
        currentPlayer = 1 - currentPlayer
        names[0].style.boxShadow = "0px 0px 30px #af0101"
        names[1].style.boxShadow = "0px 0px 0px #81e4e6"

    }
    
}

document.addEventListener("keydown", handleKeyPress);


function handleKeyPress(event) {
    // Add logic to handle keyboard input for playing the game
    // For example, use arrow keys or other keys to make a move.
    // Update the "circleClicked" function accordingly.

    if (true) {
        const selectedCircle = document.querySelector(".circle.chiched");
        if (!selectedCircle) return; // No circle selected

        if (event.shiftKey && event.key === "Enter") {
            turnClicked()
            console.log("Shift+Enter key combination is detected.");
        }
    
        switch (event.key) {
            case "ArrowUp":
                moveUp(selectedCircle);
                break;
            case "ArrowDown":
                moveDown(selectedCircle);
                break;
            case "Enter":
                break;
        }

    }

}






//