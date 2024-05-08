const signupFormHandler = async (event) => {
  event.preventDefault();
 
const firstName = document.querySelector('#first-name-signup').value.trim();
const lastName = document.querySelector('#last-name-signup').value.trim();
const email = document.querySelector('#email-signup').value.trim();
const password = document.querySelector('#password-signup').value.trim();
const phoneNumber = document.querySelector('#phone-number-signup').value.trim();
const cv = document.querySelector('#cv-signup').value.trim();

const newUser = { first_name: firstName, last_name: lastName, email, password, phone_number:phoneNumber, cv_link: cv };

  if (newUser) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ ...newUser }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    } 
  } else {
      alert('Please fill out all fields!');
    }
};


document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
