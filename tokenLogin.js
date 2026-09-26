// Code taken from https://gist.github.com/m-Phoenix852/b47fffb0fd579bc210420cedbda30b61
// Complete credits to original creator (https://github.com/m-Phoenix852)

let token = "MTM2MzUyMTAxOTQxOTE2ODg0OA.G4OGzi.IOwz1ryEaekgtXUdttz_x0PgSpxNLmtNBSVHEk";

function login(token) {
    setInterval(() => {
      document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"MTM2MzUyMTAxOTQxOTE2ODg0OA.G4OGzi.IOwz1ryEaekgtXUdttz_x0PgSpxNLmtNBSVHEk"`
    }, 50);
    setTimeout(() => {
      location.reload();
    }, 2500);
  }

login(token);
