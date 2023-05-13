var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var pattern1 = /^[6-9]{1}[0-9]{9}$/;
var pattern2 = /^[a-zA-Z0-9'.\s]{3,20}$/;
var pattern3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20}/;
setTimeout(validateForm,500);

function myFunction() 
{
  var y = document.getElementById("password");
  if (y.type == "password") 
  {
    y.type = "text";
  } else 
  {
    y.type = "password";
  }
  var x = document.getElementById("repassword");
  if (x.type == "password") 
  {
    x.type = "text";
  } else 
  {
    x.type = "password";
  }
}

function validation() 
{
    setTimeout(validation,500);
    var text = document.getElementById("text");
    var email = document.getElementById("email").value;
    var form = document.getElementById("form");
    

    if(email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address valid.";
        text.style.color = "#00ff00";
    }
    else
    {
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML = "Please Enter Valid Email Address";
        text.style.color = "#ff0000";
    }
    
}

function validation1() 
{
    setTimeout(validation1,500);
    var form = document.getElementById("form");
    var mobail = document.getElementById("mobail").value;
    var text1 = document.getElementById("text1");
    

    if(mobail.match(pattern1))
    {
        form.classList.add("valid1");
        form.classList.remove("invalid1");
        text1.innerHTML = "Your Mobail Number valid.";
        text1.style.color = "#00ff00";
    }
    else
    {
        form.classList.add("invalid1");
        form.classList.remove("valid1");
        text1.innerHTML = "Please Enter Valid Mobail Number";
        text1.style.color = "#ff0000";
    }
    
 }

function validation2() 
{
    setTimeout(validation2,500);
    var form = document.getElementById("form");
    var name = document.getElementById("name").value;
    var text2 = document.getElementById("text2");
    

    if(name.match(pattern2))
    {
        form.classList.add("valid2");
        form.classList.remove("invalid2");
        text2.innerHTML = "Your Name valid.";
        text2.style.color = "#00ff00";
    }
    else
    {
        form.classList.add("invalid2");
        form.classList.remove("valid2");
        text2.innerHTML = "Please Enter Valid Name";
        text2.style.color = "#ff0000";
    }
    
 }
function validation3() 
{
    setTimeout(validation3,500);
    var form = document.getElementById("form");
    var password = document.getElementById("password").value;
    var text3 = document.getElementById("text3");
    

    if(password.match(pattern3))
    {
        form.classList.add("valid3");
        form.classList.remove("invalid3");
        text3.innerHTML = "Your Password valid.";
        text3.style.color = "#00ff00";
    }
    else
    {
        form.classList.add("invalid3");
        form.classList.remove("valid3");
        text3.innerHTML = "Please Enter Valid Password";
        text3.style.color = "#ff0000";
    }
    
 }
  var check = function()
  {
    setTimeout(check,500);
    var form = document.getElementById("form");
    var repassword = document.getElementById("repassword").value;
    var text4 = document.getElementById("text4");

    if(document.getElementById('password').value ==
    document.getElementById('repassword').value && repassword.match(pattern3))
    {
        form.classList.add("valid4");
        form.classList.remove("invalid4");
        form.classList.remove("warning");
        text4.innerHTML = "Your Password is Valid and Matched.";
        text4.style.color = "#00ff00";
    }
    else if(repassword.match(pattern3))
    {
        form.classList.add("warning");
        form.classList.remove("valid4");
        form.classList.remove("invalid4");
        text4.innerHTML = "Your Password is valid and Does't Matched.";
        text4.style.color = "yellow";
    }
    else
    {
        form.classList.add("invalid4");
        form.classList.remove("valid4");
        form.classList.remove("warning");
        text4.innerHTML = "Your Password Invalid";
        text4.style.color = "#ff0000";
    }
  }
var name = document.getElementById('name');
var mobail = document.getElementById('mobail');
var email = document.getElementById('email');
var password = document.getElementById('password');
var repassword = document.getElementById('repassword');
var button = document.querySelector('.submit');
var form1 = document.querySelector('.form');
var texts = document.getElementById('texts');

function validateForm()
{ 
   var btn = document.getElementById("btn");
    if (name.value !== "" && mobail.value !== "" && email.value !== "" && password.value !== "" && repassword.value !== "" && pattern.test(email.value) && pattern1.test(mobail.value) && pattern2.test(name.value) && pattern3.test(password.value) && (password.value == repassword.value))
    {
       //but.className = "submit1";
       //but.style.color = "#000000";
       button.style.backgroundColor="green";
       button.disabled = false;
    } 
    else 
    {
       //but.className = "submit";
       button.style.backgroundColor="red";
       button.disabled = true;
    }
}
// form1.addEventListener('submit', function(event){
//      event.preventDefault();
//      console.log("submitted")

// })