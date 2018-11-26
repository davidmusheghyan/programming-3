// class thunder extends Base{
//     constructor(x, y) {
//         super(x,y)
//         this.energy = 20;
//         this.directionsFood = [];
//         this.directionsMove = [];
//         this.birthCount = 0;
//     }

//     getNewCoordinatesMove() {
//         this.directionsMove = [
//             [this.x - 1, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     getNewCoordinatesFood() {
//         this.directionsFood = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }

//     chooseCellMove(character) {

//         this.getNewCoordinatesMove();

//         var found = [];
//         for (var i in this.directionsMove) {
//             var x = this.directionsMove[i][0];
//             var y = this.directionsMove[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character) {
//                     found.push(this.directionsMove[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     chooseCellFood(character) {

//         this.getNewCoordinatesFood();

//         var found = [];
//         for (var i in this.directionsFood) {
//             var x = this.directionsFood[i][0];
//             var y = this.directionsFood[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character) {
//                     found.push(this.directionsFood[i]);
//                 }
//             }
//         }
//         return found;
//     }


//     move() {
//         this.energy--;

//         var emptyCells = this.chooseCellMove(0);

//         if (emptyCells.length != 0) {
//             var randomCell = random(emptyCells);

//             var x = randomCell[0];
//             var y = randomCell[1];


//             matrix[y][x] = 4;
//             matrix[this.y][this.x] = 0;

//             this.x = x;
//             this.y = y;

//         }
//         this.die();
//     }
//     die() {

//         if (this.energy <= 0 || this.birthCount == 3) {
//             matrix[this.y][this.x] = 0;
//             for (var i in ThunderArr) {
//                 if (this.x == ThunderArr[i].x && this.y == ThunderArr[i].y) {
//                     ThunderArr.splice(i, 1);
//                     break;
//                 }
//             }

//         }
//     }

//     eat() {
//         var emptyCells = this.chooseCellFood(2);
//         var emptyCells = this.chooseCellFood(1);
//         var emptyCells = this.chooseCellFood(3);
//         if (emptyCells.length != 0) {

//             var randomCell = random(emptyCells)

//             var x = randomCell[0];
//             var y = randomCell[1];

//             matrix[y][x] = 4;
//             matrix[this.y][this.x] = 0;

//             this.x = x;
//             this.y = y;

//             this.energy++;


//             for (var i in grassEater) {
//                 if (this.x == grassEater[i].x && this.y == grassEater[i].y) {
//                     grassEater.splice(i, 1);
//                     break;
//                 }
//             }
//         } else {
//             this.move();
//         }

//         this.mult();
//     }
//     mult() {
//         if (this.energy >= 20) {
//             for (var i = 0; i < 2; i++) {
//                 var emptyCells = this.chooseCellMove(0);

//                 if (emptyCells.length != 0) {

//                     var randomCell = random(emptyCells);

//                     var x = randomCell[0];
//                     var y = randomCell[1];

//                     var newThunderArr = new thunder(x, y);
//                     ThunderArr.push(newThunderArr);

//                     matrix[y][x] = 4;
//                 }
//             }
//             this.birthCount++;
//             this.energy = 5;
//         }
//     }
// }
