const usernameInput = document.querySelector(".username-p");
const passwordInput = document.querySelector(".password-p");
const signIn = document.querySelector(".sign-p");

signIn.addEventListener("click" , function(){
    const usernameP = usernameInput.value;
    const passwordP = passwordInput.value;

    if (usernameP == "appclickict" && passwordP == "appclick1234"){
        alert("login successful");
    }else(alert("incorrect username or password"));
})



