export default function showErrorMessage(message, element, input, btn) {
  element.style.display = 'block';
  element.textContent = message;
  input.classList.add('error-message');

  setTimeout(() => {
    element.textContent = '';
    input.classList.remove('error-message');
    input.classList.remove('just-validate-success-field');
    element.style.display = 'none';
    btn.disabled = true;
  }, 3000);
}
