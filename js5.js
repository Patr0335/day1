const clos = (function() {
    let age = 0;
    let name = '';
    const setAge = (value) => {
        age = value;
    }
    const setName = (value) => {
        name = value;
    }
    const getInfo = () => {
        //måde at indsætte variabler i en String.
        //Nemmere at læse end var result = name + ", " + age; eksempel.
        return `${name}, ${age}`;
    }
    return {setAge, setName, getInfo}

})();

//Den er reusable siden den kan kaldes flere gange. eks/ ny setAge
clos.setAge(45)
clos.setName('Peter')

console.log(clos.getInfo());
