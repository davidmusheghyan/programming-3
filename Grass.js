class Grass extends Base {
    constructor(x, y) {
        super(x,y,max);
        this.max = 3;
        this.multiply = Math.random(random(0, 1));
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