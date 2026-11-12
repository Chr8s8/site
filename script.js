function subscribe(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector('input[type="email"]');
  if (!input.value) return false;

  const toast = document.getElementById('toast');
  toast.classList.add('show');
  form.reset();

  setTimeout(() => toast.classList.remove('show'), 3500);
  return false;
}
