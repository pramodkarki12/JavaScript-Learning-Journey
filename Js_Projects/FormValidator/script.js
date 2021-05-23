const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById(''); const form = document.getElementById('email');
const password = document.getElementById('pass');
const confirmPassword = document.getElementById('conf__Pass');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (userNameValue === '') {
        //show error
        // add error class
        setError(usename, 'Username cannot be blank');
    } else {
        // add Success message
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setError(email, 'Email cannot be blank');
    } else if ( !isEmail ) {
        setError(email, 'Email is not valid');
    } else {
        setSuccessFor(email)
    }
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(confirmPasswordValue === '') {
		setErrorFor(confirmPassword, 'Password2 cannot be blank');
	} else if(passwordValue !== confirmPasswordValue) {
		setErrorFor(confirmPassword, 'Passwords does not match');
	} else{
		setSuccessFor(confirmPassword);
	}

    function setError(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');

        // add error message inside small
        small.innerText = message;

        // add error class
        formControl.className = 'form__control error';
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form__control success';
    }


    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

}