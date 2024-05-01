const roleApplicationHandler = (event) => {
    const id = event.target.getAttribute('role-id');
    window.location.href = `/api/application/${id}`;
};

const saveJob = async (event) => {

    const id = event.target.getAttribute('role.id');
    
    if (id) {
        const response = await fetch(`/api/roles/${id}`, {
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
          } else {
            alert('Failed to create new post');
          }
        }
}


document.querySelectorAll('.applybtn').forEach(button => {
    button.addEventListener('click', roleApplicationHandler);
});

document.querySelectorAll('.savebtn').forEach(button => {
    button.addEventListener('click', saveJob);
});