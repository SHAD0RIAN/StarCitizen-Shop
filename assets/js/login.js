var connectionDiv = document.getElementById("connection");

function signForm(i) {
    var form = connectionDiv.getElementsByTagName("form")[0];
    var loginTitle = connectionDiv.getElementsByTagName("h2")[0]
    form.setAttribute("action","assets/php/");
    if(i==0){
        form.innerHTML =   "<label for='email'>Email</label>\
                            <input type='email' id='email' name='email' placeholder='user@gmail.com' required>\
                            <label for='password'>Password</label>\
                            <input type='password' id='password' name='password' placeholder='myPassword123' required>\
                            <a href='div#passwordForgotten' id='passwordForgotten-link'>Forgot your password ?</a>\
                            <a href='#' class='linkSign' id='signup-link'>You don't have an account ? Create a account !</a>\
                            <button type='submit'>Sign In</button>";

        loginTitle.innerText="Sign in"
        connectionDiv.className += " sign-in"
    } else if(i==1) {
        form.innerHTML =   "<label for'first-name'>First Name</label>\
                            <input type='text' id='first-name' name='first-name' placeholder='John' required>\
                            <label for'last-name'>Last Name</label>\
                            <input type='text' id='last-name' name='last-name' placeholder='Doe' required>\
                            <label for'nickname'>Nickname</label>\
                            <input type='text' id='nickname' name='nickname' placeholder='J0hnDo3' required>\
                            <label for='email'>Email</label>\
                            <input type='email' id='email' name='email' placeholder='user@gmail.com' required>\
                            <label for='password'>Password</label>\
                            <input type='password' id='password' name='password' placeholder='myPassword123' required>\
                            <a href='' class='linkSign' id='signin-link'>Already have an account ? Sign in !</a>\
                            <button type='submit' onClick='verifyPwd()'>Create Account</button>"
                            ;

        loginTitle.innerText="Sign up"
        connectionDiv.className += " sign-up"
    }
}

function verifyPwd() { 
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm-password').value; 
    if (password != confirm_password) {
        alert('The passwords must match!');
    } 
} 

signForm(0);
var links = document.getElementsByClassName("linkSign")
console.log(links)
for(var i = 0; i<links.length; i++) {
    links[i].addEventListener("click", function() {
        signForm(i)
    })
}