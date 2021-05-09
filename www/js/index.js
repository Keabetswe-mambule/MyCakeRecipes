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

document.addEventListener("show", (event) => {
  var page = event.target;
  if (page.id === "trash") {
    firebase
      .database()
      .ref(`${app.user.uid}/deleted_recipes`)
      .get()
      .then((snapshot) => {
        const data = snapshot.val();
        document.getElementById("tload").innerHTML = ``;
        if (data != null && data != undefined) {
          for (const [key, value] of Object.entries(data)) {
            let recipe = value;
            let display = `<ons-card id="${key}_t">
      <div>
        <div class="title">${recipe.title}</div>
        <br/>
        <div class="content">
          <div>
            <strong>Ingredients</strong>
            <p>
              ${recipe.ing1} &nbsp; ${recipe.amt1} <br />
              ${recipe.ing2} &nbsp; ${recipe.amt2}<br />
              ${recipe.ing3} &nbsp; ${recipe.amt3}<br />
              ${recipe.ing4} &nbsp; ${recipe.amt4}<br />
              ${recipe.ing5} &nbsp; ${recipe.amt5}
            </p>
          </div>
        </div>
      </div>
      <div id="${key}_load_t" class="card_icons">
        <ons-icon
          icon="trash-restore"
           fixed-width="false"
          size="15px"
          style="color: rgb(59, 59, 255); "
          onclick="app.restoreRecipe('${key}')"
        ></ons-icon>
      </div>
    </ons-card>`;
            document.getElementById("tload").innerHTML += display;
          }
        } else {
          document.getElementById(
            "tload"
          ).innerHTML = `<on-list><br /></on-list>
    <div style="text-align: center; margin-top: 85%">
      <p class="m_--">No recipes to show yet</p>
    </div>`;
        }
      });
  } else if (page.id === "favourites") {
    firebase
      .database()
      .ref(`${app.user.uid}/recipes`)
      .get()
      .then((snapshot) => {
        const data = snapshot.val();
        document.getElementById("fload").innerHTML = ``;
        if (data != null && data != undefined) {
          let someFav;
          for (const [key, value] of Object.entries(data)) {
            let recipe = value;
            let display;
            if (recipe.fav) {
              someFav = true;
              favcolor = "#DBFF00";
              display = `  <ons-card id="${key}f">
      <div onclick="app.veiwRecipe('${key}')">
        <div class="title">${recipe.title}</div>
        <br/>
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
          onclick="document.getElementById('${key}f').style.display = 'none'; app.toogleFavourite('${key}')"
          icon="star"
          id="${key}_star"
          fixed-width="false"
          size="15px"
          style="color: ${favcolor}; margin-right: 5px"
        ></ons-icon
        >
      </div>
    </ons-card>
`;
              document.getElementById("fload").innerHTML += display;
            }
          }
          if (!someFav) {
            document.getElementById(
              "fload"
            ).innerHTML = `<on-list><br /></on-list>
    <div style="text-align: center; margin-top: 85%">
      <p class="m_--">No recipes to show yet</p>
    </div>`;
          }
        } else {
          document.getElementById(
            "fload"
          ).innerHTML = `<on-list><br /></on-list>
    <div style="text-align: center; margin-top: 85%">
      <p class="m_--">No recipes to show yet</p>
    </div>`;
        }
      });
  } else if (page.id === "settings") {
    document.getElementById("_name").innerHTML = app.user.displayName;
  }
});

let app = {
  isLaunced: false,
  isDarkMode: false,
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
              ons.notification.toast("Recipe moved to trash", {
                timeout: 2000,
                animation: "fall",
              });
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
      .get()
      .then((snapshot) => {
        const datam = snapshot.val();
        if (datam != null && datam != undefined) {
          firebase
            .database()
            .ref(
              `${app.user.uid}/recipes/${key}` + Math.floor(Math.random() * 10)
            )
            .set({
              title: datam.title,
              time: datam.time,
              ing1: datam.ing1,
              amt1: datam.amt1,
              ing2: datam.ing2,
              amt2: datam.amt2,
              ing3: datam.ing3,
              amt3: datam.amt3,
              ing4: datam.ing4,
              amt4: datam.amt4,
              ing5: datam.ing5,
              amt5: datam.amt5,
              prep: datam.prep,
              fav: datam.fav,
            })
            .then(() => {
              firebase
                .database()
                .ref(`${app.user.uid}/deleted_recipes/${key}`)
                .remove();
              document.getElementById(`${key}_t`).style.display = "none";
              ons.notification.toast("Recipe restored from trash", {
                timeout: 2000,
                animation: "fall",
              });
            })
            .catch((err) => {
              console.log(err);
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
  veiwRecipe: (key) => {
    document
      .querySelector("#myNavigator")
      .pushPage("page/recipe.html", { animation: "fade" })
      .then(() => {
        firebase
          .database()
          .ref(`${app.user.uid}/recipes/${key}`)
          .get()
          .then((snapshot) => {
            const data = snapshot.val();
            if (data != null && data != undefined) {
              let display = `<ons-toolbar>
    <div class="left">
      <ons-icon
        icon="arrow-left"
        fixed-width="false"
        size="25px"
        style="color: #fff; margin-left: 5px"
        onclick="document.querySelector('#myNavigator').popPage();"
      ></ons-icon>
    </div>
    <div class="center">${data.title}</div>
  </ons-toolbar>
  <ons-list><br/></ons-list>
  <div class="r_page">
    <on-list> <br /></on-list>

    <div style="text-align: center">
      <ons-card
        style="
          width: 92% !important;
          margin-left: 3.5% !important;
          margin-top: 30px !important;
        "
      >
        <div class="content">
          <table style="width: 100%; text-align: left">
            <tr>
              <th>Ingredients</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>${data.ing1}</td>
              <td>${data.amt1}</td>
            </tr>
            <tr>
              <td>${data.ing2}</td>
              <td>${data.amt2}</td>
            </tr>
            <tr>
              <td>${data.ing3}</td>
              <td>${data.amt3}</td>
            </tr>
            <tr>
              <td>${data.ing4}</td>
              <td>${data.amt4}</td>
            </tr>
            <tr>
              <td>${data.ing5}</td>
              <td>${data.amt5}</td>
            </tr>
          </table>
        </div>
      </ons-card>
      <ons-card
        style="
          width: 92% !important;
          margin-left: 3.5% !important;
          margin-top: 30px !important;
          margin-bottom: 60px !important;
        "
      >
        <div class="content">
          <p class="m_-" style="height: 10px; margin: 0px; display: block">
            <strong>Preparation - ${data.time} minutes</strong>
          </p>
          <br /><br />
          <p style="width: 98% !important; height: 250px">
            ${data.prep}
          </p>
        </div>
      </ons-card>
    </div>
  </div>`;
              document.getElementById("recipe").innerHTML = display;
            }
          });
      });
  },
  convertWeight: (grams, pounds, ounces) => {
    if (grams != "" || pounds != "" || ounces != "") {
      if (grams != "") {
        let pound = grams / 454;
        let ounce = grams / 28.35;
        pound += " ";
        ounce += " ";
        pound = pound.substring(0, 4);
        ounce = ounce.substring(0, 4);
        ons.notification.alert(
          `Grams = ${grams}g <br/><br/>Pounds = ${pound.trim()}lb <br/><br/>Ounces = ${ounce.trim()}oz`,
          {
            title: "Convertion result",
          }
        );
      } else if (pounds != "") {
        let gram = pounds * 454;
        let ounce = pounds * 16;
        gram += " ";
        ounce += " ";
        gram = gram.substring(0, 4);
        ounce = ounce.substring(0, 4);
        ons.notification.alert(
          `Grams = ${gram.trim()}g <br/><br/>Pounds = ${pounds}lb <br/><br/>Ounces = ${ounce.trim()}oz`,
          {
            title: "Convertion result",
          }
        );
      } else {
        let gram = ounces * 28.35;
        let pound = ounces / 16;
        gram += " ";
        pound += " ";
        gram = gram.substring(0, 4);
        pound = pound.substring(0, 4);
        ons.notification.alert(
          `Grams = ${gram.trim()}g <br/><br/>Pounds = ${pound.trim()}lb <br/><br/>Ounces = ${ounces}oz`,
          {
            title: "Convertion result",
          }
        );
      }
    }
  },
  forgotPassword: () => {},
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
      <div onclick="app.veiwRecipe('${key}')">
        <div class="title">${recipe.title}</div>
        <br/>
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
