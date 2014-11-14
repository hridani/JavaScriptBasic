var people = [];
var Person = (function () {
    var person = function (fname, lname, age) {
        this.firstname = fname;
        this.secondname = lname;
        this.age = age;
    };
    return person;
})();

var persons = [];
persons.push(new Person("Scott", "Guthrie", 38));
persons.push(new Person("Scott", "Johns", 36));
persons.push(new Person("Scott", "Hanselman", 39));
persons.push(new Person("Jesse", "Liberty", 57));
persons.push(new Person("Jon", "Skeet", 38));
group(persons, 'firstname');
group(persons, 'age');
group(persons, 'lastName');

function group(persons, par) {
    var newArray = {};
    for (var i = 0; i < persons.length; i++) {
        if (par === 'firstname')
            var fp = "Group " + persons[i].firstname;
        if (par === 'age')
            var fp = "Group " + persons[i].age;
        if (par === 'lastName')
            var fp = "Group " + persons[i].secondname;
        if (!(fp in newArray)) {
            newArray[fp] = [];
            newArray[fp][0] = persons[i].firstname + ' ' + persons[i].secondname + '(' + persons[i].age + ')';
            newArray[fp][0][0] = persons[i].age;
        }
        else {
            var numb = newArray[fp].length;
            newArray[fp][numb] = persons[i].firstname + ' ' + persons[i].secondname;
            newArray[fp][numb][0] = persons[i].age;
        }
    }
    var jt = '';
    var keys = [];
    for (var key in newArray) {
        if (newArray.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    keys.sort();
    for (var key in keys) {
        var st = newArray[keys[key]];
        jt += keys[key] + ':[' + st.join(",") + ']\n';
    }


    console.log(jt);

}