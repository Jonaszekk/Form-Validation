function validateName() {

    var lname = document.form.name.value;
    var ncheck = /^[A-Z]([A-Z]|[a-z]|[0-9])/;

    if (!lname.match(ncheck)) {

        alert('Your name must start with a capital letter');

        return false;

    } else {
        return true;

    }

}

function validatePassword() {

    var fpassword = document.form.password.value;
    var spasssword = document.form.rpassword.value;

    if (fpassword == spasssword) {
        return true;
    }
    else {
        alert("Passwords must match");
        return false;


    }
}

function validatePassword2() {

    var lpassword = document.form.password.value;
    var pcheck = /^(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]/;

    if (!lpassword.match(pcheck)) {

        alert('Your Password must contain at least one: capital letter, number, special character');

        return false;

    } else {
        return true;

    }

}

function validateBlank() {

    var bname = document.form.name.value;
    var bemail = document.form.email.value;
    var bpassword = document.form.password.value;
    var brpassword = document.form.rpassword.value;


    if (bname==null || bname=="" || bemail==null || bemail=="" || bpassword==null || bpassword=="" ||brpassword==null || brpassword==""){
        
        
        alert("You cannot leave the pools open");
        return false;
        
    } else {


        return true;
    }
    


}


function validateEmaill() {
    var vemaill = document.form.email.value;
    var echeck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!vemaill.match(echeck)) {

        alert('Please enter a valid email');

        return false;

    } else {
        return true;

    }
}


function validateCheck(){

    if((validateBlank() === true  && validateName() === true  && validateEmaill() === true  && validatePassword2() === true  && validatePassword() === true )) {
        
        alert("Congratulations, you did it !!");
        return true;

    }    else {
         return false;
    }
}