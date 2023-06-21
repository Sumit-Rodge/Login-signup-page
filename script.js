const container = document.querySelector(".container")
const GmailTextBox = document.getElementById("email");
const password = document.getElementById("password");
const passwordVerficationText = document.getElementById("valid-password");
const emailVerficationText = document.getElementById("valid-email");

const showPassword = document.getElementById("show-password")

const signUpButton = document.getElementById("sign-up-button")

function validate(){
    let gmailRegex=/^(\w[-_.!#$%&'*+/=?^_`{]?)+@(\w+).(\w{2,6})(.\w+)?$|^([+0]?(91)? ?)?([6-9]\d{9})$/;
    let passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const validPassword=password.value;
    const validGmail=GmailTextBox.value;
    
    let gmailVerified = "false";
    let passwordVerified = "false";

    if(gmailRegex.test(validGmail)){
        emailVerficationText.style.visibility="visible";
        emailVerficationText.style.borderColor="green";
        emailVerficationText.innerText="Email/Phone Number is Valid";
        emailVerficationText.style.color="green";
        gmailVerified = "true";
    }else{
        emailVerficationText.style.visibility="visible";
        emailVerficationText.style.borderColor="red";
        emailVerficationText.innerText="Email/Phone Number is InValid";
        emailVerficationText.style.color="red";
    }

    if(passRegex.test(password.value)){ 
            passwordVerficationText.style.visibility="visible";
            passwordVerficationText.style.color="green";
            passwordVerficationText.innerText="Password is Valid";
            password.style.borderColor="green";
            passwordVerified = "true";
    }else{
        passwordVerficationText.innerText="password must contain minimum 8 character including a UPPERCASE letter, a Lowercase letter , a number and one special character";
        passwordVerficationText.style.visibility="visible";
        passwordVerficationText.style.color="red";
        password.style.borderColor="red";  
    }
    
    if(gmailVerified==="true" && passwordVerified==="true"){
        window.location.href="loginsuccessfull.html";
    }
}

showPassword.addEventListener( 'change' , () => {
    if(showPassword.checked){
        password.type="text"
    }else{
        password.type="password";
    }
})

// signUpButton.addEventListener( 'click', () => {
//     const signUpElement =document.createElement('data')
//     signUpButton.style.borderColor="red";
//     container.append(signUpElement)

// })  
    

        


