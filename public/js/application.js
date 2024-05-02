const sendApplicationHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-application').value.trim();
    const first_name = document.querySelector('#first-name-application').value.trim();
    const last_name = document.querySelector('#last-name-application').value.trim();
    const phone_number = document.querySelector('#phone-number-application').value.trim();
    const cv_link = document.querySelector('#cv-application').value.trim();

    if (event.target.hasAttribute('data-id') && email && first_name && last_name && phone_number && cv_link) {
      
      const role_id = event.target.getAttribute('data-id');

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