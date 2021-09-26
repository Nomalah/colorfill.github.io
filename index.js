const colors = {
    RED: 0,
    GREEN: 1,
    BLUE: 2,
    PURPLE: 3,
    WHITE: 4,
    ORANGE: 5,
    toLetter: x => ["R", "G", "B", "P", "W", "O"][x]
};

let map = Array.from({ length: 12 }, y => Array.from({ length: 12 }, x =>  Math.floor(Math.random() * 6) ) );

function printMap(){
    for(let row of map){
        let rowString = "";
        for(let cell of row){
            rowString += colors.toLetter(cell);
        }
        console.log(rowString);
    }
}

function fill(fillInto, fillWith, cellx, celly){
    if(cellx >= 12 || celly >= 12 || cellx < 0 || celly < 0){
        return;
    }
    if(map[celly][cellx] == fillWith || map[celly][cellx] != fillInto){
        return;
    }

    map[celly][cellx] = fillWith;
    fill(fillWith, cellx + 1, celly    );
    fill(fillWith, cellx - 1, celly    );
    fill(fillWith, cellx    , celly + 1);
    fill(fillWith, cellx    , celly - 1);
}

document.getElementById("red").addEventListener("click", function() {
    fill(map[0][0], colors.RED, 0, 0);
    printMap();
});

document.getElementById("green").addEventListener("click", function() {
    fill(map[0][0], colors.GREEN, 0, 0);
    printMap();
});

document.getElementById("blue").addEventListener("click", function() {
    fill(map[0][0], colors.BLUE, 0, 0);
    printMap();
});

document.getElementById("purple").addEventListener("click", function() {
    fill(map[0][0], colors.PURPLE, 0, 0);
    printMap();
});

document.getElementById("white").addEventListener("click", function() {
    fill(map[0][0], colors.WHITE, 0, 0);
    printMap();
});

document.getElementById("orange").addEventListener("click", function() {
    fill(map[0][0], colors.ORANGE, 0, 0);
    printMap();
});