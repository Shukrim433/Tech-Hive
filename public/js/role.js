const saveBtnHandler = async (event) => {
    
  
    if (event.target.hasAttribute('data-id')) {      //if the thing clicked has the "data-id" attribute then ..:
        
        const role_id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/api/savedRole/`, {
        method: 'POST',
        body: JSON.stringify({ role_id }),
        headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
    
        if (response.ok) {
             // changes the button text to 'Saved'
             event.target.textContent = 'Saved';
             // disables the button after saving
             event.target.disabled = true;
        } else {
        alert('Failed to save role');
        }
    }

  
  };
  /*const SendApplicationBtnHandler = async (event) => {
    
  
    if (event.target.hasAttribute('data-id')) {      //if the thing clicked has the "data-id" attribute then ..:
        
        const role_id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/api/application/`, {
        method: 'POST',
        body: JSON.stringify({ role_id }),
        headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
    
        if (response.ok) {
             // changes the button text to 'Saved'
             event.target.textContent = 'Saved';
             // disables the button after saving
             event.target.disabled = true;
        } else {
        alert('Failed to save role');
        }
    }
  
  };
                                                  <-- this commented out section should be in theapplication.js i think
  document
    .querySelector('.selected-role-card')
    .addEventListener('click', saveBtnHandler);*/

  document
    .querySelector('.selected-role-card')
    .addEventListener('click', saveBtnHandler);
