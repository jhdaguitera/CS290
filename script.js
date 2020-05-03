

/************************************************************** 
creating table
*************************************************************/
function createTable() {

    //create table    
    var table = document.createElement("table");
    //style
    table.style.borderStyle = "solid";
    table.style.backgroundColor = "white";
    //create row
    var row = document.createElement("tr");

    //creating headers for table
    var heading = ["Heading 1", "Heading 2", "Heading 3", "Heading 4"];

    for (var i = 0; i < heading.length; i++) {
        var theader = document.createElement("th");

        headerText = document.createTextNode(heading[i]);

        //appending text to header cells
        theader.appendChild(headerText);
        row.appendChild(theader);
        //id
        theader.id = heading[i];
        //style
        theader.style.borderStyle = "solid";

        theader.style.backgroundColor = "aqua";

        //appending this row to table
        table.appendChild(row);
    }

    for (var i = 0; i < 3; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 4; j++) {
            //create cells
            var dataCell = document.createElement("td");
            //text in cell
            var dataText = document.createTextNode("[" + (i + 1) + ", " + (j + 1) + "]");
            //append text to cell
            dataCell.appendChild(dataText);
            //id
            dataCell.id = (i + 1) + ", " + (j + 1);
            //style
            dataCell.style.borderStyle = "solid";
            //append cell to row
            row.appendChild(dataCell);
        }
        //append row to table
        table.appendChild(row);
    }

    //append table to body
    document.body.appendChild(table);

}

createTable();



/************************************************************** 
creating directional buttons
*************************************************************/
function createButton() {

    //create direction buttons and mark button
    var buttonType = ["up", "down", "left", "right", "mark cell"];

    for (var i = 0; i < buttonType.length; i++) {
        //button created 
        var button = document.createElement("button");

        //button appended to html body
        document.body.appendChild(button);

        //creating button text
        buttonText = document.createTextNode(buttonType[i]);

        //apprend text to button
        button.appendChild(buttonText);

        //creating ID
        button.id = buttonType[i];

    }

}


createButton();

/************************************************************** 
move cursor around
*************************************************************/
var curRow = 1;
var curCol = 1;

var minRow = 0;
var minCol = 0;

var maxRow = 4;
var maxCol = 5;


var idCell = curRow + ", " + curCol;
var currentCell = document.getElementById(idCell);
currentCell.style.borderWidth = "thick";


function move(event) {

    if (this.id === "down") {
        if (curRow + 1 < maxRow) {

            currentCell.style.borderWidth = "medium";
            curRow = curRow + 1;
            var idCell = curRow + ", " + curCol;

            currentCell = document.getElementById(idCell);
            currentCell.style.borderWidth = "thick";
        }

    }

    if (this.id === "up") {
        if (curRow - 1 > minRow) {

            currentCell.style.borderWidth = "medium";
            curRow = curRow - 1;
            var idCell = curRow + ", " + curCol;

            currentCell = document.getElementById(idCell);
            currentCell.style.borderWidth = "thick";

        }

    }

    if (this.id === "right") {
        if (curCol + 1 < maxCol) {

            currentCell.style.borderWidth = "medium";
            curCol = curCol + 1;
            var idCell = curRow + ", " + curCol;

            currentCell = document.getElementById(idCell);
            currentCell.style.borderWidth = "thick";

        }

    }

    if (this.id === "left") {
        if (curCol - 1 > minCol) {

            currentCell.style.borderWidth = "medium";
            curCol = curCol - 1;
            var idCell = curRow + ", " + curCol;

            currentCell = document.getElementById(idCell);
            currentCell.style.borderWidth = "thick";

        }

    }

}



/************************************************************** 
mark cells
*************************************************************/
function mark(event) {
    currentCell.style.backgroundColor = "yellow";
}



//add listeners
document.getElementById("up").addEventListener("click", move);
document.getElementById("down").addEventListener("click", move);
document.getElementById("left").addEventListener("click", move);
document.getElementById("right").addEventListener("click", move);
document.getElementById("mark cell").addEventListener("click", mark);