// selecting input values

const nameValue = document.getElementById('name-value')
const emailValue = document.getElementById('email-value')
const pwdValue = document.getElementById('pwd-value')
const phoneValue = document.getElementById('phone-value')
const occupationValue = document.getElementById('occupation-value')

const submitBtn = document.getElementById('btn')

// selecting error values

const nameError = document.getElementById('name-error')
const emailError = document.getElementById('email-error')
const pwdError = document.getElementById('pwd-error')
const phoneError = document.getElementById('phone-error')
const occupationError = document.getElementById('occupation-error')


function validateName() {

    const name = nameValue.value
    if(name.length == 0) {

        submitBtn.disabled = true;
        nameError.innerHTML = 'Name is Required'
        nameError.style.color = 'red'
        return false
    }
    submitBtn.disabled = false;
    nameError.innerHTML = `<ion-icon name="checkmark-circle-outline" ></ion-icon>`
    nameError.style.color = 'green'
    return true

}

nameValue.addEventListener('keyup', validateName); 
nameValue.addEventListener('blur', validateName);

//focus -> clicking the input 
//blur -> out of the input


function validateEmail() {

    const email = emailValue.value
    if(email.length == 0) {

        submitBtn.disabled = true;
        emailError.innerHTML = 'Email is Required'
        emailError.style.color = 'red'
        return false
    }
    submitBtn.disabled = false;
    emailError.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon>`
    emailError.style.color = 'green'
    return true

}

emailValue.addEventListener('keyup', validateEmail);
emailValue.addEventListener('blur', validateEmail);

function validatePwd() {

    const pwd = pwdValue.value
    if(pwd.length == 0) {

        submitBtn.disabled = true;
        pwdError.innerHTML = 'Password is Required';
        pwdError.style.color = 'red'
        return false
    }
    submitBtn.disabled = false;
    pwdError.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon>`
    pwdError.style.color = 'green'
    return true

}

pwdValue.addEventListener('keyup', validatePwd);
pwdValue.addEventListener('blur', validatePwd);

function validateMobile() {

    const mobile = phoneValue.value
    if(mobile.length == 0) {

        submitBtn.disabled = true;
        phoneError.innerHTML = 'Mobile no is Required'
        phoneError.style.color = 'red'
        return false
    }
    submitBtn.disabled = false;
    phoneError.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon>`
    phoneError.style.color = 'green'
    return true

}

phoneValue.addEventListener('keyup', validateMobile);
phoneValue.addEventListener('blur', validateMobile);

function validateOccupation() {

    const occupation = occupationValue.value
    if(occupation.length == 0) {

        submitBtn.disabled = true;
        occupationError.innerHTML = 'Occupation is Required';
        occupationError.style.color = 'red'
        return false
    }

    submitBtn.disabled = false;
    occupationError.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon>`
    occupationError.style.color = 'green'
    return true

}

occupationValue.addEventListener('keyup', validateOccupation);
occupationValue.addEventListener('blur', validateOccupation);

const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(validateName() && validateEmail() && validatePwd() && validateMobile() && validateOccupation()){
        
        alert('Form Submitted Successfully!');
        form.reset(); // Reset form fields
        nameError.innerHTML = '';
        emailError.innerHTML = '';
        pwdError.innerHTML = '';
        phoneError.innerHTML = '';
        occupationError.innerHTML = '';
        // submitBtn.disabled = true;


    } else {

        alert('Please fill all fields correctly');

    }
    
    }
)


