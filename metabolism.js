//------User enter information to calculate BMR-------------
function saveUserData() {
    document.getElementById("myform").addEventListener("submit", function (e) {
        e.preventDefault();
        let age = document.getElementById("age").value;
        let ht = document.getElementById("height").value;
        let wt = document.getElementById("weight").value;
        let gen = document.getElementById("gender").value;
        let act = document.getElementById("act").value;
        console.log(age);
        console.log(ht);
        console.log(wt);
        console.log(gen);
        console.log(act);
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc("c82KHU8AspvFaGZou68v").update({
                "age" : age,
                "height" : ht,
                "weight": wt,
                "gender": gen,
                "activitylevel": act
            });
        })
    })
}

//Formula
//---MALE----BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
//---FEMALE-----BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
let bmr = 0;

function calculateBMR(){
    firebase.auth().onAuthStateChanged(function (user){
        db.collection("users").doc("c82KHU8AspvFaGZou68v")
        .onSnapshot(function (d) {
            console.log("Current data: ", d.data());
            if (d.get("gender") == "male"){
                bmr = 10 * d.get("weight") + 6.25 * d.get("height") - 5 * d.get("age") + 5;
                console.log("male", bmr);
            } else{
                bmr = 10 * d.get("weight") + 6.25 * d.get("height") - 5 * d.get("age") - 161;
                console.log("female", bmr);
               // document.getElementById("totalcalories").innerHTML = bmr;
            } 
            console.log(bmr);
            
            if(d.get("activitylevel") == "sedentary"){
                bmr *= 1.2;
            } else if(d.get("activitylevel") == "somewhat active"){
                bmr *= 1.375;
            } else if(d.get("activitylevel") == "active") {
                bmr *= 1.55;
            } else if(d.get("activitylevel") == "very active") {
                bmr *= 1.725;
            } else {
                document.getElementById("totalcalories").innerHTML = "invalid";
            }
            console.log(bmr);
            document.getElementById("totalcalories").innerHTML = bmr.toFixed(0);
        });
    })
}
/** 
function actLevel(){
    firebase.auth().onAuthStateChanged(function (user){
        db.collection("users").doc("c82KHU8AspvFaGZou68v")
        .onSnapshot(function (d) {
           
        });
    })
}
*/

//-----Execute functions -------
saveUserData();



/** teting, not working -----------------------
function saveDat() {
    document.getElementById("select").addEventListener("submit", function (e) {
        e.preventDefault();
        let gender = document.getElementById("gender").value;
        let actlvl = document.getElementById("act").value;
        console.log(gender);
        console.log(actlvl);
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("User name").doc("userkey").update({
                "gender": gender,
                "activitylevel": actlvl,
            });
        })
    })
}
*/
//saveData();
