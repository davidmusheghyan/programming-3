class Gishatich extends Base{
    constructor(x, y) {
       super(x,y)
        this.MIN_energy = 2;
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
