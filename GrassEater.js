class GrassEater  extends Base{
    
    constructor(x, y) {
        super(x,y)
        this.MIN_energy = 2;
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