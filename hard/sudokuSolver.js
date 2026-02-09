/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {

    //create array of empty positions
    let emptyCells = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                emptyCells.push([i, j]);
            }
        }
    }

    //define set for maintain unique items in rows and cols and boxes
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    //fill sets by numbers that already exist in board
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let val = board[i][j];
            if (val !== '.') {
                rows[i].add(val);
                cols[j].add(val);
                let boxId = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                boxes[boxId].add(val);
            }
        }
    }

    //call dfs recursive
    dfs({index:0,rows, cols, boxes, board,emptyCells})
};

function dfs(data) {
    const {index,rows, cols, boxes, board,emptyCells}=data
    //base condition
    if (index == emptyCells.length) {
        return true
    }

    //initionalize boxId and next empty cell
    const [i, j] = emptyCells[index]
    const boxId = Math.floor(i / 3) * 3 + Math.floor(j / 3)

    for (let num = 1; num <= 9; num++) {
        let char = num.toString();

        if (!rows[i].has(char) && !cols[j].has(char) && !boxes[boxId].has(char)) {

            //pre condition
            board[i][j] = char
            rows[i].add(char)
            cols[j].add(char)
            boxes[boxId].add(char)

            //recursive
            if (dfs({...data,index:index+1})) return true

            //post condition
            board[i][j] = char
            rows[i].delete(char)
            cols[j].delete(char)
            boxes[boxId].delete(char)
        }
    }

    //not valid board
    return false
}

