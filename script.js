// fullname validation
var nameAccess = document.getElementById("name");
var ans = document.getElementById("ans");

function namefun() {
    let regx = /^([^0-9]*)$/;
    if (regx.test(nameAccess.value)) {
        ans.textContent = "Valid";
        ans.style = "color : green;";
    } else {
        ans.textContent = "Invalid"
        ans.style = "color : red";
    }
}

//age validation

function age(){

    const ageAccess = document.getElementById("age");
    var ans1 = document.getElementById("ans1");

    if(ageAccess.value >=18 && ageAccess.value <= 100){
        ans1.innerText  = "valid";
        ans1.style = "color : green;";
    }
    else{
        ans1.innerText = "Invalid";
        ans1.style = "color : red;";

    }

}

  //mobile number validation
  var num_access = document.getElementById("number");
  var ans2 = document.getElementById("ans2");

  function numfun() {
      let regx = /^(\+\d{1,3}[- ]?)?\d{10}$/;

      if (regx.test(num_access.value)) {
          ans2.textContent = "Valid";
          ans2.style = "color : green;";
      } else {
          ans2.textContent = "Invalid"
          ans2.style = "color : red";;
      }
  }

// email validation
var email_access = document.getElementById("email");
var ans3 = document.getElementById("ans3");

function isEmailAddress() {
    let regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (regx.test(email_access.value)) {
        ans3.textContent = "Valid";
        ans3.style = "color : green;";
    } else {
        ans3.textContent = "Invalid"
        ans3.style = "color : red";;
    }
}