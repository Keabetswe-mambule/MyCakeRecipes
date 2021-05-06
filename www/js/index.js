let app = {
  isLaunced: false,
  isDarkMode: null,
  fontsize: null,
  typeface: null,
  user: null,
  login: (page) => {
    page.querySelector("#loader_").style.display = "block";
    //called to sign a user in
    let email = document.getElementById("email_").value;
    let pass = document.getElementById("password_").value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        // Signed in
        app.user = userCredential.user;
        // ...
      })
      .catch((error) => {
        page.querySelector("#loader_").style.display = "none";
        ons.notification.toast(error.message, {
          timeout: 2000,
          animation: "fall",
        });
      });
    },
  createAccount: (page) => {
    page.querySelector("#loader__").style.display = "block";
    //called to sign a user in
    let name =
      document.getElementById("firstname___").value +
      " " +
      document.getElementById("lastname___").value;
    let email = document.getElementById("email___").value;
    let pass = document.getElementById("password___").value;
    if ((name != "") & (email != "") & (pass != "")) {
      //add loading here
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .then((userCredential) => {
          // Signed in
          app.user = userCredential.user;

          firebase
            .auth()
            .currentUser.updateProfile({
              displayName: name,
            })
            .then(function () {
              ons.notification.toast("Registration successful", {
                timeout: 2000,
                animation: "fall",
              });
            })
            .catch(function (error) {
              ons.notification.toast(error.message, {
                timeout: 2000,
                animation: "fall",
              });
            });
        })
        .catch((error) => {
          page.querySelector("#loader__").style.display = "none";
          ons.notification.toast(error.message, {
            timeout: 2000,
            animation: "fall",
          });
          // ..
        });
    } else {
          page.querySelector("#loader__").style.display = "block";
      ons.notification.toast("All feilds need to be filled", {
        timeout: 2000,
        animation: "fall",
      });
    }
  },
  logout: () => {
    //called to sign a user out
    firebase.auth().signOut();
  },
  addRecipe: (page) => {
    page.querySelector("#loader_a").style.display = "block";
    //add recipe
    let title = document.getElementById("recipetitle__").value;
    let time = document.getElementById("recipetime__").value;
    let ing1 = document.getElementById("in1").value;
    let amt1 = document.getElementById("am1").value;
    let ing2 = document.getElementById("in2").value;
    let amt2 = document.getElementById("am2").value;
    let ing3 = document.getElementById("in3").value;
    let amt3 = document.getElementById("am3").value;
    let ing4 = document.getElementById("in4").value;
    let amt4 = document.getElementById("am4").value;
    let ing5 = document.getElementById("in5").value;
    let amt5 = document.getElementById("am5").value;
    let prep = document.getElementById("prep").value; 

    if(title!=""&time!="00:00"&ing1!=""&amt2!=""&prep!=""){

      firebase
      .database()
      .ref(`${app.user.uid}/recipes/${title}` + (Math.floor(Math.random())*100000))
      .set({

        title:title,
        time: time,
        ing1:ing1,
        amt1:amt1,
        ing2:ing2,
        amt2:amt2,
        ing3:ing3,
        amt3:amt3,
        ing4:ing4,
        amt4:amt4,
        ing5:ing5,
        amt5:amt5,
        prep:prep,
      })
      .then(() => {
        page.querySelector("#loader_a").style.display = "none";
        ons.notification.toast("Recipe added to list", {
          timeout: 2000,
          animation: "fall",
        });
      }).catch(()=>{
        page.querySelector("#loader_a").style.display = "none";
        ons.notification.toast("An error occured. Please try again", {
        timeout: 2000,
        animation: "fall",
      });});
    }else{
      ons.notification.toast("Some required field may not filled", {
        timeout: 2000,
        animation: "fall",
      });
    }
  },
  deleteRecipe: () => {},
  restoreRecipe: () => {},
  toogleFavourite: () => {},
  veiwRecipe: () => {},
  convertWeight: () => {},
  resetAccount: () => {},
  forgotPassword: () => {},
  setIsLaunched: () => {
    myNavigator.pushPage("page/login.html", { animation: "fade" });
    localStorage.setItem("isLaunced", true);
  },

  initialize: () => {
    //db for is launched
    app.isLaunced = localStorage.getItem("isLaunced");
    //check if its first launch? if user logined not first launch.. if no user check db.
    firebase.auth().onAuthStateChanged((u) => {
      app.user = u;
      if (app.user === null) {
        if (app.isLaunced) {
          myNavigator.pushPage("page/login.html", { animation: "fade" });
        } else {
          myNavigator.pushPage("splash.html", { animation: "fade" });
        }
      } else {
        myNavigator
          .pushPage("page/main.html", { animation: "fade" })
          .then(() => {
            //do something here
          });
      }
    });
  },
  initializeFirebase: () => {
    return new Promise(function (resolve, reject) {
      const firebaseConfig = {
        apiKey: "AIzaSyCMXYTUG9GWfwhfngHGh3dwCVVFNJmj1Ec",
        authDomain: "cakerecipes-76fd7.firebaseapp.com",
        projectId: "cakerecipes-76fd7",
        databaseURL:
          "https://cakerecipes-76fd7-default-rtdb.asia-southeast1.firebasedatabase.app/",
        appId: "1:266422662441:web:64f6ee546267d9fccfb338",
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      resolve("success");
    });
  },
};

ons.ready(() => {
  app.initializeFirebase().then(() => {
    setTimeout(() => {
      app.initialize();
    }, 3000);
  });
});
///////////handle events on html pages////////////

document.addEventListener("init", (event) => {
  var page = event.target;

  if (page.id === "splash2") {
    page.querySelector("#setIsLaunched").onclick = function () {
      app.setIsLaunched();
    };
  } else if (page.id === "login") {
    page.querySelector("#loader_").style.display = "none";
    page.querySelector("#loginButton").onclick = function () {
      app.login(page);
    };
  } else if (page.id === "signup") {
    page.querySelector("#loader__").style.display = "none";
    page.querySelector("#signUpBotton").onclick = function () {
      app.createAccount(page);
      
    };
  } else if (page.id === "settings") {
    page.querySelector("#signout").onclick = function () {
      app.logout();
    };
  } else if (page.id === "add") {
    page.querySelector("#loader_a").style.display = "none";
    page.querySelector("#addRecipe").onclick = function () {
      app.addRecipe(page);
    };
  }
});