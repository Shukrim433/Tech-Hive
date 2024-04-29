  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('role-id')) {
      const id = event.target.getAttribute('role-id');
  
      const response = await fetch(`/api/roles/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete role');
      }
    }
  }; 
  
  document
    .querySelector('.applied-role-list')
    .addEventListener('click', delButtonHandler);
 
  document
  .querySelector('.saved-role-list')
  .addEventListener('click', delButtonHandler);
  