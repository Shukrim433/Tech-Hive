document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.application-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Gather the data from the form fields
        const formData = {
            firstName: document.getElementById('first-name-application').value,
            lastName: document.getElementById('last-name-application').value,
            email: document.getElementById('email-application').value,
            phoneNumber: document.getElementById('phone-number-application').value,
            cvLink: document.getElementById('cv-application').value,
            roleId: this.querySelector('button[type="submit"]').getAttribute('data-id') // Assuming role ID is stored in the submit button's data-id attribute
        };

        // Log the collected data 
        console.log(formData);

        // Example: Send the data to a server using fetch API
        fetch('/api/applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Application submitted successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to submit application.');
        });
    });
});
