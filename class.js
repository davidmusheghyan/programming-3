class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.max = 3;
        this.multiply = Math.random(random(0, 1));

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {

        this.multiply++;

        var emptyCells = this.chooseCell(0);

        if (emptyCells.length != 0 && this.multiply >= 2) {
            var randomCell = random(emptyCells);

            var x = randomCell[0];
            var y = randomCell[1];

            var newGrass = new Grass(x, y);
            grassArr.push(newGrass);

            matrix[y][x] = 1;
            this.multiply = 0;

        }

    }

}

class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.MIN_energy = 2;
        this.directions = [];
        this.energy = 5;

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {

        this.getNewCoordinates();

        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move() {
        this.energy--;

        var emptyCells = this.chooseCell(0, 2);


        if (emptyCells.length != 0) {
            var randomCell = random(emptyCells);

            var x = randomCell[0];
            var y = randomCell[1];


            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
        this.die();
    }
    die() {

        if (this.energy == 0) {
            for (var i in grassEater) {
                if (this.x == grassEater[i].x && this.y == grassEater[i].y) {
                    grassEater.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }

        }
    }

    eat() {
        var emptyCells = this.chooseCell(1);
        if (emptyCells.length != 0) {
            this.energy++;
            var randomCell = random(emptyCells)
            var x = randomCell[0];
            var y = randomCell[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

        } else {
            this.move();
        }

        this.mult();
    }


    mult() {

        var emptyCells = this.chooseCell(0);
        if (this.energy >= 10) {
            if (emptyCells.length != 0) {
                var randomCell = random(emptyCells);
                var x = randomCell[0];
                var y = randomCell[1];

                var newgressEater = new GrassEater(x, y);
                grassEater.push(newgressEater);

                matrix[y][x] = 2;
                this.energy = 5;
            }

        }
    }
}



class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.MIN_energy = 2;
        this.directions = [];
        this.energy = 10;

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {

        this.getNewCoordinates();

        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move() {
        this.energy--;

        var emptyCells = this.chooseCell(0);

        if (emptyCells.length != 0) {
            var randomCell = random(emptyCells);

            var x = randomCell[0];
            var y = randomCell[1];


            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }

        this.die();
    }
    die() {

        if (this.energy < this.MIN_energy) {
            matrix[this.y][this.x] = 0;
            for (var i in Gish) {
                if (this.x == Gish[i].x && this.y == Gish[i].y) {
                    Gish.splice(i, 1);
                    break;
                }
            }

        }
    }

    eat() {
        var emptyCells = this.chooseCell(2);

        if (emptyCells.length != 0) {

            var randomCell = random(emptyCells)

            var x = randomCell[0];
            var y = randomCell[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.energy++;


            for (var i in grassEater) {
                if (this.x == grassEater[i].x && this.y == grassEater[i].y) {
                    grassEater.splice(i, 1);
                    break;
                }
            }
        } else {
            this.move();
        }

        this.mult();
    }

    mult() {
        if (this.energy >= 15) {
            var emptyCells = this.chooseCell(0);

            if (emptyCells.length != 0) {
                var randomCell = random(emptyCells);
                var x = randomCell[0];
                var y = randomCell[1];

                var newgish = new Gishatich(x, y);
                Gish.push(newgish);

                matrix[y][x] = 3;

                this.energy = 5;
            }

        }
    }
}


class vochvokik {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directionsFood = [];
        this.directionsMove = [];
        this.birthCount = 0;
    }

    getNewCoordinatesMove() {
        this.directionsMove = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewCoordinatesFood() {
        this.directionsFood = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCellMove(character) {

        this.getNewCoordinatesMove();

        var found = [];
        for (var i in this.directionsMove) {
            var x = this.directionsMove[i][0];
            var y = this.directionsMove[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directionsMove[i]);
                }
            }
        }
        return found;
    }
    chooseCellFood(character) {

        this.getNewCoordinatesFood();

        var found = [];
        for (var i in this.directionsFood) {
            var x = this.directionsFood[i][0];
            var y = this.directionsFood[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directionsFood[i]);
                }
            }
        }
        return found;
    }


    move() {
        this.energy--;

        var emptyCells = this.chooseCellMove(0);

        if (emptyCells.length != 0) {
            var randomCell = random(emptyCells);

            var x = randomCell[0];
            var y = randomCell[1];


            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
        this.die();
    }
    die() {

        if (this.energy <= 0 || this.birthCount == 3) {
            matrix[this.y][this.x] = 0;
            for (var i in voch) {
                if (this.x == voch[i].x && this.y == voch[i].y) {
                    voch.splice(i, 1);
                    break;
                }
            }

        }
    }

    eat() {
        var emptyCells = this.chooseCellFood(2);

        if (emptyCells.length != 0) {

            var randomCell = random(emptyCells)

            var x = randomCell[0];
            var y = randomCell[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.energy++;


            for (var i in grassEater) {
                if (this.x == grassEater[i].x && this.y == grassEater[i].y) {
                    grassEater.splice(i, 1);
                    break;
                }
            }
        } else {
            this.move();
        }

        this.mult();
    }
    mult() {
        if (this.energy >= 20) {
            for (var i = 0; i < 2; i++) {
                var emptyCells = this.chooseCellMove(0);

                if (emptyCells.length != 0) {

                    var randomCell = random(emptyCells);

                    var x = randomCell[0];
                    var y = randomCell[1];

                    var newvoch = new vochvokik(x, y);
                    voch.push(newvoch);

                    matrix[y][x] = 4;
                }
            }
            this.birthCount++;
            this.energy = 5;
        }
    }
}

class stexcoxik {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.MIN_energy = 2;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }

    chooseCell(character) {

        this.getNewCoordinates();

        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    stexc() {

        var emptyCells = this.chooseCell(0);
        var emptyCells2 = this.chooseCell(1);

        if (emptyCells.length != 0 && grassArr.length <= 50) {
            var randomCell = random(emptyCells);

            var x = randomCell[0];
            var y = randomCell[1];

            var newgrass = new Grass(x, y);
            grassArr.push(newgrass);
            console.log("stexcec");


            matrix[y][x] = 1;
        }

        else if (grassEater.length <= 35) {
            if (emptyCells.length != 0) {
                var randomCell = random(emptyCells);

                var x = randomCell[0];
                var y = randomCell[1];

                var newgrassEater = new GrassEater(x, y);
                grassEater.push(newgrassEater);

                console.log("Stexcec")

                matrix[y][x] = 2;
            }
            else if (emptyCells2.length != 0) {
                var randomCell = random(emptyCells2);

                var x = randomCell[0];
                var y = randomCell[1];

                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }

                var newgrassEater = new GrassEater(x, y);
                grassEater.push(newgrassEater);



                matrix[y][x] = 2;
            }
        }
        else if (Gish.length <= 20) {
            if (emptyCells.length != 0) {
                var randomCell = random(emptyCells);

                var x = randomCell[0];
                var y = randomCell[1];

                var newgish = new Gishatich(x, y);
                Gish.push(newgish);


                matrix[y][x] = 3;

            }
            else if (emptyCells2.length != 0) {
                var randomCell = random(emptyCells2);

                var x = randomCell[0];
                var y = randomCell[1];

                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                var newgish = new Gishatich(x, y);
                Gish.push(newgish);


                matrix[y][x] = 3;

            }
        }
        else if (voch.length <= 20) {
            if (emptyCells.length != 0) {
                var randomCell = random(emptyCells);

                var x = randomCell[0];
                var y = randomCell[1];

                var newvoch = new vochvokik(x, y);
                voch.push(newvoch);



                matrix[y][x] = 4;
            }
            else if (emptyCells2.length != 0) {
                var randomCell = random(emptyCells2);

                var x = randomCell[0];
                var y = randomCell[1];

                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }

                var newvoch = new vochvokik(x, y);
                voch.push(newvoch);

                matrix[y][x] = 4;
            }

        }
    }


}