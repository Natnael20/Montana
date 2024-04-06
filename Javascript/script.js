const newsletterForm = document.getElementById('newsletterForm');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');

newsletterForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting

  const email = emailInput.value;

  if (isValidEmail(email)) {
    // You can add your newsletter signup logic here (e.g., send the email to your server).
    // For this example, we'll just display a success message.
    message.textContent = 'Thank you for signing up for our newsletter!';
    message.style.color = 'green';
  } else {
    message.textContent = 'Please enter a valid email address.';
    message.style.color = 'red';
  }
});

function isValidEmail(email) {
  // A simple email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting) {
          entry.target.classList.add('show');
      }
  });
});

const topElements = document.querySelectorAll('.top');
const bottomElements = document.querySelectorAll('.bottom');
const leftElements = document.querySelectorAll('.left');
const rightElements = document.querySelectorAll('.right');

topElements.forEach((el) => observer.observe(el));
bottomElements.forEach((el) => observer.observe(el));
leftElements.forEach((el) => observer.observe(el));
rightElements.forEach((el) => observer.observe(el));