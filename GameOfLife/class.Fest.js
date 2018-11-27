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
    chooseCellDie(character) {
        this.getNewCoordinatesDie();
        return super.chooseCellDie(character);
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
        var AllCell1 = this.chooseCellDie(1);
        var AllCell2 = this.chooseCellDie(2);
        var AllCell3 = this.chooseCellDie(3);
        var AllCell4 = this.chooseCellDie(4);

        for (this.i in this.getNewCoordinatesDie) {
            if(this.getNewCoordinatesDie[i] == AllCell1 || this.getNewCoordinatesDie[i] == AllCell2 ||  this.getNewCoordinatesDie[i] == AllCell3 || this.getNewCoordinatesDie[i] == AllCell4 )
            var x = this.getNewCoordinatesDie[i][0];
            var y = this.getNewCoordinatesDie[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                matrix[this.y][this.x] = 0;
            }
        }
    }
}





