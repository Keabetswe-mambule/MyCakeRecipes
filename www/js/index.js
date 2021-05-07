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
  } else if (page.id === "trash") {
    firebase
      .database()
      .ref(`${app.user.uid}/deleted_recipes`)
      .on("value", (snapshot) => {
        const data = snapshot.val();
        document.getElementById("tload").innerHTML = ``;
        if (data != null && data != undefined)
          for (const [key, value] of Object.entries(data)) {
            let recipe = value;
            let display = `<ons-card>
      <div>
        <div class="title">${recipe.title}</div>
        <div class="content">
          <div>
            <strong>Ingredients</strong>
            <p>
              ${recipe.ing1} | ${recipe.amt1} <br />
              ${recipe.ing2} | ${recipe.amt2}<br />
              ${recipe.ing3} |${recipe.amt3}<br />
              ${recipe.ing4} |${recipe.amt4}<br />
              ${recipe.ing5} |${recipe.amt5}
            </p>
          </div>
        </div>
      </div>
      <div id="${key}_load_t" class="card_icons">
        <ons-icon
          icon="trash-restore"
          fixed-width="false"
          size="20px"
          style="color: rgb(59, 59, 255); margin-left: 45%"
          onclick="app.restoreRecipe('${key}')"
        ></ons-icon>
      </div>
    </ons-card>`;
            document.getElementById("tload").innerHTML += display;
          }
      });
  }
});

let app = {
  isLaunced: false,
  isDarkMode: null,
  fontsize: null,
  typeface: null,
  user: null,
  recipes: null,
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

    if (
      (title != "") &
      (time != "") &
      (ing1 != "") &
      (amt2 != "") &
      (prep != "")
    ) {
      firebase
        .database()
        .ref(
          `${app.user.uid}/recipes/${title}` +
            Math.floor(Math.random() * 100000)
        )
        .set({
          title: title,
          time: time,
          ing1: ing1,
          amt1: amt1,
          ing2: ing2,
          amt2: amt2,
          ing3: ing3,
          amt3: amt3,
          ing4: ing4,
          amt4: amt4,
          ing5: ing5,
          amt5: amt5,
          prep: prep,
          fav: false,
        })
        .then(() => {
          page.querySelector("#loader_a").style.display = "none";
          ons.notification.toast("Recipe added to list", {
            timeout: 2000,
            animation: "fall",
          });
          myNavigator.popPage({ animation: "fade" });
        })
        .catch(() => {
          page.querySelector("#loader_a").style.display = "none";
          ons.notification.toast("An error occured. Please try again", {
            timeout: 2000,
            animation: "fall",
          });
        });
    } else {
      page.querySelector("#loader_a").style.display = "none";
      ons.notification.toast("Some required field may not filled", {
        timeout: 2000,
        animation: "fall",
      });
    }
  },
  deleteRecipe: (key) => {
    document.getElementById(
      `${key}_loader`
    ).innerHTML = `<ons-progress-bar indeterminate></ons-progress-bar>`;
    firebase
      .database()
      .ref(`${app.user.uid}/recipes/${key}`)
      .on("value", (snapshot) => {
        const data = snapshot.val();
        if (data != null && data != undefined) {
          firebase
            .database()
            .ref(`${app.user.uid}/deleted_recipes/${key}`)
            .set({
              title: data.title,
              time: data.time,
              ing1: data.ing1,
              amt1: data.amt1,
              ing2: data.ing2,
              amt2: data.amt2,
              ing3: data.ing3,
              amt3: data.amt3,
              ing4: data.ing4,
              amt4: data.amt4,
              ing5: data.ing5,
              amt5: data.amt5,
              prep: data.prep,
              fav: data.fav,
            })
            .then(() => {
              firebase
                .database()
                .ref(`${app.user.uid}/recipes/${key}`)
                .remove();
            });
        }
      });
  },
  restoreRecipe: (key) => {
    document.getElementById(
      `${key}_load_t`
    ).innerHTML = `<ons-progress-bar indeterminate></ons-progress-bar>`;
    firebase
      .database()
      .ref(`${app.user.uid}/deleted_recipes/${key}`)
      .on("value", (snapshot) => {
        const data = snapshot.val();
        if (data != null && data != undefined) {
          firebase
            .database()
            .ref(`${app.user.uid}/recipes/${key}`)
            .set({
              title: data.title,
              time: data.time,
              ing1: data.ing1,
              amt1: data.amt1,
              ing2: data.ing2,
              amt2: data.amt2,
              ing3: data.ing3,
              amt3: data.amt3,
              ing4: data.ing4,
              amt4: data.amt4,
              ing5: data.ing5,
              amt5: data.amt5,
              prep: data.prep,
              fav: data.fav,
            })
            .then(() => {
              firebase
                .database()
                .ref(`${app.user.uid}/deleted_recipes/${key}`)
                .remove();
            });
        }
      });
  },
  toogleFavourite: (key) => {
    let color = document.getElementById(`${key}_star`).style.color;
    if (color === "rgb(219, 255, 0)") {
      firebase
        .database()
        .ref(`${app.user.uid}/recipes/${key}`)
        .update({ fav: false });
    } else {
      firebase
        .database()
        .ref(`${app.user.uid}/recipes/${key}`)
        .update({ fav: true });
    }
  },
  veiwRecipe: () => {},
  convertWeight: () => {},
  resetAccount: () => {},
  forgotPassword: () => {},
  shareRecipe: (key) => {},
  listRecipes: (data) => {
    if (data != null && data != undefined) {
      document.getElementById("lister").innerHTML = ``;
      for (const [key, value] of Object.entries(data)) {
        let favcolor;
        let recipe = value;
        if (recipe.fav) {
          favcolor = "#DBFF00";
        } else {
          favcolor = "#fff";
        }
        let display = `  <ons-card id="${key}">
      <div onclick="console.log('holy shit')">
        <div class="title">${recipe.title}</div>
        <div class="content">
          <div>
            <strong>Ingredients</strong>
            <p>
              ${recipe.ing1} &nbsp; ${recipe.amt1} <br />
              ${recipe.ing2} &nbsp; ${recipe.amt2}<br />
              ${recipe.ing3} &nbsp; ${recipe.amt3}<br />
              ${recipe.ing4} &nbsp; ${recipe.amt4}<br/>
              ${recipe.ing5} &nbsp; ${recipe.amt5}
            </p>
          </div>
        </div>
      </div>
      <div class="card_icons" id="${key}_loader" >
        <ons-icon
          onclick="app.toogleFavourite('${key}')"
          icon="star"
          id="${key}_star"
          fixed-width="false"
          size="15px"
          style="color: ${favcolor}; margin-right: 5px"
        ></ons-icon
        ><ons-icon
          onclick="app.shareRecipe('${key}')"
          icon="share-alt"
          fixed-width="false"
          size="15px"
          style="color: rgb(59, 59, 255); margin-right: 5px"
          onclick=""
        ></ons-icon
        ><ons-icon
          onclick="app.deleteRecipe('${key}')"
          icon="trash"
          fixed-width="false"
          size="15px"
          style="color: red; margin-right: 5px"
          onclick=""
        ></ons-icon>
      </div>
    </ons-card>
`;
        document.getElementById("lister").innerHTML += display;
      }
    } else {
      document.getElementById("lister").innerHTML = `<on-list><br /></on-list>
    <div style="text-align: center; margin-top: 85%">
      <p class="m_--">No recipes to show yet</p>
    </div>`;
    }
  },
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
        myNavigator.pushPage("page/main.html", { animation: "fade" });
        firebase
          .database()
          .ref(`${app.user.uid}/recipes`)
          .on("value", (snapshot) => {
            const data = snapshot.val();
            app.recipes = data;
            app.listRecipes(app.recipes);
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
