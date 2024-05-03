const sendApplicationHandler = async (event) => {
  event.preventDefault();
  console.log('helo') //**
  // Collect values from the login form
  const email = document.querySelector('#email-application').value.trim();
  const first_name = document.querySelector('#first-name-application').value.trim();
  const last_name = document.querySelector('#last-name-application').value.trim();
  const phone_number = document.querySelector('#phone-number-application').value.trim();
  const cv_link = document.querySelector('#cv-application').value.trim();
  const role_id = document.getElementById('role_id').value.trim()//**

  console.log(email, first_name, last_name, phone_number, cv_link, role_id) //**
  if (email && first_name && last_name && phone_number && cv_link && role_id) {//**
    


    const response = await fetch('/api/application/', {
      method: 'POST',
      body: JSON.stringify({role_id, email, first_name, last_name, phone_number, cv_link }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // redirects the browser to the home page if application is sent (application record is created) successfully
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  } 
};

document
  .querySelector('.application-form')
  .addEventListener('submit', sendApplicationHandler);