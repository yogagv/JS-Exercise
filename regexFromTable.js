// selecting input values

const nameValue = document.getElementById('namevalue')
const emailValue = document.getElementById('emailvalue')
const pwdValue = document.getElementById('pwdvalue')
const phoneValue = document.getElementById('phonevalue')
const genderValue = document.getElementById('gendervalue')
const occupationValue = document.getElementById('occupationvalue')

const submitBtn = document.getElementById('btnvalue')

// selecting error values

const nameError = document.getElementById('nameerror')
const emailError = document.getElementById('emailerror')
const pwdError = document.getElementById('pwderror')
const phoneError = document.getElementById('phoneerror')
const occupationError = document.getElementById('occupationerror')


function validateName() {

    const name = nameValue.value.trim();
    
    if(name.length == 0) {

        submitBtn.disabled = true;
        nameError.innerHTML = 'Name is Required'
        nameError.style.color = 'red'
        return false
    }
        
        if(!name.match(/^[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,}$/)){

        submitBtn.disabled = true;
        nameError.innerHTML = 'Fullname is Required'
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


function validateEmail() {

   const email = emailValue.value.trim();

    if(email.length == 0) {

        submitBtn.disabled = true;
        emailError.innerHTML = 'Email is Required'
        emailError.style.color = 'red'
        return false
    }

    const ePattern = /^[a-zA-Z0-9]*[@]{1}[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/;

    if(!email.match(ePattern)){

        submitBtn.disabled = true;
        emailError.innerHTML = 'Invalid Email ID!'
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

    const pwd = pwdValue.value.trim();
    
    if(pwd.length == 0) {

        submitBtn.disabled = true;
        pwdError.innerHTML = 'Password is Required';
        pwdError.style.color = 'red'
        return false
    }

    const passwordPattern = /^(?=.*[A-Za-z0-9])(?=.*[@#$%^&*!])[A-Za-z0-9@#$%^&*!]{8,}$/;   // \d -> 

    if(!pwd.match(passwordPattern)){

        submitBtn.disabled = true;
        pwdError.innerHTML = 'Passowrd must be 8 character at least one letter, one number and one special character must be included.';
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

    const mobile = phoneValue.value.trim();
    
    if(mobile.length == 0) {

        submitBtn.disabled = true;
        phoneError.innerHTML = 'Mobile no is Required'
        phoneError.style.color = 'red'
        return false
    }

    if(!mobile.match(/^[8,9,6][0-9]{9}$/)){

        submitBtn.disabled = true;
        phoneError.innerHTML = 'Enter a Valid Mobile no'
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

    const occupation = occupationValue.value.trim();
    
    if(occupation.length == 0) {

        submitBtn.disabled = true;
        occupationError.innerHTML = 'Occupation is Required';
        occupationError.style.color = 'red'
        return false
    }

    if(!occupation.match(/^[a-zA-Z]{2,}\s[a-zA-Z]{3,}$/)){

        submitBtn.disabled = true;
        occupationError.innerHTML = 'Enter a Valid Occupation ';
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

         //For Table

     // Create table row
     let tableData = document.getElementById('tableData').getElementsByTagName('tbody')[0];
     let newRow = tableData.insertRow();

     // Insert cells
     nameCell = newRow.insertCell(0);
     emailCell = newRow.insertCell(1);
     pwdCell = newRow.insertCell(2);
     phoneCell = newRow.insertCell(3);
     genderCell = newRow.insertCell(4);
     occupationCell = newRow.insertCell(5);
     actionCell = newRow.insertCell(6);


     //for table
const stu_name = nameValue.value.trim();
const email = emailValue.value.trim();
const pwd = pwdValue.value.trim();
const mobile = phoneValue.value.trim();
const gender = genderValue.value
const occupation = occupationValue.value.trim()
     
     //Assign Values

     nameCell.textContent = stu_name;
     emailCell.textContent = email;
     pwdCell.textContent = '********';
     phoneCell.textContent = mobile;
     genderCell.textContent = gender;
     occupationCell.textContent = occupation;
     
     // Add delete button

     let deleteButton = document.createElement('button');
     deleteButton.className = 'actionbtn';
     deleteButton.textContent = 'Delete';

     deleteButton.onclick = function () {

        tableData.removeChild(newRow);
     };

     actionCell.appendChild(deleteButton);


        form.reset(); // Reset form fields
        nameError.innerHTML = '';
        emailError.innerHTML = '';
        pwdError.innerHTML = '';
        phoneError.innerHTML = '';
        occupationError.innerHTML = '';
        submitBtn.disabled = true;
    } else {
        alert('Please fill all fields correctly');
    }

    
    }
)



