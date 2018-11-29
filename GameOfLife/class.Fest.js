class Fest extends Base {
    constructor(x, y) {
        super(x, y)
        this.MIN_energy = 2;
        this.energy = 19;
        this.i;
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
    getNewCoordinatesDie() {
        this.directionsDie = [
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y - 2],
            [this.x - 1, this.y - 3],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 3],
            [this.x - 3, this.y - 1],
            [this.x - 3, this.y - 2],
            [this.x - 3, this.y - 3],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y + 2],
            [this.x - 1, this.y + 3],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 3],
            [this.x - 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y + 2],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 1],
            [this.x + 3, this.y + 2],
            [this.x + 3, this.y + 3],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y - 2],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 1],
            [this.x + 3, this.y - 2],
            [this.x + 3, this.y - 3]


        ];
    }



    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    chooseCellDie(characterDie) {
        var found = [];
        for (var i in this.directionsDie) {
            var x = this.directionsDie[i][0];
            var y = this.directionsDie[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directionsDie[i]);
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

            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }


            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
        this.die();
    }



    die() {

        if (this.energy == 0) {
            for (var i in fest) {
                if (this.x == fest[i].x && this.y == fest[i].y) {
                    fest.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
            this.boom();
        }
    }

    boom() {
        var emptyCells = this.chooseCellDie(1);
        if (emptyCells.length != 0) {

            var randomCell = random(emptyCells)

            var x = randomCell[0];
            var y = randomCell[1];

            matrix[y][x] = 0;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            for (var i in grassArr) {
                if (this.x == grassArr.length[i].x && this.y == grassArr.length[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
       
        }
    }
}

