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
    nukeGrid();
//  -create row * sizeInput
//      -create item on row * sizeInput
            //  -addEventListener for hover => draw
            //      -
}

//Grid Deletion
function nukeGrid(){

}
//Drawing on Grid
function draw(){
    //change css opacity property by 10%
}
