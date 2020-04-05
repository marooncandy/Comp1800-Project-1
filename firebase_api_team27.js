        //---------------------------------------------------------------------
        // Your web app's Firebase configuration (9 lines of code)
        // Replace the configuration with YOUR project's API information
        // copied from the firebase console (settings) of your project.
        //---------------------------------------------------------------------
        var firebaseConfig = { //comes from firebase console -> settings, project settings, scroll down to see config
            apiKey: "AIzaSyDybbFndzdN_qWTlcC2Hv7zISSOrQe4T6k",
            authDomain: "march05-20fc6.firebaseapp.com",
            databaseURL: "https://march05-20fc6.firebaseio.com",
            projectId: "march05-20fc6",
            storageBucket: "march05-20fc6.appspot.com",
            messagingSenderId: "939597285390",
            appId: "1:939597285390:web:e73627aa1298dd75f5945f"
        };
          //------------------------------------------------
          // Initialize Firebase and Firestore reference
          // Do not delete!
          //------------------------------------------------
          firebase.initializeApp(firebaseConfig);
          const db = firebase.firestore();

          db.collection("quotes").doc("123")
            onSnapshot(function (c) {
              console.log("current data: ", c.data());
              document.getElementById("data").innerHTML.c.data().message;
            })