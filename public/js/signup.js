const signupFormHandler = async (event) => {
    event.preventDefault();
  
   
  const firstName = document.querySelector('#first-name-signup').value.trim();
  const lastName = document.querySelector('#last-name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const phoneNumber = document.querySelector('#phone-number-signup').value.trim();
  const cv = document.querySelector('#cv-signup').value.trim();
  
    if (firstName && lastName && email && phoneNumber && cv) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, phoneNumber, cv }),
        headers: { 'Content-Type': 'application/json' },
      });
  
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
  