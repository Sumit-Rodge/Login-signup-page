const userName = document.getElementById("username");
const validUserName = document.getElementById("validusername");

const gmail = document.getElementById("gmail");
const validGmail = document.getElementById("validgmail");

const password = document.getElementById("password")
const validPassword = document.getElementById("validpassword")

let gmailRegex=/^(\w[-_.!#$%&'*+/=?^_`{]?)+@(\w+).(\w{2,6})(.\w+)?$|^([+0]?(91)? ?)?([6-9]\d{9})$/;
let passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const showPassword = document.getElementById("showpassword");

function validate() {
    let userNameVerified="false";
    let gmailVerified="false";
    let passwordVerified="false";

    if(userName.value ==""){
        validUserName.style.visibility="visible";
        
    }else{
        validUserName.style.visibility="hidden";
        userNameVerified="true";
    }

    if (gmailRegex.test(gmail.value)) {    
        gmailVerified="true";
        validGmail.style.visibility="visible";
        validGmail.innerText="Gmail is valid";
        validGmail.style.color="green";
    } else {
        validGmail.style.visibility="visible";
        
    }

    if(passRegex.test(password.value)){
        validPassword.innerText="password is valid";
        validPassword.style.visibility="visible";
        validPassword.style.color="green";
        passwordVerified="true";
    }else{
        validPassword.innerText="password must contain minimum 8 character including a UPPERCASE letter, a Lowercase letter , a number and one special character";
        validPassword.style.visibility="visible";
        validPassword.style.color="red";
    }  
          
    if(userNameVerified==="true" && gmailVerified==="true" && passwordVerified==="true"){
        window.location.href="loginsuccessfull.html";
    }
}

showPassword.addEventListener('change', () => {
    if(showPassword.checked){
        password.type= "text";
    }else{
        password.type="password";
    }
})