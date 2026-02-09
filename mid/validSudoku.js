/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let length = board[0].length;

    for (let i = 0; i < length; i++) {

        const rows = new Map();
        const cols = new Map();

        for (let j = 0; j < length; j++) {
            let itemver = board[i][j]
            let itemhor = board[j][i]

            let savedItemver = rows.has(itemver)
            let savedItemhor = cols.has(itemhor)


            if (savedItemhor && itemhor != ".") {
                return false
            }

            if (savedItemver && itemver != ".") {
                return false
            }

            if (!savedItemver && itemver != ".") {
                rows.set(itemver, [i, j])
            }

            if (!savedItemhor && itemhor != ".") {
                cols.set(itemhor, [j, i])
            }

        }
    }
    return true
};



/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const n = 9;

    for (let i = 0; i < n; i++) {
        const rowMap = new Map();
        const colMap = new Map();
        const boxMap = new Map();

        for (let j = 0; j < n; j++) {
            const rowVal = board[i][j];
            const colVal = board[j][i];

            if (rowVal !== "." && rowMap.has(rowVal)) return false;
            if (rowVal !== ".") rowMap.set(rowVal, true);
            if (colVal !== "." && colMap.has(colVal)) return false;
            if (colVal !== ".") colMap.set(colVal, true);

            const boxRow = Math.floor(i / 3) * 3;
            const boxCol = Math.floor(j / 3) * 3;
            const boxId = `${boxRow}-${boxCol}`;

            const boxVal = board[i][j];

            if (boxVal !== ".") {
                if (!boxMap.has(boxId)) boxMap.set(boxId, new Map());

                const currentBox = boxMap.get(boxId);

                if (currentBox.has(boxVal)) return false;

                currentBox.set(boxVal, true);
            }
        }
    }

    return true;
};