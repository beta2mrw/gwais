const counters = document.querySelectorAll('.digit-box');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-bs-target');
    const c = +counter.innerText;

    const increment = target / 100;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 90);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// Form Validation

const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

const email_error = document.getElementById('email-error');

form.addEventListener('submit', (e) => {
  const email_check =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!email.value.match(email_check)) {
    e.preventDefault();
    email_error.innerHTML = 'Please enter a valid email address';
    email_error.style.color = 'red';
    email_error.style.display = 'block';
  }
});
const bookMeeting = document.getElementById('button-container');

bookMeeting.addEventListener('click', (e) => {
  // Open the Google Calendar appointment scheduling page in a new tab
  window.open(
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1vnnz8Z93hfJA5xeu-hz4Wfa1ZD6j2G8H9wDPo4js2uY3XIgMslh-weq2PexpxqAWu2yh4B_pF?gv=true',
    '_blank'
  );
});
