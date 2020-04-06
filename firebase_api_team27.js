
        //---------------------------------------------------------------------
        // Your web app's Firebase configuration (9 lines of code)
        // Replace the configuration with YOUR project's API information
        // copied from the firebase console (settings) of your project.
        //---------------------------------------------------------------------
        var firebaseConfig = {
          apiKey: "AIzaSyCBQfwiOy_9e2LcENakjXT1t_bH1r4puSo",
          authDomain: "testing-4a46a.firebaseapp.com",
          databaseURL: "https://testing-4a46a.firebaseio.com",
          projectId: "testing-4a46a",
          storageBucket: "testing-4a46a.appspot.com",
          messagingSenderId: "1079735765932",
          appId: "1:1079735765932:web:f7618fb0e728ad6e048809"
        };
      
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
      
        // Get a reference to the database service
        //const database = firebase.database();
        const db = firebase.firestore();
         