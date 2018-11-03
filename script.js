

var side = 12;

var grassArr = [];
var grassEater = [];
var Gish = [];
var voch = [];
var stex = [];

var n = 40;
var m = 40;

var matrix = [];

function setup() {
    background('#acacac');
    frameRate(12);
    for (var y = 0; y < n; y++) {
        matrix[y] = [];

        for (var x = 0; x < m; x++) {
            matrix[y][x] = Math.round(Math.random() * 2);
        }

    }

    matrix[2][2] = 5;
    matrix[36][36] = 5;
    matrix[14][18] = 4;
    matrix[31][22] = 4;
    matrix[11][27] = 4;
    matrix[33][12] = 3;
    matrix[14][20] = 3;
    matrix[12][18] = 3;
    matrix[33][22] = 3;
    matrix[14][2] = 3;
    matrix[12][11] = 3;



    createCanvas(matrix[0].length * side, matrix.length * side);



    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }

            if (matrix[y][x] == 2) {
                grassEater.push(new GrassEater(x, y));
            }
            if (matrix[y][x] == 4) {
                voch.push(new vochvokik(x, y));
            }
            if (matrix[y][x] == 3) {
                Gish.push(new Gishatich(x, y));
            }
            if (matrix[y][x] == 5) {
                stex.push(new stexcoxik(x, y));
            }
        }

    }


}
function draw() {
    drawMatrix();


    for (var i in grassEater) {
        grassEater[i].eat();
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in Gish) {
        Gish[i].eat();

        for (var i in voch) {
            voch[i].eat();
        }
        for (var i in stex) {
            stex[i].stexc();
        }
    }


    function drawMatrix() {




        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] == 1) {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }

                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                }

                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("blue");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("SaddleBrown");
                    rect(x * side, y * side, side, side);
                }
            }
        }


    }

}



