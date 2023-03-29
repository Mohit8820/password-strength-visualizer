var goku = document.getElementById("goku");
var no = document.getElementsByClassName("no");
var yes = document.getElementsByClassName("yes");
var pwd = document.checker.pwd;
pwd.focus();

function hasNumber(myString) {
  return /\d/.test(myString);
}
var spcharCheck = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
function hasLowerCase(str) {
  return str.toUpperCase() != str;
}
function hasUppercase(str) {
  return /[A-Z]/.test(str);
}

function conv(bool) {
  if (bool) return 1;
  else return 0;
}

function change(val) {
  console.log(pwd.value.length);

  if (val.length >= 12) {
    no[0].style.display = "none";
    yes[0].style.display = "block";
  } else {
    yes[0].style.display = "none";
    no[0].style.display = "block";
  }
  if (hasUppercase(val)) {
    no[1].style.display = "none";
    yes[1].style.display = "block";
  } else {
    yes[1].style.display = "none";
    no[1].style.display = "block";
  }
  if (hasLowerCase(val)) {
    no[2].style.display = "none";
    yes[2].style.display = "block";
  } else {
    yes[2].style.display = "none";
    no[2].style.display = "block";
  }
  if (hasNumber(val)) {
    no[3].style.display = "none";
    yes[3].style.display = "block";
  } else {
    yes[3].style.display = "none";
    no[3].style.display = "block";
  }
  if (spcharCheck.test(val)) {
    no[4].style.display = "none";
    yes[4].style.display = "block";
  } else {
    yes[4].style.display = "none";
    no[4].style.display = "block";
  }

  var criterias =
    conv(hasNumber(val)) +
    conv(spcharCheck.test(val)) +
    conv(hasLowerCase(val)) +
    conv(hasUppercase(val));

  if (val.length == 0) {
    goku.className = "";
    goku.classList.add("damaged");
  }
  if (val.length < 2 && val.length > 0) {
    goku.className = "";
    goku.classList.add("base");
  }
  if (val.length >= 2) {
    goku.className = "";
    goku.classList.add("ssj");
  }
  if (val.length >= 4) {
    goku.className = "";
    goku.classList.add("ssj2");
  }
  if (val.length >= 6) {
    goku.className = "";
    goku.classList.add("ssj3");
  }
  if (val.length >= 8 && criterias > 1) {
    goku.className = "";
    goku.classList.add("ssjg");
  }
  if (val.length >= 10 && criterias > 2) {
    goku.className = "";
    goku.classList.add("ssjb");
  }
  if (val.length >= 11 && criterias > 2) {
    goku.className = "";
    goku.classList.add("ssjbkk");
  }
  if (val.length >= 12 && criterias > 3) {
    goku.className = "";
    goku.classList.add("ui");
  }
  if (val.length > 12 && criterias > 3) {
    goku.className = "";
    goku.classList.add("ui2");
  }
}
