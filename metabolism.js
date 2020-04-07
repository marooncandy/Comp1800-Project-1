//------User enter information to calculate BMR-------------
function saveUserData() {
    document.getElementById("myform").addEventListener("submit", function (e) {
        e.preventDefault();
        let age = document.getElementById("age").value;
        let ht = document.getElementById("height").value;
        let wt = document.getElementById("weight").value;
        //let gen = document.getElementById("gender").value;
        let act = document.getElementById("act").value;
        console.log(age);
        console.log(ht);
        console.log(wt);
        //console.log(gen);
        console.log(act);
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users/").doc(user.uid).update({
                "age" : age,
                "height" : ht,
                "weight": wt,
                //"gender": gen,
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
        db.collection("users/").doc(user.uid)
        .onSnapshot(function (d) {
            console.log("Current data: ", d.data());
            if (d.get("gender") == "male"){
                bmr = 10 * d.get("weight") + 6.25 * d.get("height") - 5 * d.get("age") + 5;
            } else{
                bmr = 10 * d.get("weight") + 6.25 * d.get("height") - 5 * d.get("age") - 161;
            } 
            //bmr x activity level index
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
            //display total and suggested calorie
            document.getElementById("totalcalories").innerHTML = bmr.toFixed(0) + " Calories/day";
            document.getElementById("suggestedcal").innerHTML = (bmr*0.79).toFixed(0) + " Calories/day";

        });
    })
}

//function displayGender() { //event handler only
    //let s = document.getElementById("select").value;
    
    //let s = document.getElementById('choosegender').selectedOptions[0].text;
    //document.getElementById("demo1").innerHTML = s;

    //let f = document.getElementById("female").value;
    //document.getElementById("demo2").innerHTML = f;
    //let s = document.getElementById('choosegender');
    //let result = s.options[s.selectedIndex].value;
    //document.getElementById('demo1').innerHTML = result;
//}


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
//displayGender();



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
