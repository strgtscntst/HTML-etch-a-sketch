//references
const sizeButton = document.querySelector("#sizeChange");
const playArea = document.querySelector("#container");

//Size Button
sizeButton.addEventListener("click", () => {
    let sizeInput = prompt("New board size (max 100) :");
    if(isNaN(sizeInput) || sizeInput > 100){
        alert("Bad dog")
    }else{
        nukeGrid();
        drawBoard(sizeInput);
    };
})

//Grid Creation
function drawBoard(size){

    //  -create row * sizeInput
    for(var i = 0; i < size; i++){
        let row = document.createElement("div");
        row.classList = "gridRow";
        for(var x =0; x < size; x++){
            let cell = document.createElement("div");
            cell.classList = "gridCell";
            //draw
            cell.addEventListener("mouseenter", () => draw(cell));
            row.appendChild(cell);
        }
        playArea.appendChild(row);
    }
}

//Grid Deletion
function nukeGrid(){
    while(playArea.firstChild){
        playArea.removeChild(playArea.firstChild);
    }
}
//Drawing on Grid
function draw(cell){
    cell.style.background = "black"
    //change css opacity property by 10%
}
