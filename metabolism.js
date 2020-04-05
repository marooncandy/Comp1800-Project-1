

function saveData() {
    document.getElementById("myform").addEventListener("calculate", function (e) {
        e.preventDefault();
        let data = document.getElementById("kg").value //get weight from DOM
        document.getElementById("input").innerHTML = data;
        console.log(data);
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid).update({
                "weight": data
            });
        })
    })
}

function sayHello() {
    firebase.auth().onAuthStateChanged(function (user) {
        name = user.displayName; //get first and last name
        console.log(name);
        first = name.split(" ")[0]; //get first name only
        console.log(first);
        document.getElementById("name").innerHTML = first + "\'s"; //Elmo's
    })
}

sayHello();
saveData();