// Client-side JavaScript to fetch roles from the server
const fetchRoles = async () => {
  try {
    const response = await fetch('/api/roles');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const roles = await response.json();
    renderRoles(roles);
  } catch (error) {
    console.error('Error fetching roles:', error);
  }
};

const renderRoles = (roles) => {
  const templateScript = document.getElementById('roles-template').innerHTML;
  const template = Handlebars.compile(templateScript);
  const context = { roles };
  const html = template(context);
  document.querySelector('.vacancy-container').innerHTML = html;
};

document.addEventListener('DOMContentLoaded', () => {
  fetchRoles();
});
