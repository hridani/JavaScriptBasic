var getIndexOfKey = function (array, key) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == key)
            return i;
    }
    return -1;

}
function add(array, key, value) {
    var index = getIndexOfKey(array, key);
    if (index === -1)
        array.push([key, value]);
    else
        array[index][1] += value;
}

function findCardFrequency(string) {
    var strArray = string.toLowerCase().split(/\W+/);
    var db = [];
    var alert = '';
    for (var i = 0; i < strArray.length ; i++) {
        var newCard = strArray[i];
        if (newCard != '')
            add(db, newCard, 1);
        else
            strArray = strArray.slice(0, strArray.length - 1)

    }
    for (var i in db) {
        alert += db[i][0] + " -> " + (db[i][1] * 100 / strArray.length).toFixed(2) + '%\n';
    }

    console.log(alert);

}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFrequency('10♣ 10♥');