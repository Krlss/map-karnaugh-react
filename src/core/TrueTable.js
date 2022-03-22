const TrueTable = (data) => {
    let _TrueTable = [];
    let row = [];

    let checked = data.map((e) => e.checked);

    for (var i = (Math.pow(2, data.length) - 1); i >= 0; i--) {
        row = [];
        for (var j = (data.length - 1); j >= 0; j--) {
            row.push((i & Math.pow(2, j)) ? true : false)
        }
        row.push(getResult(row, checked));
        _TrueTable.push(row);
    }
    return _TrueTable;
}

const getResult = function (Array_1, Array_2) {
    var i = Array_1.length;

    while (i--) {
        if (Array_2[i] && Array_1[i] !== Array_2[i]) return false;
    }
    return true;
};

export default TrueTable;