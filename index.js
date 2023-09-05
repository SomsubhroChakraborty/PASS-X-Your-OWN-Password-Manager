const websiteNameInput = document.getElementById('websiteName');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const addButton = document.getElementById('add');
const list = document.getElementById('list');

addButton.addEventListener('click', (event) => {
  event.preventDefault();

  const websiteName = websiteNameInput.value;
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (websiteName.trim() === '' || username.trim() === '' || password.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <strong>Website:</strong> ${websiteName}<br>
    <strong>Username:</strong> ${username}<br>
    <strong>Password:</strong> ${password}
  `;

  list.appendChild(listItem);

  websiteNameInput.value = '';
  usernameInput.value = '';
  passwordInput.value = '';
});
