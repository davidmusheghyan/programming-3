class GrassEater extends Base {

    constructor(x, y) {
        super(x, y)
        this.MIN_energy = 2;
        this.energy = 5;
        this.genus  = Math.round(random(0,1));
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
        return super.chooseCell(character);
    }

    move() {
        this.energy--;

        var emptyCells = this.chooseCell(0, 2);

        this.mult();

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
        this.mult();
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
    }


    mult() {
        var emptyCells = this.chooseCell(1);
        var grassEaterCells = random(this.chooseCell(2));
        var foundedObj;
        if(grassEaterCells){
            for(var i in grassEater){
                if(grassEater[i].x==grassEaterCells[0]&&grassEater[i].y==grassEaterCells[1]){
                    foundedObj=grassEater[i];
                    console.log("a");
                }
            }
        }
        if(foundedObj){
        if (this.genus != foundedObj.genus) {
            if (this.energy >= 10) {
                if (emptyCells.length != 0) {
                    var randomCell = random(emptyCells);
                    var x = randomCell[0];
                    var y = randomCell[1];
                    
                    for (var i in grassArr) {
                        if (emptyCells[0] == grassArr[i].x && emptyCells[1] == grassArr[i].y) {
                            grassArr.splice(i, 1);
                            break;
                        }
                    }

                    var newgressEater = new GrassEater(x, y);
                    grassEater.push(newgressEater);

                    matrix[y][x] = 2;
                    this.energy = 5;
                    console.log("Bazmacan");
                }
            }
        }
    }
    }
}