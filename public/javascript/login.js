// login.js modified from module, no email required etc
async function loginFormHandler(event) {
 event.preventDefault();

//const email = document.querySelector('#email-login').value.trim();
 const password = document.querySelector('#password-login').value.trim();

 if (username && password) {
   const response = await fetch('/api/users/login', {
     method: 'post',
     body: JSON.stringify({
       email,
       password
     }),
     headers: { 'Content-Type': 'application/json' }
   });

   if (response.ok) {
     document.location.replace('/dashboard/');
   } else {
     alert(response.statusText);
   }
 }
}

async function signupFormHandler(event) {
 event.preventDefault();

 const username = document.querySelector('#username-signup').value.trim();
//  const email = document.querySelector('#email-signup').value.trim();
 const password = document.querySelector('#password-signup').value.trim();
// delete email
 if (username && password) {
   const response = await fetch('/api/users', {
     method: 'post',
     body: JSON.stringify({
       username,
 //      email,
       password
     }),
     headers: { 'Content-Type': 'application/json' }
   });

   if (response.ok) {
     document.location.replace('/dashboard/');
   } else {
     alert(response.statusText);
   }
 }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
