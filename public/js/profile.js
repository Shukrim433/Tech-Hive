  const deleteSavedRole = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/savedRole/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete role');
      }
    }
  }; 
  
  const deleteAppliedRole = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/application/${id}`, {
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
    .querySelector('.saved-role-list')
    .addEventListener('click', deleteSavedRole);
 
  document
  .querySelector('.applied-role-list')
  .addEventListener('click', deleteAppliedRole);
  