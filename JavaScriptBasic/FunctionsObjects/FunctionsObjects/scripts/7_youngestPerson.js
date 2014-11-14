function solve(arr) {
    var persons = {};
    persons = arr;
    var text = "";
    text = "The youngest person is " + findYoungestPerson(persons);
    console.log(text);
}
function findYoungestPerson(persons) {
    var minV = Number.MAX_VALUE;
    var pos = 0;
    for (var p = 0; p < persons.length - 1; p++) {
        if (minV > persons[p].age) {
            minV = persons[p].age;
            pos = p;
        }
    }
    return persons[pos].firstname + ' ' + persons[pos].lastname;
}
solve([
{ firstname : 'George', lastname: 'Kolev', age: 32 }, 
{ firstname : 'Bay', lastname: 'Ivan', age: 81 },
{ firstname : 'Baba', lastname: 'Ginka', age: 40 }]);