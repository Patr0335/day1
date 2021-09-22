const myObject = {name: "Patrick", birthday: "3rd of September", hobby: "gaming", email: "Patrickjs@gmail.com"};

delete myObject.name;

myObject.nationality = "Danish";

for(property in myObject){
    console.log(property,myObject[property]);
}



