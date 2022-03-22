import { generateBits, CreateMap, getIndexOf } from './core';

const KarnaughMap = (state, truthTable) => {

    let Header = [];
    let HeaderBody = [];
    let map = [];
    let posHeader = [];
    let posHeaderBody = [];

    let HeaderLength = state.slice(0, state.length / 2).length;
    let HeaderBodyLength = state.slice(state.length / 2, state.length).length;

    //column
    Header = generateBits(HeaderLength);
    //row
    HeaderBody = generateBits(HeaderBodyLength);

    /* Create map */
    map = CreateMap(HeaderBody.length, Header.length, HeaderBody);

    for (let i = 0; i < truthTable.length; i++) {
        //if result true
        if (truthTable[i][(truthTable[i].length - 1)]) {
            //deleted last column = result
            truthTable[i].pop();

            //get arr to compare
            let _Header = truthTable[i].slice(0, truthTable[i].length / 2);
            let _HeaderBody = truthTable[i].slice(truthTable[i].length / 2, truthTable[i].length);

            posHeaderBody.push((getIndexOf(Header, _Header) + 1));
            posHeader.push(getIndexOf(HeaderBody, _HeaderBody));

        }
    }

    do {
        var col = posHeader.pop();
        var fil = posHeaderBody.pop();
        map[col][fil] = 1;
    } while (posHeader.length != 0 && posHeaderBody.length != 0);

    return {
        _Header: Header,
        _HeaderBody: HeaderBody,
        map
    }
}

export default KarnaughMap;


