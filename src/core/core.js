export const generateBits = (n) => {
    let arr = [];

    /* let row = []; */
    /* for (var i = (Math.pow(2, n) - 1); i >= 0; i--) {
        row = [];
        for (var j = (n - 1); j >= 0; j--) {
            row.push((i & Math.pow(2, j)) ? false : true)
        }
        arr.push(row);
    } */

    switch (n) {
        case 1:
            arr = [[false], [true]];
            break;
        case 2:
            arr = [[false, false], [false, true], [true, true], [true, false]];
            break;
        case 3:
            arr = [[false, false, false], [false, false, true], [false, true, true], [false, true, false], [true, true, false], [true, true, true], [true, false, true], [true, false, false]];
            break;
        case 4:
            arr = [[false, false, false, false], [false, false, false, true], [false, false, true, true], [false, false, true, false], [false, true, true, false], [false, true, true, true], [false, true, false, true], [false, true, false, false], [true, true, false, false], [true, true, false, true], [true, true, true, true], [true, true, true, false], [true, false, true, false], [true, false, true, true], [true, false, false, true], [true, false, false, false]];
            break;
    }

    return arr;
}

export const CreateMap = (col, fil, HeaderBody) => {
    var map = [];
    var row = [];
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < fil + 1; j++) {
            if (j == 0) {
                row.push(HeaderBody[i])
            } else {
                row.push(0);
            }
        }
        map.push(row);
        row = [];
    }
    return map;
}

export const getIndexOf = (arr1, arr2) => {
    for (let x = 0; x < arr1.length; x++) {
        if (JSON.stringify(arr2) === JSON.stringify(arr1[x])) {
            return arr1.indexOf(arr1[x]);
        }
    }
}

export const getLetters = (state) => {
    return state.map((e) => e.letter);
}