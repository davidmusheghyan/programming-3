
var side = 12;

var voch = [];
// var ThunderArr = [];
var grassArr = [];
var grassEater = [];
var Gish = [];
var stex = [];
var a;

var n = 40;
var m = 40;

var matrix = [];
var weather = 1;

var weatherName = document.getElementById("season");

setInterval(function () {
    weather++
    if (weather > 4) {
        weather = 1;
    }


}, 10000);


// setInterval(function(){
//     console.log("hit");
//     var newThunderArr = new thunder(x, y);
//     ThunderArr.push(newThunderArr);


//     matrix[y][x] = 6;

    
// },5555)


// function Thunder() {
//     ThY = random(0,matrix.length);
//     ThX = random(0,matrix[0].length);
    

// }

function framerate() {
    if (weather == 1) {
        a = 12;
    }
    else if (weather == 2) {
        a = 9;
    }
    else if (weather == 3) {
        a = 6;
    }
    else if (weather == 4) {
        a = 1;
    }

}

function myFunction() {
    if (weather == 1) {
        weatherName.innerHTML = "spring"
    }
    else if (weather == 2) {
        weatherName.innerHTML = "summer"
    }
    else if (weather == 3) {
        weatherName.innerHTML = "autumn"
    }
    else if (weather == 4) {
        weatherName.innerHTML = "winter"
    }
}

function setup() {
    background('#acacac');

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
            if (matrix[y][x] == 3) {
                Gish.push(new Gishatich(x, y));
            }
            if (matrix[y][x] == 5) {
                stex.push(new stexcoxik(x, y));
            }
            if (matrix[y][x] == 4) {
                voch.push(new Vochvokik(x, y));
            }
            //  if (matrix[y][x] == 6) {
            //      ThX = x;
            //     ThY = y;
            //      ThunderArr.push(new thunder(x, y));
            // }
           
        }

    }

}


function draw() {
    drawMatrix();
    myFunction();
    framerate();
    frameRate(a);
    // Thunder();  

    for (var i in grassEater) {
        grassEater[i].eat();
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in Gish) {
        Gish[i].eat();

        // for (var i in ThunderArr) {
        //     ThunderArr[i].eat();
        // }
        for (var i in stex) {
            stex[i].stexc();
        }
        for (var i in voch) {
            voch[i].eat();
        }
    }


    function drawMatrix() {




        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] == 1) {
                    fill("green");

                    if (weather == 2) {
                        fill("#00b100");
                    }
                    else if (weather == 3) {
                        fill("#f79c00");
                    }
                    else if (weather == 4) {
                        fill("#d9ebe5");
                    }
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }

                else if (matrix[y][x] == 2) {
                    for (var i in grassEater) {
                        if (grassEater[i].x == x && grassEater[i].y == y) {
                            if (grassEater[i].genus == 0) {
                                fill("yellow");
                            } else {
                                fill("orange");
                            }

                        }
                    }

                    if (weather == 2) {
                        for (var i in grassEater) {
                            if (grassEater[i].x == x && grassEater[i].y == y) {
                                if (grassEater[i].genus == 0) {
                                    fill("#dcff00");
                                } else {
                                    fill("#eeb945");
                                }

                            }
                        }

                    }
                    else if (weather == 3) {
                        for (var i in grassEater) {
                            if (grassEater[i].x == x && grassEater[i].y == y) {
                                if (grassEater[i].genus == 0) {
                                    fill("#cec600");
                                } else {
                                    fill("#be5a00");
                                }

                            }
                        }

                    }
                    else if (weather == 4) {
                        for (var i in grassEater) {
                            if (grassEater[i].x == x && grassEater[i].y == y) {
                                if (grassEater[i].genus == 0) {
                                    fill("#fffcdb");
                                } else {
                                    fill("#ffecd1");
                                }

                            }
                        }

                    }
                    rect(x * side, y * side, side, side);
                }

                else if (matrix[y][x] == 3) {
                    fill("red");

                    if (weather == 2) {
                        fill("#fd003d");
                    }
                    else if (weather == 3) {
                        fill("#b6002c");
                    }
                    else if (weather == 4) {
                        fill("#ffedef");
                    }
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("blue");
                    if (weather == 2) {
                        fill("#0085ff");
                    }
                    else if (weather == 3) {
                        fill("#003dc1");
                    }
                    else if (weather == 4) {
                        fill("#c9d3ff");
                    }
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("SaddleBrown");
                    rect(x * side, y * side, side, side);
                }
                // else if (matrix[y][x] == 6) {
                //     fill("DarkBlack");
                //     rect(x * side, y * side, side, side);
                // }

            }
        }


    }

}



