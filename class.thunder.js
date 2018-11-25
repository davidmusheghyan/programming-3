class thunder extends Base {
    constructor(x, y) {
        super(x, y);
        this.MIN_energy = 2;
        this.energy = 5;
        this.arrayOrder = [null, grassArr, grassEater, Gish, voch, stex];
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

    hit() {
        console.log("shlor");
        this.getNewCoordinates();
        if (this.directions) {
            for (var i in this.directions) {
                if(this.directions && this.directions[i]){
                    for (var k in this.arrayOrder[
                        matrix[
                        this.directions[1][1]
                        ][
                        this.direction[1][1]
                        ]
                    ]) {
                        let arr = this.arrayOrder[
                            matrix[
                            this.directions[i][1]
                            ][
                            this.direction[i][0]
                            ]
                        ];
                        if(this.x==arr[k].x&&this.y==arr[k].y){
                            arr.splice(k,1);
                            matrix[arr[k].y][arr[k].x]=0;
                            console.log("b");
                        }
                    }
                }
            }
        }

    }
}