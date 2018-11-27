class stexcoxik extends Base{
    constructor(x, y) {
       super(x,y)
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
            

            matrix[y][x] = 1;
        }

        else if (grassEater.length <= 35) {
            if (emptyCells.length != 0) {
                var randomCell = random(emptyCells);

                var x = randomCell[0];
                var y = randomCell[1];

                var newgrassEater = new GrassEater(x, y);
                grassEater.push(newgrassEater);

                

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

                var newVoch = new Vochvokik(x, y);
                voch.push(newVoch);


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
                var newVoch = new Vochvokik(x, y);
                voch.push(newVoch);


                matrix[y][x] = 4;

            }
        }
       
        else if (fest.length <= 1) {
             if (emptyCells.length != 0) {
                var randomCell = random(emptyCells);

                var x = randomCell[0];
                var y = randomCell[1];

                var newFest = new Fest(x, y);
                fest.push(newFest);


                matrix[y][x] = 6;

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
                var newFest = new Fest(x, y);
                fest.push(newFest);


                matrix[y][x] = 6;
                a = 0;

            }
        
        }
   
   
    }


}