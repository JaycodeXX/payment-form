var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var cardError = document.getElementById('card-error');
var cardNumberError = document.getElementById('card-number-error');
var expMonthError = document.getElementById('exp-month-error');
var expYearError = document.getElementById('exp-year-error');
var cvvError = document.getElementById('cvv-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;
   

    if(name.length == 0){
        nameError.innerHTML = 'Enter a valid name';
        return false;
    }
    if(!name.match(/^[A- Za- z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write a valid full name';
        return false;
    }
    nameError.innerHTML = 'valid';
        return true;
}


function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }

    if(!email.match(/^[A- Za- z\._\-[0-9]*[@][A- Za- z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Invalid Email address'
        return false;
    }

    emailError.innerHTML = 'valid';
}


function validateCard(){
    var cardnumber = document.getElementById('card-number').value;

    if(cardnumber.length == 0){
        cardNumberError.innerHTML = 'Card number is required';
        return false;
    }

    if(cardnumber.length !== 16){
        cardNumberError.innerHTML = 'Card number should be 16 digits';
        return false;
    }

    if(!cardnumber.match(/^[0-9]{10}$/)){
        cardNumberError.innerHTML = 'Only digits';
        return false;
    }

    cardNumberError.innerHTML = 'valid';
    return true;
}

function validateForm(){
    if(!validateName() || !validateCard() || !validateEmail()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill empty fields to submit';
        setTimeout(function(){submitError.style.display = 'none'}, 3000);
        return false;
    }
}

