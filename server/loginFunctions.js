const fs = require("fs");
const sha1 = require("sha1");

let loginInfos = {};


let loginData = fs.readFileSync("login-infos.txt").toString();
loginInfos = JSON.parse(loginData);

function signUp(username, password) {
  let uID = Math.floor(Math.random() * 1000000000);
  try {
    if(loginInfos[username] !== undefined) {
      return "Username not available";
    } else {
      loginInfos[username] = {};
      loginInfos[username].password = sha1(password);
      loginInfos[username].userID = uID;
      fs.writeFileSync("login-infos.txt", JSON.stringify(loginInfos));
      return "success";
    };
  }
  catch(err) {
    return "Signup Failed";
  };
};

function login(username, password) {
  try {
    if (loginInfos[username].password === password) {
      return loginInfos[username].userID;
    } else {
      return "fail";
    };
  }
  catch(err) {
    return "Login Failed"
  };
};

module.exports = {
  signUp,
  login
};
